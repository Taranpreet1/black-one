import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class MediaVideos extends BaseEntity {

  @PrimaryGeneratedColumn({name:'id'})
  Id: Number;

  @Column("character varying", {
    name: "videos",
    nullable: true,
    length: 255,
  })
  Videos: string | null;

  
}
