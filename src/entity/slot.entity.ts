import {
  BaseEntity,
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Bookings } from './booking.entity';
import { Dates } from './dates.entity';


@Entity()
export class Slot extends BaseEntity {
  @PrimaryGeneratedColumn({name:'slot_id'})
  slotId: Number;

  @Column({name:'slot_time'})
  slotTime: String;

  @OneToMany( () => Dates, dates => dates.slot,{ eager: false } )
  dates:Dates[];

  @Column({name:'status',default: () => "true" })
  status: boolean;

  @OneToMany((_type) => Bookings, (booking) => booking.courtId, { eager: false })
  booking: Bookings[];

  



  
  
  
}
