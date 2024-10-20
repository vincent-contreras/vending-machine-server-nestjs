import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ButtonsService } from './buttons.service';
import { CreateButtonDto } from './dto/create-button.dto';
import { UpdateButtonDto } from './dto/update-button.dto';
import { Button } from './entities/button.entity';

@Controller({ version: '1', path: 'buttons'})
export class ButtonsController {
  constructor(private readonly buttonsService: ButtonsService) {}

  @Post()
  create(@Body() createButtonDto: CreateButtonDto) {
    return this.buttonsService.create(createButtonDto);
  }

  @Get()
  findAll(): Promise<Button[]> {
    return this.buttonsService.findAll();
  }

  @Get(':buttonNo')
  buyOne(@Param('buttonNo') buttonNo: string) {
    return this.buttonsService.buyOne(+buttonNo);
  }

  @Patch(':buttonNo')
  update(@Param('buttonNo') buttonNo: string, @Body() updateButtonDto: UpdateButtonDto) {
    return this.buttonsService.updateStock(+buttonNo, updateButtonDto);
  }

  @Delete(':buttonNo')
  remove(@Param('buttonNo') buttonNo: string) {
    return this.buttonsService.removeItems(+buttonNo);
  }
}
