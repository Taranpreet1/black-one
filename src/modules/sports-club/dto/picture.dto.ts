import { IsNotEmpty, IsOptional } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class PictureDto {
  @IsNotEmpty()
  @ApiProperty({
    description: "picture pic&&&picture",
    example: "abc.jpg",
  })
  pictures: any;
}
