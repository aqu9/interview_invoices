import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { InvoiceHeader } from './invoiceHeader.schema';
import mongoose from 'mongoose';

@Schema()
export class InvoiceSummary {
  @Prop()
  billSundryName: string;

  @Prop()
  Amount: number;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'invoiceHeaders' })
  InvoiceHeader: InvoiceHeader;
}

export const InvoiceSummarySchema =
  SchemaFactory.createForClass(InvoiceSummary);
