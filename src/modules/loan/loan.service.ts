import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Loan } from './entities';

@Injectable()
export class LoanService {
  constructor(
    @InjectRepository(Loan)
    private readonly loanRepository: Repository<Loan>,
  ) {}
  findAll(): Promise<Loan[]> {
    return this.loanRepository.find();
  }

  findOne(id: number): Promise<Loan> {
    return this.loanRepository.findOne({
      where: { id: id },
    });
  }
  create(item: Loan): Promise<Loan> {
    return this.loanRepository.save(item);
  }

  async update(id: number, itemUpdate: Loan): Promise<Loan> {
    const item = await this.loanRepository.findOne({
      where: { id: id },
    });
    if (item) {
      return this.loanRepository.save({ ...item, ...itemUpdate });
    }
    return null;
  }

  async delete(id: number): Promise<void> {
    await this.loanRepository.delete(id);
  }
}
