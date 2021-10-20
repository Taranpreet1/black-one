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
exports.MediaImages = void 0;
const typeorm_1 = require("typeorm");
let MediaImages = class MediaImages extends typeorm_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ name: 'id' }),
    __metadata("design:type", Number)
], MediaImages.prototype, "Id", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", {
        name: "pictures",
        nullable: true,
        length: 255,
    }),
    __metadata("design:type", String)
], MediaImages.prototype, "Pictures", void 0);
MediaImages = __decorate([
    (0, typeorm_1.Entity)()
], MediaImages);
exports.MediaImages = MediaImages;
//# sourceMappingURL=media.image.entity.js.map