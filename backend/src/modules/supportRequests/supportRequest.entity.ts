import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from 'typeorm';

@Entity('supportRequests')
export class SupportRequest extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'text',
  })
  description: string;

  @Column({
    type: 'text',
  })
  workType: string;

  @Column({
    type: 'text',
  })
  location: string;

  @Column({
    type: 'date',
  })
  dateOfJob: string;

  @Column({
    type: 'integer',
  })
  requiredNumOfPeople: number;

  @Column({
    type: 'text',
  })
  createdBy: string;

  @Column({
    type: 'date',
  })
  createdAt: string;
}
