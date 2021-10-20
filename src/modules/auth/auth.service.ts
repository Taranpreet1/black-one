import { Injectable, NotFoundException } from "@nestjs/common";
import { UserRepository } from "src/modules/user/user.repository";
import { InjectRepository } from "@nestjs/typeorm";
import { JwtService } from "@nestjs/jwt";
import { JwtPayload } from "./jwt-payload.interface";
import { User } from "src/entity/user.entity";
import { UserDeviceDetail } from "src/entity/user-device-detail.entity";
import { CreateUserDto } from "./dto/crete-user.dto";
import * as md5 from "md5";
import { errorMessage } from "src/exceptions/common.config";
import { logoutDto } from "./dto/log-out.dto";

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(UserRepository)
    private userRepository: UserRepository,
    private jwtService: JwtService
  ) {}

  async login(createUserDto: CreateUserDto): Promise<{ accessToken: string }> {
    const { phoneNo } = createUserDto;
    const userExist = await this.userRepository.findOne({ phoneNo });
    let loginvia = "";

    if (!userExist) {
      const {
        device_type,
        device_token,
        os_version,
        app_version,
        device_model,
      } = createUserDto;

      const { phoneNo } = createUserDto;
      let user = new User();
      user.phoneNo = phoneNo;
      await user.save();

      loginvia = device_type == 1 ? "android" : "ios";
      let dateObj = new Date();
      let newToken = md5(dateObj);

      let device = new UserDeviceDetail();
      device.deviceType = device_type;
      device.deviceToken = device_token || "";
      device.deviceModel = device_model;
      device.accessToken = newToken;
      device.appVersion = app_version;
      device.osVersion = os_version;
      device.createdDate = new Date();
      device.user = user;

      console.log(device);
      console.log(user);
      console.log("new user created");
      await device.save();

      const payload: JwtPayload = { phoneNo };
      const accessToken = this.jwtService.sign(payload);
      return { accessToken };
    } else {
      const { device_token } = createUserDto;
      const userdevice = await UserDeviceDetail.findOne({
        deviceToken: device_token,
      });

      if (!userdevice) {
        const {
          device_type,
          device_token,
          os_version,
          app_version,
          device_model,
          phoneNo,
        } = createUserDto;

        const userde = this.userRepository.findOne({ phoneNo });

        loginvia = device_type == 1 ? "android" : "ios";
        let dateObj = new Date();
        let newToken = md5(dateObj);

        let device = new UserDeviceDetail();
        device.deviceType = device_type;
        device.deviceToken = device_token || "";
        device.deviceModel = device_model;
        device.accessToken = newToken;
        device.appVersion = app_version;
        device.osVersion = os_version;
        device.createdDate = new Date();
        device.userId = (await userde).id;

        console.log(device);
        await device.save();
      }

      const payload: JwtPayload = { phoneNo };
      const accessToken = this.jwtService.sign(payload);
      console.log("login ");
      return { accessToken };
    }
  }

  async logout(logoutdto: logoutDto, user: User): Promise<any> {
    try {
      const { device_token } = logoutdto;

      const userExist = await this.userRepository.findOne({ id: user.id });

      if (userExist) {
        UserDeviceDetail.findOne({
          where: { userId: user.id, deviceToken: device_token },
        });
        await UserDeviceDetail.delete({ userId: user.id });
        const userData = { message: `Logged out successfully.` };
        return userData;
      } else {
        throw new NotFoundException(
          `Invalid user device! Please enter correct user id&&&user_id&&&${errorMessage}`
        );
      }
    } catch (error) {
      throw new NotFoundException(
        `Invalid user! Please enter correct user .&&&user&&&${errorMessage}`
      );
    }
  }
}
