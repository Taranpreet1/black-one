import { Controller, Get, HttpCode, Query } from "@nestjs/common";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { Dates } from "src/entity/dates.entity";
import { DateService } from "./dates.service";
import { GetDatesFilterDto } from "./dto/get-dates.filter.dto";

@ApiTags("Dates")
@Controller("dates")
export class DateController {
  constructor(private dateService: DateService) {}

  @Get()
  @ApiOperation({ summary: "Get all dates of user" })
  @ApiResponse({ status: 200, description: "Api success" })
  @ApiResponse({ status: 422, description: "Bad Request or API error message" })
  @ApiResponse({ status: 404, description: "Not found!" })
  @ApiResponse({ status: 409, description: "User Already Exist" })
  @ApiResponse({ status: 500, description: "Internal server error!" })
  @HttpCode(200)
  getUser(@Query() filterDto: GetDatesFilterDto): Promise<Dates[]> {
    return this.dateService.getDates(filterDto);
  }
}
