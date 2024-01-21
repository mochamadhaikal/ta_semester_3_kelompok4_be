import { Entity, Column, BaseEntity, PrimaryColumn } from 'typeorm';

@Entity({ name: 'friend', schema: 'public' })
export class Friend extends BaseEntity {
  @PrimaryColumn({ name: 'friend_id', type: 'int' })
  id: number;

  @Column({ name: 'name' })
  name: string;

  @Column({ name: 'address' })
  address: string;

  @Column({ name: 'email' })
  email: string;

  @Column({ name: 'phone_number' })
  phoneNumber: string;
}
