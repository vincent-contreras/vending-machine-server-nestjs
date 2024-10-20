import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateButtonDto } from './dto/create-button.dto';
import { UpdateButtonDto } from './dto/update-button.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Button } from './entities/button.entity';
import { Model } from 'mongoose';

@Injectable()
export class ButtonsService {
  constructor(@InjectModel(Button.name) private buttonModel: Model<Button>) {}

  async create(createButtonDto: CreateButtonDto) {
    const result = await this.buttonModel.findOne({ buttonNo: createButtonDto.buttonNo });

    if (result != null) {
      return new BadRequestException(`${createButtonDto.buttonNo} already exists! Consider removing this item first.`);
    }

    const button = new this.buttonModel(createButtonDto);
    return button.save();
  }

  findAll() {
    return this.buttonModel.find().exec();
  }

  async buyOne(buttonNo: number) {
    const result = await this.buttonModel.findOne({ buttonNo });

    if (result == null) {
      return new BadRequestException(`${buttonNo} does not exit`);
    }

    if (result.count == 0) {
      return new BadRequestException(`${buttonNo} has no more stocks`);
    }
    result.count = result.count - 1;

    await this.buttonModel.updateOne({ buttonNo }, result);

    return { purchase: true }
  }

  async updateStock(buttonNo: number, updateButtonDto: UpdateButtonDto) {
    const result = await this.buttonModel.findOne({ buttonNo });

    if (result == null) {
      return new BadRequestException(`${buttonNo} does not exit`);
    }

    result.count = updateButtonDto.count;

    await this.buttonModel.updateOne({ buttonNo }, result); 

    return this.buttonModel.findOne({ buttonNo });
  }

  async removeItems(buttonNo: number) {
    const result = await this.buttonModel.findOne({ buttonNo });

    if (result == null) {
      return new BadRequestException(`${buttonNo} does not exit`);
    }

    result.count = 0;

    await this.buttonModel.updateOne({ buttonNo }, result);
  }
}
