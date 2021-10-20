import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Sportsclub } from "./spots-club.entity";

@Entity()
export class Media extends BaseEntity {

  @PrimaryGeneratedColumn({name:'id'})
  Id: Number;

  @Column("character varying", {
    name: "media",
    nullable: true,
    length: 255,
  })
  media: string | null;

  @Column("integer", { name: "media_type" })
  mediaType: number;

  @ManyToOne((_type) => Sportsclub, (club) => club.media, { eager: true })
  @JoinColumn([{ name: 'sportsclub_id', referencedColumnName: 'sportsClubId' }])
  club: Sportsclub[];

  @Column({name:'sportsclub_id'})
  sportsclub_id: String;
  

  
}
