import { Loan } from 'src/modules/loan/entities';
import {
  Entity,
  Column,
  BaseEntity,
  PrimaryGeneratedColumn,
  OneToMany,
} from 'typeorm';

@Entity({ name: 'friend', schema: 'public' })
export class Friend extends BaseEntity {
  @PrimaryGeneratedColumn({ name: 'friend_id', type: 'int' })
  @OneToMany(() => Loan, (loan) => loan.friendId, { cascade: ['remove'] })
  friendId: number;

  @Column({ name: 'name' })
  name: string;

  @Column({ name: 'address' })
  address: string;

  @Column({ name: 'email' })
  email: string;

  @Column({ name: 'phone_number' })
  phoneNumber: string;
}
