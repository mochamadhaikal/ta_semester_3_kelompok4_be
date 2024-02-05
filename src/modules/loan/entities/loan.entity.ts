// Import necessary dependencies from TypeORM
import { Entity, Column, BaseEntity, PrimaryColumn } from 'typeorm';

// Define the LifeCustomerBase entity class
@Entity({ name: 'loan', schema: 'public' })
export class Loan extends BaseEntity {
  @PrimaryColumn({ name: 'loan_id', type: 'int' })
  loanId: number;

  @Column({ name: 'friend_id' })
  friendId: number;

  @Column({ name: 'dvd_id' })
  dvdId: string;

  @Column({ name: 'loan_date' })
  loanDate: Date;

  @Column({ name: 'return_date' })
  returnDate: Date;
}
