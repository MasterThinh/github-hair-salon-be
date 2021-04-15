import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateStaffDto } from './dto/create-staff.dto';
import { UpdateStaffDto } from './dto/update-staff.dto';
import { Staff, StaffDocument } from '../schemas/staff.schema';
import { Model } from 'mongoose';

@Injectable()
export class StaffService {

  constructor(@InjectModel(Staff.name) private staffModel: Model<StaffDocument>) { }

  async create(createStaffDto: CreateStaffDto) {
    return new this.staffModel(createStaffDto).save();
  }

  async findAll() {
    return this.staffModel.find();
  }

  async findOne(_id: string) {
    return this.staffModel.findOne({ _id });
  }

  async findOneByUsernamePassword(params: {username: string, password: string}) {
    return this.staffModel.findOne(params)
  }

  async update(_id: string, updateStaffDto: UpdateStaffDto) {
    return this.staffModel.updateOne({ _id }, { $set: updateStaffDto });
  }

  async remove(_id: string) {
    return this.staffModel.deleteOne({ _id });

  }
}
