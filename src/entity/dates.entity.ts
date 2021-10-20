import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Court } from './court.entity';
import { Slot } from './slot.entity';


@Entity()
export class Dates extends BaseEntity {
  @PrimaryGeneratedColumn()
  dateId: Number;

  @Column({name:'date'})
  date: Date;

  @ManyToOne((_type) => Slot, (slot) => slot.dates, { eager: true })
  @JoinColumn([{ name: 'slot_id', referencedColumnName: 'slotId' }])
  slot: Slot[];

  @Column({name:'slot_id'})
  slotId: String;

  @ManyToOne((_type) => Court, (court) => court.dates, { eager: true })
  @JoinColumn([{ name: 'court_id', referencedColumnName: 'courtId' }])
  court: Court[];

  @Column({name:'court_id'})
  courtId: String;

  @Column({name:'booked_by'})
  bookedBy: string;

  @Column({name:'booked' ,default: false})
  booked:boolean;



  


  
  
  
}
