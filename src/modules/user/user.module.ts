import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UserDeviceDetail } from "src/entity/user-device-detail.entity";
import { UserRepository } from "./user.repository";

@Module({
  imports: [
    TypeOrmModule.forFeature([UserRepository, UserDeviceDetail]),
    UserDeviceDetail,
  ],
  providers: [],
  controllers: [],
})
export class UserModule {}
