import { config } from 'dotenv';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from 'schema';
import { JwtModule } from '@nestjs/jwt';
import { InvoiceModule } from './invoice/invoice.module';
config();

@Module({
  imports: [
    MongooseModule.forRoot(process.env.MONGOURI),
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
    JwtModule.register({
      global: true,
      secret: process.env.secret,
      signOptions: { expiresIn: process.env.expiresIn },
    }),
    InvoiceModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
