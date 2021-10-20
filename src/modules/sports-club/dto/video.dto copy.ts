import { IsNotEmpty, IsOptional } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class VideoDto {
  @IsNotEmpty()
  @ApiProperty({
    description: "video video&&&video",
    example: "abc.mp4",
  })
  video: any;
}
