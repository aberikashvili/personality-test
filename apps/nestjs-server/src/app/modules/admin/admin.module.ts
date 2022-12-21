import { Module } from '@nestjs/common';
import { AdminController } from './controllers/admin/admin.controller';

@Module({
  controllers: [AdminController],
})
export class AdminModule {}
