import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { createUserDTO } from './dto/createUser.dto';
import { AuthGuard } from './helpers/auth.guard';
import { GetUser } from './helpers/getUser';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @UseGuards(AuthGuard)
  @Get()
  getHello(@GetUser() id): string {
    console.log(id);
    return this.appService.getHello();
  }

  @Post()
  async createUser(@Body() data: createUserDTO) {
    console.log(data);
    return await this.appService.createUser(data);
  }
}
