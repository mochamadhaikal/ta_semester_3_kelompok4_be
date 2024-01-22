import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Loan } from './entities';
import { LoanDetailDTO, LoanCreateDTO, LoanUpdateDTO } from './dto';
import { Res } from 'src/configs';

@Injectable()
export class LoanService {
  constructor(
    @InjectRepository(Loan) // Replace with your actual Loan
    private loanRepository: Repository<Loan>,
  ) {}
  findAll(): Promise<Loan[]> {
    return this.loanRepository.find();
  }

  findOne(item: LoanDetailDTO): Promise<Loan> {
    try {
      console.log('Success Get Loan Detail with Id:', item.loanId);
      return this.loanRepository.findOne({
        where: { loanId: item.loanId },
      });
    } catch (error) {
      console.log('Err:', error.message);
    }
  }

  async create(item: LoanCreateDTO): Promise<Res> {
    try {
      const check = await this.loanRepository.findBy({
        friendId: item.friendId,
        dvdId: item.dvdId,
        loanDate: item.loanDate,
        returnDate: item.returnDate,
      });
      if (check.length > 0) {
        return {
          status: false,
          message: 'This data already exists!',
        };
      }
      await this.loanRepository.insert(item);
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

  async update(itemUpdate: LoanUpdateDTO): Promise<Res> {
    try {
      const item = await this.loanRepository.findOne({
        where: { loanId: itemUpdate.loanId },
      });
      if (item) {
        const check = await this.loanRepository.findBy({
          friendId: itemUpdate.friendId,
          dvdId: itemUpdate.dvdId,
          loanDate: itemUpdate.loanDate,
          returnDate: itemUpdate.returnDate,
        });
        if (check.length > 0) {
          return {
            status: false,
            message: 'This data already exists!',
          };
        }
        await this.loanRepository.update(item.loanId, itemUpdate);
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

  async delete(loanDelete: LoanDetailDTO): Promise<Res> {
    try {
      await this.loanRepository.delete({ loanId: loanDelete.loanId });
      await this.loanRepository.delete({ loanId: loanDelete.loanId });
      return {
        status: true,
        message: 'Success Delete Loan',
      };
    } catch (error) {
      console.log(error);
      return {
        status: false,
        message: 'Failed Delete Loan!',
      };
    }
  }
}
