import { Module } from '@nestjs/common';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { PersonalityTestController } from './controllers/personality-test.controller';
import { PersonalityTestService } from './services/personality-test.service';
import { PersonalityTestEntity } from './entities/personality-test.entity';

@Module({
  controllers: [PersonalityTestController],
  imports: [MikroOrmModule.forFeature([PersonalityTestEntity])],
  providers: [PersonalityTestService],
})
export class PersonalityTestModule {}
