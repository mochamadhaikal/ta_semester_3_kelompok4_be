import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { DvdService } from './dvd.service';
import { Dvd } from './entities';
import { DvdDetailDTO } from './dto';

@Controller('dvd')
export class DvdController {
  constructor(private readonly dvdService: DvdService) {}

  @Get('/all')
  findAll(): Promise<Dvd[]> {
    return this.dvdService.findAll();
  }

  @Get('/detail/:id')
  findOne(@Param('id') id: DvdDetailDTO): Promise<Dvd> {
    return this.dvdService.findOne(id);
  }

  @Post('/save')
  create(@Body() item: Dvd): Promise<Dvd> {
    return this.dvdService.create(item);
  }

  @Post('/edit')
  async update(@Body() id: number, itemUpdate: Dvd): Promise<Dvd> {
    return this.dvdService.update(id, itemUpdate);
  }

  @Post('/delete')
  async delete(@Body() id: number): Promise<void> {
    return this.dvdService.delete(id);
  }
}
