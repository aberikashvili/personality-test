import { Controller, Get, NotImplementedException, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  @Get('whoami')
  whoami() {
    throw new NotImplementedException();
  }

  @Post('signin')
  signIn() {
    throw new NotImplementedException();
  }

  @Post('refresh')
  refresh() {
    throw new NotImplementedException();
  }
}
