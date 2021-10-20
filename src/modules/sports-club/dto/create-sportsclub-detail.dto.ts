import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";

export class CreateSpotsClubDto {
  @IsNotEmpty({})
  @ApiProperty({
    description: `sports club name`,
    example: `black&one club`,
  })
  name: string;

  @IsNotEmpty()
  @ApiProperty({
    description: `sports club discription`,
    example: `Every dream needs to be driven by passion to make it come true. Sports Club is one such dream, formed by keeping sheer passion for the gentleman’s game-Cricket. Sports Club was conceived by a group of people headed by Chinubhai Chimanbhai; the then Mayor and leading businessman from Ahmedabad in 1965.`,
  })
  discription: string;

  @IsNotEmpty()
  @ApiProperty({
    description: `address`,
    example: `Ahmedabad`,
  })
  address: string;

  @IsNotEmpty()
  @ApiProperty({
    description: `loction`,
    example: `longitude`,
  })
  longitude: string;

  @IsNotEmpty()
  @ApiProperty({
    description: `loction`,
    example: `latitude`,
  })
  latitude: string;

  @IsNotEmpty()
  @ApiProperty({
    description: `phone_no`,
    example: `8988377374`,
  })
  phone_no: string;

  @IsNotEmpty()
  @ApiProperty({
    description: `number of courts`,
    example: `5`,
  })
  court_no: number;
}
