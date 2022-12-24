import { forwardRef, Module } from '@nestjs/common';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { TsMorphMetadataProvider } from '@mikro-orm/reflection';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AdminModule } from './modules/admin/admin.module';
import { AuthModule } from './modules/auth/auth.module';
import { PersonalityTestModule } from './modules/personality-test/personality-test.module';

@Module({
  imports: [
    MikroOrmModule.forRoot({
      type: 'sqlite',
      dbName: 'personality-test-db.sqlite3',
      // entities: ['dist/**/*.entity.js'],
      // entitiesTs: ['apps/nestjs-server/src/**/*.entity.ts'],
      metadataProvider: TsMorphMetadataProvider,
      migrations: {
        path: 'dist/migrations',
        pathTs: 'apps/nestjs-server/src/apps/database/migrations',
      },
    }),
    forwardRef(() => AdminModule),
    forwardRef(() => AuthModule),
    forwardRef(() => PersonalityTestModule),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
