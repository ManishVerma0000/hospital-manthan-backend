import { MiddlewareConsumer, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './db/conn';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { DoctorModule } from './doctor/doctor.module';
import { CategoriesModule } from './categories/categories.module';
import { UploadMiddleware } from './middleware/upload.middleware';
import { UploadImagesModule } from './upload-images/upload-images.module';
import { HospitalModule } from './hospital/hospital.module';


@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }), // loads .env globally
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get<string>('MONGO_URI')
      }),
    }), DoctorModule, CategoriesModule, UploadImagesModule, HospitalModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
    configure(consumer: MiddlewareConsumer) {
    consumer.apply(UploadMiddleware).forRoutes('upload-image');
  }

}
