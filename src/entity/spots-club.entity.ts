import {
    BaseEntity,
    Column,
    Entity,
    OneToMany,
    PrimaryGeneratedColumn,
  } from 'typeorm';
import { Court } from './court.entity';
import { Media } from './media.entity';
  
  
  @Entity()
  export class Sportsclub extends BaseEntity {
    @PrimaryGeneratedColumn({ name: 'sportsclub_id' })
    sportsClubId:any;
  
    @Column({ name: 'name' })
    name: string;
  
  
    @Column({name:'discription'})
    discription: string;
  
   
    @Column({name:'address'})
    address: String;

    @Column({name:'longitude'})
    longitude: String;

    @Column({name:'latitude'})
    latitude: String;
  
    @Column({name:'phone_no'})
    phoneNo: string;

    @Column({name:'court_no'})
    courtNo: number;

    @OneToMany((_type) => Media, (media) => media.club, { eager: false })
    media: Media[];

    @OneToMany((_type) => Court, (court) => court.club, { eager: false })
    court: Court[];


  
    
    
    
    
  }
  