"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SportsclubRepository = void 0;
const common_1 = require("@nestjs/common");
const media_entity_1 = require("../../entity/media.entity");
const media_image_entity_1 = require("../../entity/media.image.entity");
const media_video_entity_1 = require("../../entity/media.video.entity");
const spots_club_entity_1 = require("../../entity/spots-club.entity");
const typeorm_1 = require("typeorm");
let SportsclubRepository = class SportsclubRepository extends typeorm_1.Repository {
    async createSportsclub(createClubDto) {
        const { name, discription, address, phone_no, court_no, longitude, latitude, } = createClubDto;
        const clubdetail = this.create({
            name: name,
            discription: discription,
            address: address,
            phoneNo: phone_no,
            courtNo: court_no,
            longitude: longitude,
            latitude: latitude,
        });
        try {
            await this.save(clubdetail);
            return clubdetail;
        }
        catch (error) {
            console.log(error, error.code);
            if (error) {
                throw new common_1.ConflictException("This club is already exist");
            }
        }
    }
    async addmedia(createmediaDto, files) {
        const { media_type, sportsclub_id, } = createmediaDto;
        const addmedia = media_entity_1.Media.create({
            mediaType: media_type,
            sportsclub_id: sportsclub_id,
            media: files.media[0].filename,
        });
        try {
            await media_entity_1.Media.save(addmedia);
        }
        catch (error) {
            if (error.code === "23505") {
                throw new common_1.ConflictException("Username already exists");
            }
            else {
                console.log(error);
                throw new common_1.InternalServerErrorException();
            }
        }
    }
    async getsportsclub() {
        const query = this.createQueryBuilder("sportsclub");
        query.leftJoinAndSelect("sportsclub.media", "media");
        query.leftJoinAndSelect("sportsclub.court", "court");
        try {
            const detail = await query.getMany();
            return detail;
        }
        catch (error) {
            if (error) {
                throw new common_1.BadGatewayException("Not able to fetch data plese try again");
            }
            else {
                throw new common_1.InternalServerErrorException();
            }
        }
    }
};
SportsclubRepository = __decorate([
    (0, typeorm_1.EntityRepository)(spots_club_entity_1.Sportsclub)
], SportsclubRepository);
exports.SportsclubRepository = SportsclubRepository;
//# sourceMappingURL=sports-club.repository.js.map