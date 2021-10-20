import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class MediaImages extends BaseEntity {

  @PrimaryGeneratedColumn({name:'id'})
  Id: Number;

  @Column("character varying", {
    name: "pictures",
    nullable: true,
    length: 255,
  })
  Pictures: string | null;

  
}
