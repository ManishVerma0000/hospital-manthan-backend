import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './db/conn';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { DoctorModule } from './doctor/doctor.module';
import { CategoriesModule } from './categories/categories.module';
import { CatogriesService } from './catogries/catogries.service';
import { CatogriesController } from './catogries/catogries.controller';
import { CateogriesController } from './cateogries/cateogries.controller';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }), // loads .env globally
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get<string>('MONGO_URI')
      }),
    }), DoctorModule, CategoriesModule,
  ],
  controllers: [AppController, CatogriesController, CateogriesController],
  providers: [AppService, CatogriesService],
})
export class AppModule {}
