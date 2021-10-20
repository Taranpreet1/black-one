import { ApiProperty } from "@nestjs/swagger";
import { IsEnum, IsNotEmpty, IsNumber, IsString } from "class-validator";
import { CourtType } from "src/enum/court-type.enum";
export class CreateCourtDto {
  @IsNotEmpty()
  @ApiProperty({
    description: `enter court name`,
    example: `court A`,
  })
  court_name: string;

  @IsEnum(CourtType)
  @ApiProperty({
    description: `enter court type`,
    example: `practice/play`,
  })
  court_type: string;

  @IsNotEmpty()
  @ApiProperty({
    description: `enter spourts club id`,
    example: `1`,
  })
  sportsclub_id: string;
}
