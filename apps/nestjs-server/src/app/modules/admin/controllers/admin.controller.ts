import { Controller, Get, NotImplementedException, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Admin')
@Controller('admin')
export class AdminController {
  @Get('personality-test')
  listAllTests() {
    throw new NotImplementedException();
  }

  @Get('personality-test/:id')
  testById() {
    throw new NotImplementedException();
  }

  @Post('personality-test')
  addTest() {
    throw new NotImplementedException();
  }
}
