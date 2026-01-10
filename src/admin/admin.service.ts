import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Admin } from './schema/admin.schema';
import { Model } from 'mongoose';
import { AdminLoginDto } from './dto/admin.login.dto';
import { AdminRegisterDto } from './dto/admin.register.dto';

@Injectable()
export class AdminService {
  constructor(
    @InjectModel(Admin.name)
    private adminModel: Model<Admin>,
  ) {}

  async create(requestBody: AdminRegisterDto) {
    const response = await this.adminModel.create(requestBody);
    return response;
  }

  async login(requestBody: AdminLoginDto) {
    const validateUser = await this.adminModel.findOne({
      username: requestBody.username,
    });
    if (!validateUser || validateUser.password != requestBody.password) {
      throw Error('Invalid user');
    }
    const sendUserDetails = await this.adminModel
      .findOne({
        username: requestBody.username,
      })
      .select('username');

    return sendUserDetails;
  }
}
