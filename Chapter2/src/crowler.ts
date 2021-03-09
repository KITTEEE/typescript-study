// ts -> .d.ts 翻译文件 -> js;
import superagent from 'superagent';
import fs from 'fs';
import path from 'path';
import kiteAnalyzer from './kiteAnalyzer';

export interface Analyzer {
    analyze:(html:string,filePaht:string) => string
}
class Crowler {
    private filePath = path.resolve(__dirname,'../data/course.json')

    private async getRawHtml() {
        const result = await superagent.get(this.url);
        return result.text;
    }

    private writeFile(fileContent:string) {
        fs.writeFileSync(this.filePath,fileContent);
    }
    private async initSpiderProcess() {
        const html = await this.getRawHtml();
        const fileContent = this.analyzer.analyze(html,this.filePath);
        this.writeFile(fileContent);
    };

    constructor(private url:string, private analyzer:Analyzer) {
        this.initSpiderProcess();
    }
}

const url = `http://localhost:5500/Chapter2/src/index.html`;

const analyzer = kiteAnalyzer.getInstance();
const crowler = new Crowler(url,analyzer);
console.log('hello kite');