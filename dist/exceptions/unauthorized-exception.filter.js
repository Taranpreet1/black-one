"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnauthorizedExceptionFilter = void 0;
const common_1 = require("@nestjs/common");
let UnauthorizedExceptionFilter = class UnauthorizedExceptionFilter {
    catch(exception, host) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse();
        const request = ctx.getRequest();
        const status = exception.getStatus();
        const errors = this.filterResponse(exception.getResponse()["message"]);
        response
            .status(401)
            .json({
            message: errors[0].display_error,
            developer_errors: errors,
        });
    }
    filterResponse(message) {
        let msg = [];
        let error;
        if (typeof message !== "undefined" && message == "Unauthorized")
            error = "Please login to continue";
        else
            error = message || "Unauthorized";
        msg.push(error);
        if (msg.length) {
            let result = [];
            for (let i = 0; i < msg.length; i++) {
                let errors = msg[i].split("&&&");
                let error = {};
                if (errors.length > 2) {
                    result.push({ key: errors[1], error_type: "system", actual_error: errors[0], display_error: errors[2] });
                }
                else {
                    result.push({ key: errors[1], error_type: "ui", actual_error: errors[0], display_error: errors[0] });
                }
            }
            return result;
        }
    }
};
UnauthorizedExceptionFilter = __decorate([
    (0, common_1.Catch)(common_1.UnauthorizedException)
], UnauthorizedExceptionFilter);
exports.UnauthorizedExceptionFilter = UnauthorizedExceptionFilter;
//# sourceMappingURL=unauthorized-exception.filter.js.map