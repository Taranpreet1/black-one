import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";
export class CreateSlotDto {
  @IsNotEmpty()
  @ApiProperty({
    description: `enter slot time`,
    example: `6:00am to 7:00am`,
  })
  slotTime;
}
