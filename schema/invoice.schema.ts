import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Invoice {
  @Prop()
  itemName: string;

  @Prop()
  Quantity: number;

  @Prop()
  price: number;

  @Prop()
  amount: number;
}

export const InvoiceSchema = SchemaFactory.createForClass(Invoice);
