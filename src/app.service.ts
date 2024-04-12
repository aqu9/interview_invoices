import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from 'schema';
import { createUserDTO } from './dto/createUser.dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AppService {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<User>,
    private readonly jwtService: JwtService,
  ) {}
  getHello(): string {
    return 'Hello World!';
  }

  async createUser(data: createUserDTO) {
    const user = await new this.userModel(data);
    await user.save();
    const payload = {
      _id: user._id,
      name: user.userName,
    };
    const token = await this.jwtService.signAsync(payload);
    const res = {
      user,
      token,
    };

    return res;
  }
}
