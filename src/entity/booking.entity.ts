import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Court } from './court.entity';
import { Slot } from './slot.entity';


@Entity()
export class Bookings extends BaseEntity {
  @PrimaryGeneratedColumn()
  bookindId:any;

  @ManyToOne((_type) => Court, (court) => court.booking, { eager: true })
  @JoinColumn([{ name: 'court_id', referencedColumnName: 'courtId' }])
  court: Court[];

  @Column('integer', { name: 'court_id' })
  courtId: string;


  @Column({name:'date'})
  date: Date;

  @ManyToOne((_type) => Slot, (slot) => slot.booking, { eager: true })
  @JoinColumn([{ name: 'slot_id', referencedColumnName: 'slotId' }])
  slot: Slot[];

  @Column({name:'slot_id'})
  slotId: String;

  @Column({name:'booker_by'})
  bookedBy: string;
  static forEach: any;

  
  
  
  
}
