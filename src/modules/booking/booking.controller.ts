import { Body, Controller, HttpCode, Post, UseGuards } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { GetUser } from "src/decorator/get-user.decorator";
import { User } from "src/entity/user.entity";
import { BookingService } from "./booking.service";
import { CreateUserBookingDto } from "./dto/create-user-booking.dto";
import { CreateMulBookingDto } from "./dto/create.mul.booking.dto";

@ApiTags("Booking")
@Controller("booking")
export class BookingController {
  constructor(private bookingService: BookingService) {}

  @Post("/create-booking")
  @UseGuards(AuthGuard())
  @ApiOperation({ summary: "create booking for single date and single slot" })
  @ApiResponse({ status: 200, description: "Api success" })
  @ApiResponse({ status: 422, description: "Bad Request or API error message" })
  @ApiResponse({ status: 404, description: "Not found!" })
  @ApiResponse({ status: 409, description: "User Already Exist" })
  @ApiResponse({ status: 500, description: "Internal server error!" })
  @HttpCode(200)
  createUserbooking(
    @Body() createUserBookingDto: CreateUserBookingDto,
    @GetUser() user: User //the logged_in user_id is store in booked_by field
  ): Promise<void> {
    return this.bookingService.createUserBooking(createUserBookingDto, user);
  }

  @Post("/create")
  @UseGuards(AuthGuard())
  @ApiOperation({ summary: "create booking for multiple date and slots" })
  @ApiResponse({ status: 200, description: "Api success" })
  @ApiResponse({ status: 422, description: "Bad Request or API error message" })
  @ApiResponse({ status: 404, description: "Not found!" })
  @ApiResponse({ status: 409, description: "User Already Exist" })
  @ApiResponse({ status: 500, description: "Internal server error!" })
  @HttpCode(200)
  createUserMulbooking(
    @Body() createMulDto: CreateMulBookingDto,
    @GetUser() user: User //the logged_in user_id is store in booked_by field
  ): Promise<void> {
    return this.bookingService.createMulBooking(createMulDto, user);
  }
}
