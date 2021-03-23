// 为了使代码更加直观，可以添加一个依赖声明，如下

///<reference path="./components.ts" />

namespace Home {
    export class Page {
        // user:Components.User = {name:'kite'}
        constructor() {
            new Components.Header();
            new Components.Content();
            new Components.Footer();
        }
    }
}