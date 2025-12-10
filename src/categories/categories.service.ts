import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Categories, CategoriesDocument } from './schema/categories.schema';
import { Model } from 'mongoose';

@Injectable()
export class CategoriesService {
  constructor(
    @InjectModel(Categories.name)
    private categoryModel: Model<CategoriesDocument>,
  ) {}

  async create(requestBody: any): Promise<Categories> {
    const role = await this.categoryModel.create(requestBody);
    return role;
  }

  async findAll(): Promise<Categories[]> {
    return this.categoryModel.find().exec();
  } 
}
