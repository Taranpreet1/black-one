"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateSpotsClubDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class CreateSpotsClubDto {
}
__decorate([
    (0, class_validator_1.IsNotEmpty)({}),
    (0, swagger_1.ApiProperty)({
        description: `sports club name`,
        example: `black&one club`,
    }),
    __metadata("design:type", String)
], CreateSpotsClubDto.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({
        description: `sports club discription`,
        example: `Every dream needs to be driven by passion to make it come true. Sports Club is one such dream, formed by keeping sheer passion for the gentleman’s game-Cricket. Sports Club was conceived by a group of people headed by Chinubhai Chimanbhai; the then Mayor and leading businessman from Ahmedabad in 1965.`,
    }),
    __metadata("design:type", String)
], CreateSpotsClubDto.prototype, "discription", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({
        description: `address`,
        example: `Ahmedabad`,
    }),
    __metadata("design:type", String)
], CreateSpotsClubDto.prototype, "address", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({
        description: `phone_no`,
        example: `8988377374`,
    }),
    __metadata("design:type", String)
], CreateSpotsClubDto.prototype, "phone_no", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({
        description: `number of courts`,
        example: `5`,
    }),
    __metadata("design:type", Number)
], CreateSpotsClubDto.prototype, "court_no", void 0);
exports.CreateSpotsClubDto = CreateSpotsClubDto;
//# sourceMappingURL=create-media-image.dto.js.map