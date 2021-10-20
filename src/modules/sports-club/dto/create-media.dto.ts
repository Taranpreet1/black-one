import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";

export class CreatemediaDto {
  // @ApiPropertyOptional({
  // 	type: "string",
  // 	format: "binary",
  // 	description: "profile Picture Url (Allow Only 'JPG,JPEG,PNG,MP4,')",
  // 	example: "picture.jpg/video.mp4",
  // })
  // mediass: string;

  @IsNotEmpty()
  @ApiProperty({
    description: "type of media 1:picture , 2:video",
    example: "1",
  })
  media_type: number;

  @IsNotEmpty()
  @ApiProperty({
    description: "sportsclub_id",
    example: "1",
  })
  sportsclub_id: string;
}
