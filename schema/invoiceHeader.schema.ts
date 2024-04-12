import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { Invoice } from './invoice.schema';

@Schema()
export class InvoiceHeader {
  @Prop()
  itemName: string;

  @Prop()
  Date: Date;

  @Prop()
  InvoiceNumber: number;

  @Prop()
  CustomerName: string;

  @Prop()
  BillingAddress: string;

  @Prop()
  ShippingAddress: string;

  @Prop()
  GSTIN: string;

  @Prop()
  TotalAmount: number;

  @Prop({
    type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'invoices' }],
  })
  Invoices: Invoice[];
}

export const InvoiceHeaderSchema = SchemaFactory.createForClass(InvoiceHeader);
