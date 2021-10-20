import { IsNotEmpty, IsOptional } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class mediaDto {
  @IsNotEmpty()
  @ApiProperty({
    description: "media",
    example: "abc.jpg/ abc.mp4",
  })
  media: any;
}
