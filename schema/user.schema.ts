import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class User {
  @Prop()
  userName: string;

  @Prop()
  email: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
