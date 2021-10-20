import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";
import { Injectable, UnauthorizedException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { UserRepository } from "src/modules/user/user.repository";
import * as config from "config";
import { JwtPayload } from "./jwt-payload.interface";
import { User } from "../../entity/user.entity";
const jwtConfig = config.get("jwt");
@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    @InjectRepository(UserRepository)
    private userRepository: UserRepository
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: jwtConfig.SecretKey,
    });
  }

  async validate(payload: JwtPayload) {
    const { phoneNo } = payload;

    const user: User = await this.userRepository.findOne({ phoneNo });

    if (!user) {
      throw new UnauthorizedException();
    }

    return user;
  }
}
