import {
  Body,
  Controller,
  HttpCode,
  Post,
  UseGuards,
  ValidationPipe,
} from "@nestjs/common";
import { AuthService } from "./auth.service";
import { AuthGuard } from "@nestjs/passport";
import { ApiOperation, ApiResponse } from "@nestjs/swagger";
import { CreateUserDto } from "./dto/crete-user.dto";
import { logoutDto } from "./dto/log-out.dto";
import { GetUser } from "src/decorator/get-user.decorator";
import { User } from "src/entity/user.entity";

@Controller("auth")
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post("/login-register")
  @ApiResponse({ status: 200, description: "Api success" })
  login(@Body(ValidationPipe) createUserDto: CreateUserDto) {
    return this.authService.login(createUserDto);
  }

  @Post("/logout")
  @UseGuards(AuthGuard())
  @ApiOperation({ summary: "Logout from mobile app" })
  @HttpCode(200)
  @ApiResponse({ status: 200, description: "Api success" })
  @ApiResponse({ status: 422, description: "Bad Request or API error message" })
  @ApiResponse({ status: 406, description: "Please Verify Your phone number" })
  @ApiResponse({
    status: 404,
    description:
      "User Details not found!, [Invalid user id! Please enter correct user id]",
  })
  @ApiResponse({ status: 500, description: "Internal server error!" })
  async logout(
    @Body() logoutdto: logoutDto,

    @GetUser() user: User
  ): Promise<any> {
    return this.authService.logout(logoutdto, user);
  }
}
