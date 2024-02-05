import { Loan } from 'src/modules/loan/entities';
import {
  Entity,
  Column,
  BaseEntity,
  PrimaryGeneratedColumn,
  OneToMany,
  PrimaryColumn,
} from 'typeorm';

@Entity({ name: 'dvd', schema: 'public' })
export class Dvd extends BaseEntity {
  @PrimaryGeneratedColumn('increment')
  @PrimaryColumn({ name: 'dvd_id' })
  @OneToMany(() => Loan, (loan) => loan.dvdId, { cascade: ['remove'] })
  dvdId: string;

  @Column({ name: 'title', unique: true, nullable: false })
  title: string;

  @Column({ name: 'actor_name', nullable: false })
  actorName: string;
}
