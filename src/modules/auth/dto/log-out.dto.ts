import { IsNotEmpty, Matches, MaxLength, MinLength } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";
import { errorMessage } from "src/exceptions/common.config";
export class logoutDto {
  @IsNotEmpty({
    message: `Please enter your device token.&&&device_token&&&${errorMessage}`,
  })
  @ApiProperty({
    description: `Device Token`,
    example: `123abc#$%456`,
  })
  device_token: string;
}
