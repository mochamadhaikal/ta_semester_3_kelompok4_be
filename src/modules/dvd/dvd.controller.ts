import { Body, Controller, Get, Post } from '@nestjs/common';
import { DvdService } from './dvd.service';
import { Dvd } from './entities';
import { DvdCreateDTO, DvdDetailDTO, DvdUpdateDTO } from './dto';
import { Res } from 'src/configs';

@Controller('dvd')
export class DvdController {
  constructor(private readonly dvdService: DvdService) {}

  @Get('/all')
  findAll(): Promise<Dvd[]> {
    return this.dvdService.findAll();
  }

  @Post('/detail')
  findOne(@Body() item: DvdDetailDTO): Promise<Dvd> {
    return this.dvdService.findOne(item);
  }

  @Post('/save')
  create(@Body() item: DvdCreateDTO): Promise<Res> {
    return this.dvdService.create(item);
  }

  @Post('/edit')
  async update(@Body() itemUpdate: DvdUpdateDTO): Promise<Res> {
    return this.dvdService.update(itemUpdate);
  }

  @Post('/delete')
  async delete(@Body() item: DvdDetailDTO): Promise<Res> {
    return this.dvdService.delete(item);
  }
}
