import { Entity, Column, BaseEntity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'dvd', schema: 'public' })
export class Dvd extends BaseEntity {
  @PrimaryGeneratedColumn({ name: 'dvd_id', type: 'int' })
  id: number;

  @Column({ name: 'title', unique: true })
  title: string;

  @Column({ name: 'actor_name' })
  actorName: string;
}
