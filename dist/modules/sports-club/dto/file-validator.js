"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.editFileName = exports.csvFileFilter = exports.mediaFileFilter = exports.videoFileFilter = exports.imageFileFilter = void 0;
const path_1 = require("path");
const imageFileFilter = (req, file, callback) => {
    if (!file.originalname.match(/\.(jpg|jpeg|png|gif)$/)) {
        req.fileValidationError = "Only Images are allowed.";
        req.statusCode = 422;
        return callback(null, false, new Error(req.fileValidationError), file.originialname);
    }
    callback(null, true);
};
exports.imageFileFilter = imageFileFilter;
const videoFileFilter = (req, file, callback) => {
    if (!file.originalname.match(/\.(mp4|wmv|mov|gif)$/)) {
        req.fileValidationError = "Only video are allowed.";
        req.statusCode = 422;
        return callback(null, false, new Error(req.fileValidationError), file.originialname);
    }
    callback(null, true);
};
exports.videoFileFilter = videoFileFilter;
const mediaFileFilter = (req, file, callback) => {
    if (!file.originalname.match(/\.(pg|jpeg|png|gif | mp4|wmv|mov|gif)$/)) {
        req.fileValidationError = "Only images and video are allowed.";
        req.statusCode = 422;
        return callback(null, false, new Error(req.fileValidationError), file.originialname);
    }
    callback(null, true);
};
exports.mediaFileFilter = mediaFileFilter;
const csvFileFilter = (req, file, callback) => {
    if (!file.originalname.match(/\.(csv)$/)) {
        req.fileValidationError = "Only csv are allowed.";
        req.statusCode = 422;
        return callback(null, false, new Error(req.fileValidationError), file.originialname);
    }
    callback(null, true);
};
exports.csvFileFilter = csvFileFilter;
const editFileName = (req, file, callback) => {
    let name = file.originalname.split(".")[0];
    name = name.split(" ").join("");
    const fileExtName = (0, path_1.extname)(file.originalname);
    const randomName = Array(4)
        .fill(null)
        .map(() => Math.round(Math.random() * 16).toString(16))
        .join("");
    callback(null, `${name}-${randomName}${fileExtName}`);
};
exports.editFileName = editFileName;
//# sourceMappingURL=file-validator.js.map