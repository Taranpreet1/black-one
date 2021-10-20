import { ApiProperty } from "@nestjs/swagger";
import { IsEnum, IsOptional, IsString } from "class-validator";

export class GetDatesFilterDto {
  @IsOptional()
  @ApiProperty({
    description: `enter the date for bookings`,
    example: `10/10/2021`,
  })
  date?: Date;

  @IsOptional()
  @ApiProperty({
    description: `enter court id for booking`,
    example: `1`,
  })
  courtId?: number;
}
