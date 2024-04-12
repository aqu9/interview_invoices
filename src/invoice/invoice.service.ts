import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Invoice, InvoiceHeader, InvoiceSummary } from 'schema';

@Injectable()
export class InvoiceService {
  constructor(
    @InjectModel(Invoice.name) private readonly invoiceModel: Model<Invoice>,
    @InjectModel(InvoiceHeader.name)
    private readonly invoiceHeaderModel: Model<InvoiceHeader>,
    @InjectModel(InvoiceSummary.name)
    private readonly invoiceSummaryModel: Model<InvoiceSummary>,
    // private readonly jwtService: JwtService,
  ) {}
  async createInvoice() {
    const data = {
      date: Date.now(),
      InvoiceNumber: 123,
      CustomerName: '',
      BillingAddress: 'delhi',
      ShippingAddress: 'delhi',
      items: [{ itemname: '', price: 20, qty: 5 }],
      GST: '',
    };

    const { items, ...invoiceheaderData } = data;

    let totalAmount = 0;

    const invoiceIds = ['6619134eee6d42cabeb82f4e'];
    await Promise.all([
      items.forEach(async (elem) => {
        const Amount = elem.qty * elem.price;
        const invoice = new this.invoiceModel({
          itemName: '',
          Quantity: elem.qty,
          price: elem.price,
          amount: Amount,
        });

        await invoice.save();
        totalAmount += Amount;
        console.log(invoice._id, 'inside for lop');
        invoiceIds.push(invoice._id.toString());
      }),
    ]);

    console.log(invoiceIds);

    const invoiceHeader = new this.invoiceHeaderModel({
      ...invoiceheaderData,
      TotalAmount: totalAmount,
      Invoices: invoiceIds,
    });
    await invoiceHeader.save();

    const invoiceSUmmary = new this.invoiceSummaryModel({
      billSundryName: `${invoiceHeader._id}_summary`,
      Amount: totalAmount,
      InvoiceHeader: invoiceHeader._id,
    });

    await invoiceSUmmary.save();
    return invoiceSUmmary;
  }

  async getInvoiceById(id: string) {
    const invoices = await this.invoiceHeaderModel.findById(id);
    return invoices;
  }

  async getAllInvoices() {
    const invoices = await this.invoiceHeaderModel.find();
    return invoices;
  }
}
