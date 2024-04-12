import { IsEmail, IsString } from 'class-validator';

export class createUserDTO {
  @IsString()
  userName: string;

  @IsString()
  @IsEmail()
  email: string;
}
