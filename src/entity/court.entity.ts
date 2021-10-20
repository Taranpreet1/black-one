import { IsEnum } from 'class-validator';
import { CourtType } from 'src/enum/court-type.enum';
import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  ManyToMany,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Bookings } from './booking.entity';
import { Dates } from './dates.entity';
import { Sportsclub } from './spots-club.entity';


@Entity()
export class Court extends BaseEntity {
  @PrimaryGeneratedColumn({name:'court_id'})
  courtId: Number;

  @Column({name:'court_name'})
  courtName: String;

  @Column({name:'court_type',})
  type: String;

  @Column("boolean", { name: "is_active", default: () => "false" })
	isActive: boolean;

  @OneToMany((_type) => Bookings, (booking) => booking.courtId, { eager: false })
  booking: Bookings[];

  @OneToMany( () => Dates, dates => dates.slot,{ eager: false } )
  dates:Dates[];

  @ManyToOne((_type) => Sportsclub, (club) => club.court, { eager: true })
  @JoinColumn([{ name: 'sportsclub_id', referencedColumnName: 'sportsClubId' }])
  club: Sportsclub[];

  @Column({name:'sportsclub_id'})
  sportsclub_id: String;


  
}
