import { IsNotEmpty, ValidationArguments, IsEnum } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";
import { errorMessage } from "src/exceptions/common.config";

export class CreateUserDto {
  @IsNotEmpty()
  @ApiProperty({
    description: `Enter phoneNo`,
    example: `9863746374`,
  })
  phoneNo: string;

  @IsNotEmpty({
    message: `Please enter your device type.&&&device_type&&&${errorMessage}`,
  })
  @ApiProperty({
    description: `Device Type`,
    example: 1,
  })
  device_type: number;

  @IsNotEmpty({
    message: `Please enter your device model.&&&device_model&&&${errorMessage}`,
  })
  @ApiProperty({
    description: `Device Model`,
    example: "RNE-L22",
  })
  device_model: string;

  @IsNotEmpty({
    message: `Please enter your device token.&&&device_token&&&${errorMessage}`,
  })
  @ApiProperty({
    description: `Device Token`,
    example: `123abc#$%456`,
  })
  device_token: string;

  @IsNotEmpty({
    message: `Please enter your app version.&&&app_version&&&${errorMessage}`,
  })
  @ApiProperty({
    description: `App Version`,
    example: `1.0`,
  })
  app_version: string;

  @IsNotEmpty({
    message: `Please enter your os version. &&&os_version&&&${errorMessage}`,
  })
  @ApiProperty({
    description: `OS Version`,
    example: `7.0`,
  })
  os_version: string;
}
