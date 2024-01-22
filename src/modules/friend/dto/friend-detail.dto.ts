import { IsNotEmpty, IsNumber } from 'class-validator';

export class FriendDetailDTO {
  @IsNumber()
  @IsNotEmpty()
  friendId: number;
}
