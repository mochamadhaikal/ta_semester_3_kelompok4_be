import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Friend } from './entities';

@Injectable()
export class FriendService {
  constructor(
    @InjectRepository(Friend)
    private readonly friendRepository: Repository<Friend>,
  ) {}
  findAll(): Promise<Friend[]> {
    return this.friendRepository.find();
  }

  findOne(id: number): Promise<Friend> {
    return this.friendRepository.findOne({
      where: { id: id },
    });
  }
  create(item: Friend): Promise<Friend> {
    return this.friendRepository.save(item);
  }

  async update(id: number, itemUpdate: Friend): Promise<Friend> {
    const item = await this.friendRepository.findOne({
      where: { id: id },
    });
    if (item) {
      return this.friendRepository.save({ ...item, ...itemUpdate });
    }
    return null;
  }

  async delete(id: number): Promise<void> {
    await this.friendRepository.delete(id);
  }
}
