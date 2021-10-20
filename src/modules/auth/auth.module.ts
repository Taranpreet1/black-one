import { Module } from "@nestjs/common";
import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UserRepository } from "src/modules/user/user.repository";
import { JwtModule } from "@nestjs/jwt";
import { PassportModule } from "@nestjs/passport";
import { JwtStrategy } from "./jwt.strategy";
import * as config from "config";
import { UserDeviceDetail } from "src/entity/user-device-detail.entity";

const jwtConfig = config.get("jwt");

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: "jwt" }),
    JwtModule.register({
      secret: jwtConfig.SecretKey,
      signOptions: {
        expiresIn: jwtConfig.ExpireIn,
      },
    }),
    TypeOrmModule.forFeature([UserRepository]),
  ],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy, UserDeviceDetail],
  exports: [JwtStrategy, PassportModule],
})
export class AuthModule {}
