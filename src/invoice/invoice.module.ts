import { Module } from '@nestjs/common';
import { InvoiceController } from './invoice.controller';
import { InvoiceService } from './invoice.service';
import { MongooseModule } from '@nestjs/mongoose';
import {
  Invoice,
  InvoiceHeader,
  InvoiceHeaderSchema,
  InvoiceSchema,
  InvoiceSummary,
  InvoiceSummarySchema,
} from 'schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: InvoiceHeader.name,
        schema: InvoiceHeaderSchema,
      },
      {
        name: Invoice.name,
        schema: InvoiceSchema,
      },
      {
        name: InvoiceSummary.name,
        schema: InvoiceSummarySchema,
      },
    ]),
  ],
  controllers: [InvoiceController],
  providers: [InvoiceService],
})
export class InvoiceModule {}
