"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SiteUrl = void 0;
const common_1 = require("@nestjs/common");
exports.SiteUrl = (0, common_1.createParamDecorator)((data, ctx) => {
    const request = ctx.switchToHttp().getRequest();
    return `${request.protocol}://${request.headers.host}`;
});
//# sourceMappingURL=site-url.decorator.js.map