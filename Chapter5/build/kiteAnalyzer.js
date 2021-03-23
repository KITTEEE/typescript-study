"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var cheerio_1 = __importDefault(require("cheerio"));
var fs_1 = __importDefault(require("fs"));
var kiteAnalyzer = /** @class */ (function () {
    function kiteAnalyzer() {
    }
    kiteAnalyzer.getInstance = function () {
        if (!kiteAnalyzer.instance) {
            kiteAnalyzer.instance = new kiteAnalyzer();
        }
        return kiteAnalyzer.instance;
    };
    kiteAnalyzer.prototype.getCourseInfo = function (html) {
        var $ = cheerio_1.default.load(html);
        var courseItem = $('.course-item');
        var courseInfo = [];
        courseItem.map(function (index, ele) {
            var descs = $(ele).find('.course-desc');
            var title = descs.eq(0).text();
            var count = parseInt(descs.eq(1).text());
            courseInfo.push({ title: title, count: count });
        });
        var result = {
            time: new Date().getTime(),
            data: courseInfo
        };
        return result;
    };
    kiteAnalyzer.prototype.generateJsonFile = function (courseInfo, filePath) {
        var fileContent = {};
        if (fs_1.default.existsSync(filePath)) {
            var content = fs_1.default.readFileSync(filePath, 'utf-8');
            if (content) {
                fileContent = JSON.parse(content);
            }
        }
        fileContent[courseInfo.time] = courseInfo.data;
        return fileContent;
    };
    kiteAnalyzer.prototype.analyze = function (html, filePath) {
        var result = this.getCourseInfo(html);
        var fileContent = this.generateJsonFile(result, filePath);
        return JSON.stringify(fileContent);
    };
    return kiteAnalyzer;
}());
exports.default = kiteAnalyzer;
