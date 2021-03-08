// ts -> .d.ts 翻译文件 -> js;
import superagent from 'superagent';
import cheerio from 'cheerio';
import fs from 'fs';
import path from 'path';
interface Course {
    title:string,
    count:number
}
interface CourseReasult {
    time:number,
    data:Course[]
}

interface Content {
    [propName:number]:Course[]
}
class Crowler {
    private url = `http://localhost:5500/Chapter2/src/index.html`;
    async getRawHtml() {
        const result = await superagent.get(this.url);
        return result.text;
    }
    getCourseInfo(html:string) {
        const $ = cheerio.load(html);
        const courseItem = $('.course-item');
        const courseInfo:Course[] = [];
        courseItem.map((index,ele) => {
            const descs = $(ele).find('.course-desc');
            const title = descs.eq(0).text();
            const count = parseInt(descs.eq(1).text());
            courseInfo.push({title,count});
        });
        const result = {
            time: new Date().getTime(),
            data:courseInfo
        }
        return result;
    }
    generateJsonFile(courseInfo:CourseReasult) {
        let filePath = path.resolve(__dirname,'../data/course.json');
        let fileContent:Content = {};
        if(fs.existsSync(filePath)) {
            fileContent = JSON.parse(fs.readFileSync(filePath,'utf-8'));
        } 
        fileContent[courseInfo.time] = courseInfo.data;
        return fileContent;
    }
    async initSpiderProcess() {
        let filePath = path.resolve(__dirname,'../data/course.json');
        const html:string = await this.getRawHtml();
        const result:CourseReasult = this.getCourseInfo(html);
        const fileContent:Content = this.generateJsonFile(result);
        fs.writeFileSync(filePath,JSON.stringify(fileContent));
    };

    constructor() {
        this.initSpiderProcess();
    }
}

const crowler = new Crowler();