import { Body, Controller, Get, HttpCode, Param, Patch, Post } from "@nestjs/common";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { Slot } from "src/entity/slot.entity";
import { ActiveDeactiveSlotDto } from "./dto/active-deactive-slot.dto";
import { CreateSlotDto } from "./dto/create-slot.dto";
import { SlotService } from "./slot.service";

@ApiTags("Slot")
@Controller("slot")
export class SlotController {
  constructor(private slotService: SlotService) {}

  @Post("/add-slot")
  @ApiOperation({ summary: "create new slot for court" })
  @ApiResponse({ status: 200, description: "Api success" })
  @ApiResponse({ status: 422, description: "Bad Request or API error message" })
  @ApiResponse({ status: 404, description: "Not found!" })
  @ApiResponse({ status: 409, description: "slot Already Exist" })
  @ApiResponse({ status: 500, description: "Internal server error!" })
  @HttpCode(200)
  createRole(@Body() createCourtDto: CreateSlotDto): Promise<Slot> {
    return this.slotService.createSlot(createCourtDto);
  }

  @Patch("active-deactivte-slot/:id")
  @ApiOperation({ summary: "Active-deactive slot" })
  @ApiResponse({ status: 200, description: "Api success" })
  @ApiResponse({ status: 422, description: "Bad Request or API error message" })
  @ApiResponse({
    status: 403,
    description: "You are not allowed to access this resource.",
  })
  @ApiResponse({ status: 404, description: "court not found!" })
  @ApiResponse({ status: 500, description: "Internal server error!" })
  async activeDeactiveCourt(
    @Param("id") slotId: number,
    @Body() activeDeactiveslotDto: ActiveDeactiveSlotDto
  ) {
    return await this.slotService.activeDeactiveCourt(
      slotId,
      activeDeactiveslotDto
    );
  }

  @Get()
  @ApiOperation({ summary: "Get all sportsclub for user" })
  @ApiResponse({ status: 200, description: "Api success" })
  @ApiResponse({ status: 422, description: "Bad Request or API error message" })
  @ApiResponse({ status: 404, description: "Not found!" })
  @ApiResponse({ status: 409, description: " Exist" })
  @ApiResponse({ status: 500, description: "Internal server error!" })
  @HttpCode(200)
  getslots(): Promise<Slot[]> {
    return this.slotService.getslots();
  }



}
