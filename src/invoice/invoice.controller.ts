import { Controller, Get, Param, Post } from '@nestjs/common';
import { InvoiceService } from './invoice.service';

@Controller('invoice')
export class InvoiceController {
  constructor(private readonly invoiceService: InvoiceService) {}

  @Post()
  createInvoice() {
    return this.invoiceService.createInvoice();
  }

  @Get(':id')
  getInvoices(@Param('id') id: string) {
    return this.invoiceService.getInvoiceById(id);
  }
  @Get('')
  getAllInvoices() {
    return this.invoiceService.getAllInvoices();
  }
}
