import cheerio from 'cheerio';
import fs from 'fs';
import {Analyzer} from './crowler';
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

export default class kiteAnalyzer implements Analyzer {
    private static instance:kiteAnalyzer

    static getInstance() {
        if(!kiteAnalyzer.instance){
            kiteAnalyzer.instance = new kiteAnalyzer();
        }
        return kiteAnalyzer.instance;
    }

    private getCourseInfo(html:string) {
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

    private generateJsonFile(courseInfo:CourseReasult,filePath:string) {
        let fileContent:Content = {};
        if(fs.existsSync(filePath)) {
            let content = fs.readFileSync(filePath,'utf-8');
            if(content) {
                fileContent = JSON.parse(content);
            }
        } 
        fileContent[courseInfo.time] = courseInfo.data;
        return fileContent;
    }

    public analyze(html:string,filePath:string) {
        const result:CourseReasult = this.getCourseInfo(html);
        const fileContent:Content = this.generateJsonFile(result,filePath);
        return JSON.stringify(fileContent);
    }

    private constructor() {}
}