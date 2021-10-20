import { Body, Controller, Get, HttpCode, Param, Patch, Post } from "@nestjs/common";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { Court } from "src/entity/court.entity";
import { CourtService } from "./court.service";
import { ActiveDeactiveDto } from "./dto/active-deactive-court.dto";
import { CreateCourtDto } from "./dto/create-court.dto";

@ApiTags("Court")
@Controller("Court")
export class CourtController {
  constructor(private courtService: CourtService) {}

  @Post("/add-Court")
  @ApiOperation({ summary: "create new court for booking" })
  @ApiResponse({ status: 200, description: "Api success" })
  @ApiResponse({ status: 422, description: "Bad Request or API error message" })
  @ApiResponse({ status: 404, description: "Not found!" })
  @ApiResponse({ status: 409, description: "User Already Exist" })
  @ApiResponse({ status: 500, description: "Internal server error!" })
  @HttpCode(200)
  createRole(@Body() createCourtDto: CreateCourtDto): Promise<Court> {
    return this.courtService.createCourt(createCourtDto);
  }

  @Patch("active-deactivte-court/:id")
  @ApiOperation({ summary: "Active-deactive court" })
  @ApiResponse({ status: 200, description: "Api success" })
  @ApiResponse({ status: 422, description: "Bad Request or API error message" })
  @ApiResponse({
    status: 403,
    description: "You are not allowed to access this resource.",
  })
  @ApiResponse({ status: 404, description: "court not found!" })
  @ApiResponse({ status: 500, description: "Internal server error!" })
  async activeDeactiveCourt(
    @Param("id") courtId: number,
    @Body() activeDeactiveDto: ActiveDeactiveDto
  ) {
    return await this.courtService.activeDeactiveCourt(
      courtId,
      activeDeactiveDto
    );
  }
  @Get()
  @ApiOperation({ summary: "Get all court for user" })
  @ApiResponse({ status: 200, description: "Api success" })
  @ApiResponse({ status: 422, description: "Bad Request or API error message" })
  @ApiResponse({ status: 404, description: "Not found!" })
  @ApiResponse({ status: 409, description: " Exist" })
  @ApiResponse({ status: 500, description: "Internal server error!" })
  @HttpCode(200)
  getcourt(): Promise<Court[]> {
    return this.courtService.getcourt();
  }
}
