// Import necessary dependencies from TypeORM
import { Entity, Column, BaseEntity, PrimaryColumn } from 'typeorm';

// Define the LifeCustomerBase entity class
@Entity({ name: 'loan', schema: 'public' })
export class Loan extends BaseEntity {
  @PrimaryColumn({ name: 'loan_id', type: 'int' })
  id: number;

  @Column({ name: 'friend_id' })
  friendId: number;

  @Column({ name: 'dvd_id' })
  dvdId: number;

  @Column({ name: 'loan_date' })
  loanDate: string;

  @Column({ name: 'return_date' })
  returnDate: string;
}
