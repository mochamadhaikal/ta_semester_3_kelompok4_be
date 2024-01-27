import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Dvd } from './entities';
import { DvdCreateDTO, DvdDetailDTO, DvdUpdateDTO } from './dto';
import { Loan } from '../loan/entities';
import { Res } from 'src/configs';

@Injectable()
export class DvdService {
  constructor(
    @InjectRepository(Dvd) // Replace with your actual Dvd
    private dvdRepository: Repository<Dvd>,
    @InjectRepository(Loan) // Replace with your actual Loan
    private loanRepository: Repository<Loan>,
  ) {}
  findAll(): Promise<Dvd[]> {
    return this.dvdRepository.find();
  }

  findOne(item: DvdDetailDTO): Promise<Dvd> {
    try {
      console.log('Success Get Dvd Detail with Id:', item.dvdId);
      return this.dvdRepository.findOne({
        where: { dvdId: item.dvdId },
      });
    } catch (error) {
      console.log('Err:', error.message);
    }
  }

  async create(item: DvdCreateDTO): Promise<Res> {
    try {
      const check = await this.dvdRepository.findBy({
        title: item.title,
        actorName: item.actorName,
      });
      if (check.length > 0) {
        return {
          status: false,
          message: 'This data already exists!',
        };
      }
      await this.dvdRepository.insert(item);
      return {
        status: true,
        message: 'Success Created Data!',
      };
    } catch (error) {
      return {
        status: false,
        message: error.message,
      };
    }
  }

  async update(itemUpdate: DvdUpdateDTO): Promise<Res> {
    try {
      const item = await this.dvdRepository.findOne({
        where: { dvdId: itemUpdate.dvdId },
      });
      if (item) {
        const check = await this.dvdRepository.findBy({
          title: itemUpdate.title,
          actorName: itemUpdate.actorName,
        });
        if (check.length > 0) {
          return {
            status: false,
            message: 'This data already exists!',
          };
        }
        await this.dvdRepository.update(item.dvdId, itemUpdate);
        return {
          status: true,
          message: 'Success Update Data!',
        };
      }
    } catch (error) {
      return {
        status: false,
        message: error.message,
      };
    }
  }

  async delete(dvdDelete: DvdDetailDTO): Promise<Res> {
    try {
      await this.loanRepository.delete({ dvdId: dvdDelete.dvdId });
      await this.dvdRepository.delete({ dvdId: dvdDelete.dvdId });
      console.log('Success Delete Dvd');
      return {
        status: true,
        message: 'Success Delete Dvd',
      };
    } catch (error) {
      console.log(error);
      return {
        status: false,
        message: 'Failed Delete Dvd!',
      };
    }
  }
}
