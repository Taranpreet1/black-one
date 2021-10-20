import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";

export class CreateUserBookingDto {
  @IsNotEmpty()
  @ApiProperty({
    description: `enter court id`,
    example: `1`,
  })
  court_id: string;

  @IsNotEmpty()
  @ApiProperty({
    description: `enter date for booking`,
    example: `01/11/2021`,
  })
  date: Date;

  @IsNotEmpty()
  @ApiProperty({
    description: `enter slot id`,
    example: `1`,
  })
  slot_id: any;
}
