import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { FriendService } from './friend.service';
import { Friend } from './entities';

@Controller('friend')
export class FriendController {
  constructor(private readonly friendService: FriendService) {}

  @Get('/all')
  findAll(): Promise<Friend[]> {
    return this.friendService.findAll();
  }

  @Get('/detail/:id')
  findOne(@Param('id') id: number): Promise<Friend> {
    return this.friendService.findOne(id);
  }

  @Post('/save')
  create(@Body() item: Friend): Promise<Friend> {
    return this.friendService.create(item);
  }

  @Post('/edit')
  async update(@Body() id: number, itemUpdate: Friend): Promise<Friend> {
    return this.friendService.update(id, itemUpdate);
  }

  @Post('/delete')
  async delete(@Body() id: number): Promise<void> {
    return this.friendService.delete(id);
  }
}
