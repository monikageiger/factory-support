import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  ManyToOne,
} from 'typeorm';
import { SupportRequest } from '../supportRequests/supportRequest.entity';

@Entity('signupEvents')
export class SignupEvent extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'text',
  })
  userId: string;

  @Column({
    type: 'text',
  })
  status: string;

  @ManyToOne(() => SupportRequest, (request) => request.id, { eager: true })
  supportRequest: SupportRequest;
}
