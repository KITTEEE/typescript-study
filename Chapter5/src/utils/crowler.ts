// ts -> .d.ts 翻译文件 -> js;
import superagent from 'superagent';
import fs from 'fs';
import path from 'path';

export interface Analyzer {
    analyze:(html:string,filePaht:string) => string
}
class Crowler {
    private filePath = path.resolve(__dirname,'../../data/course.json')

    private async getRawHtml() {
        try {
            const result = await superagent.get(this.url);
            return result.text;                
        } catch (error) {
            console.log(error);
            return ''
        }
    }

    private writeFile(fileContent:string) {
        fs.writeFileSync(this.filePath,fileContent);
    }
    private async initSpiderProcess() {
        try {
            const html = await this.getRawHtml();
            const fileContent = this.analyzer.analyze(html,this.filePath);
            this.writeFile(fileContent);                
        } catch (error) {
            console.log(error);
        }
    };

    constructor(private url:string, private analyzer:Analyzer) {
        this.initSpiderProcess();
    }
}

export default Crowler;