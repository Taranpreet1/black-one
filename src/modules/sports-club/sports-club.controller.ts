import {
  Body,
  Controller,
  Get,
  Headers,
  HttpCode,
  Post,
  Req,
  UploadedFiles,
  UseInterceptors,
} from "@nestjs/common";
import { FileFieldsInterceptor } from "@nestjs/platform-express";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { Sportsclub } from "src/entity/spots-club.entity";
import { CreateSpotsClubDto } from "./dto/create-sportsclub-detail.dto";
import { PictureDto } from "./dto/picture.dto";
import { SportsClubService } from "./sports-club.service";
import { diskStorage } from "multer";
import {
  editFileName,
  imageFileFilter,
  mediaFileFilter,
  videoFileFilter,
} from "./dto/file-validator";
import { VideoDto } from "./dto/video.dto copy";
import { CreatemediaDto } from "./dto/create-media.dto";
import { mediaDto } from "./dto/media.dto";

@ApiTags("Spots-club")
@Controller("sports-club")
export class SportsClubController {
  constructor(private sportsclubService: SportsClubService) {}

  @Post("/add-details")
  @ApiOperation({ summary: "add details to sportsclub" })
  @ApiResponse({ status: 200, description: "Api success" })
  @ApiResponse({ status: 422, description: "Bad Request or API error message" })
  @ApiResponse({ status: 404, description: "Not found!" })
  @ApiResponse({ status: 409, description: "sportsclub Already Exist" })
  @ApiResponse({ status: 500, description: "Internal server error!" })
  @HttpCode(200)
  createAddDetails(
    @Body() createClubDto: CreateSpotsClubDto
  ): Promise<Sportsclub> {
    return this.sportsclubService.createSportsclub(createClubDto);
  }

  // @Post("/add-image")
  // @ApiOperation({ summary: "add image for club" })
  // @ApiResponse({ status: 200, description: "Api success" })
  // @ApiResponse({ status: 422, description: "Bad Request or API error message" })
  // @ApiResponse({ status: 404, description: "Not found!" })
  // @ApiResponse({ status: 409, description: "image already exixst Exist" })
  // @ApiResponse({ status: 500, description: "Internal server error!" })
  // @HttpCode(200)
  // @UseInterceptors(
  //   FileFieldsInterceptor([{ name: "pictures", maxCount: 20 }], {
  //     storage: diskStorage({
  //       destination: "./assets/media/image",
  //       filename: editFileName,
  //     }),
  //     fileFilter: imageFileFilter,
  //     limits: { fileSize: 2097152 },
  //   })
  // )
  // addImage(@UploadedFiles() files: PictureDto, @Req() req): Promise<void> {
  //   return this.sportsclubService.createImage(files);
  // }

  // @Post("/add-video")
  // @ApiOperation({ summary: "add video for club" })
  // @ApiResponse({ status: 200, description: "Api success" })
  // @ApiResponse({ status: 422, description: "Bad Request or API error message" })
  // @ApiResponse({ status: 404, description: "Not found!" })
  // @ApiResponse({ status: 409, description: "image already exixst Exist" })
  // @ApiResponse({ status: 500, description: "Internal server error!" })
  // @HttpCode(200)
  // @UseInterceptors(
  //   FileFieldsInterceptor([{ name: "video", maxCount: 20 }], {
  //     storage: diskStorage({
  //       destination: "./assets/media/video",
  //       filename: editFileName,
  //     }),
  //     fileFilter: videoFileFilter,
  //     limits: { fileSize: 9097152 },
  //   })
  // )
  // addvideo(
  //   @UploadedFiles() files: VideoDto,
  //   @Req() req,
  //   @Headers("wl_code") wlCode: any = 20
  // ): Promise<void> {
  //   return this.sportsclubService.createVideo(files);
  // }

  @Post("/add-media")
  @ApiOperation({ summary: "add video for club" })
  @ApiResponse({ status: 200, description: "Api success" })
  @ApiResponse({ status: 422, description: "Bad Request or API error message" })
  @ApiResponse({ status: 404, description: "Not found!" })
  @ApiResponse({ status: 409, description: "image already exixst Exist" })
  @ApiResponse({ status: 500, description: "Internal server error!" })
  @HttpCode(200)
  @UseInterceptors(
    FileFieldsInterceptor([{ name: "media", maxCount: 20 }], {
      storage: diskStorage({
        destination: "./assets/media",
        filename: editFileName,
      }),
      fileFilter: mediaFileFilter,
      limits: { fileSize: 9097152 },
    })
  )
  addmedia(
    @Body() createmediaDto: CreatemediaDto,
    @UploadedFiles() files: mediaDto
  ): Promise<void> {
    return this.sportsclubService.addmedia(createmediaDto, files);
  }

  @Get()
  @ApiOperation({ summary: "Get all sportsclub for user" })
  @ApiResponse({ status: 200, description: "Api success" })
  @ApiResponse({ status: 422, description: "Bad Request or API error message" })
  @ApiResponse({ status: 404, description: "Not found!" })
  @ApiResponse({ status: 409, description: " Exist" })
  @ApiResponse({ status: 500, description: "Internal server error!" })
  @HttpCode(200)
  getsportsclubs(): Promise<Sportsclub[]> {
    return this.sportsclubService.getsportsclub();
  }
}
