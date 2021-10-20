import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn, Unique } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { UserDeviceDetail } from './user-device-detail.entity';

@Entity('user')

export class User extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;
	
	@Column({unique:true})
	phoneNo: string;

  @Column({unique:true,nullable:true})
  email: string;

  // @Column()
  // password: string;

  @Column({nullable:true})
  salt: string;

  @OneToMany
  (
		() => UserDeviceDetail,
		(userDeviceDetail) => userDeviceDetail.user ,{eager: true},
	)
	userDeviceDetails: UserDeviceDetail[];



  // async validatePassword(password: string): Promise<boolean> {
  //   const hash = await bcrypt.hash(password, this.salt);
  //   return hash === this.password;
  // }
}
