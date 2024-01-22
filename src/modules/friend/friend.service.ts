import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Friend } from './entities';
import { Loan } from '../loan/entities';
import { FriendCreateDTO, FriendDetailDTO, FriendUpdateDTO } from './dto';
import { Res } from 'src/configs';

@Injectable()
export class FriendService {
  constructor(
    @InjectRepository(Friend) // Replace with your actual Friend
    private friendRepository: Repository<Friend>,
    @InjectRepository(Loan) // Replace with your actual Loan
    private loanRepository: Repository<Loan>,
  ) {}
  findAll(): Promise<Friend[]> {
    return this.friendRepository.find();
  }

  findOne(item: FriendDetailDTO): Promise<Friend> {
    try {
      console.log('Success Get Friend Detail with Id:', item.friendId);
      return this.friendRepository.findOne({
        where: { friendId: item.friendId },
      });
    } catch (error) {
      console.log('Err:', error.message);
    }
  }

  async create(item: FriendCreateDTO): Promise<Res> {
    try {
      const check = await this.friendRepository.findBy({
        email: item.email,
        phoneNumber: item.phoneNumber,
      });
      if (check.length > 0) {
        return {
          status: false,
          message: 'This data already exists!',
        };
      }
      await this.friendRepository.insert(item);
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

  async update(itemUpdate: FriendUpdateDTO): Promise<Res> {
    try {
      const item = await this.friendRepository.findOne({
        where: { friendId: itemUpdate.friendId },
      });
      if (item) {
        const check = await this.friendRepository.findBy({
          email: itemUpdate.email,
          phoneNumber: itemUpdate.phoneNumber,
        });
        if (check.length > 0) {
          return {
            status: false,
            message: 'This data already exists!',
          };
        }
        await this.friendRepository.update(item.friendId, itemUpdate);
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

  async delete(friendDelete: FriendDetailDTO): Promise<Res> {
    try {
      await this.loanRepository.delete({ friendId: friendDelete.friendId });
      await this.friendRepository.delete({ friendId: friendDelete.friendId });
      return {
        status: true,
        message: 'Success Delete Friend',
      };
    } catch (error) {
      console.log(error);
      return {
        status: false,
        message: 'Failed Delete Friend!',
      };
    }
  }
}
