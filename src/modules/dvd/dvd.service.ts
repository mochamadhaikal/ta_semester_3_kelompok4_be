import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Dvd } from './entities';
import { DvdCreateDTO, DvdDetailDTO } from './dto';
@Injectable()
export class DvdService {
  constructor(
    @InjectRepository(Dvd)
    private readonly dvdRepository: Repository<Dvd>,
  ) {}
  findAll(): Promise<Dvd[]> {
    return this.dvdRepository.find();
  }

  findOne(id: DvdDetailDTO): Promise<Dvd> {
    return this.dvdRepository.findOne({
      where: { id: id },
    });
  }
  create(item: DvdCreateDTO): Promise<Dvd> {
    return this.dvdRepository.save(item);
  }

  async update(id: number, itemUpdate: Dvd): Promise<Dvd> {
    const item = await this.dvdRepository.findOne({
      where: { id: id },
    });
    if (item) {
      return this.dvdRepository.save({ ...item, ...itemUpdate });
    }
    return null;
  }

  async delete(id: number): Promise<void> {
    await this.dvdRepository.delete(id);
  }
}
