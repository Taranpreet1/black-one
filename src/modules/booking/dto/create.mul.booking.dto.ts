import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";

export class CreateMulBookingDto {
  @IsNotEmpty()
  @ApiProperty({
    description: `emter details for booking`,
    example: `{
            "slots":[
          {
           "date":"01/01/2021",
           "court_id":1,
           "slot_id":4
          },
          {
             "date":"01/01/2021",
           "court_id":1,
           "slot_id":5
          },
          {
             "date":"01/01/2021",
           "court_id":1,
           "slot_id":6
          }
        ]
        }`,
  })
  slots: Array<any>;
}
