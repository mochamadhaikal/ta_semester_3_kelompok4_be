import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class FriendUpdateDTO {
  @IsNumber()
  @IsNotEmpty()
  friendId: number;

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  address: string;

  @IsString()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  phoneNumber: string;
}
