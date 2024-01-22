import { Body, Controller, Get, Post } from '@nestjs/common';
import { FriendService } from './friend.service';
import { Friend } from './entities';
import { Res } from 'src/configs';
import { FriendCreateDTO, FriendDetailDTO, FriendUpdateDTO } from './dto';

@Controller('friend')
export class FriendController {
  constructor(private readonly friendService: FriendService) {}

  @Get('/all')
  findAll(): Promise<Friend[]> {
    return this.friendService.findAll();
  }

  @Post('/detail')
  findOne(@Body() item: FriendDetailDTO): Promise<Friend> {
    return this.friendService.findOne(item);
  }

  @Post('/save')
  create(@Body() item: FriendCreateDTO): Promise<Res> {
    return this.friendService.create(item);
  }

  @Post('/edit')
  async update(@Body() itemUpdate: FriendUpdateDTO): Promise<Res> {
    return this.friendService.update(itemUpdate);
  }

  @Post('/delete')
  async delete(@Body() item: FriendDetailDTO): Promise<Res> {
    return this.friendService.delete(item);
  }
}
