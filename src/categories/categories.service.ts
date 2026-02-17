import { Injectable, NotFoundException } from '@nestjs/common';
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
    const category = await this.categoryModel.create(requestBody);
    return category;
  }

  async findAll(): Promise<Categories[]> {
    return this.categoryModel.find().exec();
  }

  async deleteById(id: string) {
    const deleted =
      await this.categoryModel.findByIdAndDelete(id);

    if (!deleted) {
      throw new NotFoundException(
        'Category not found',
      );
    }

    return deleted;
  }

  async updateById(id: string, payload: Partial<Categories>): Promise<Categories> {
    const updated = await this.categoryModel
      .findByIdAndUpdate(id, payload, { new: true })
      .exec();

    if (!updated) {
      throw new NotFoundException('Category not found');
    }

    return updated;
  }
}

