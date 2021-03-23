namespace Components {
    // 命名空间里还可以导出命名空间
    export namespace SubComponent {
        export function testFunc() {
            console.log('test');
        }
    }
    
    export interface User{
        name:'kite'
    }

    export class Header {
        constructor() {
            const elem = document.createElement('div');
            elem.innerText = 'this is Header';
            document.body.appendChild(elem);
        }
    }
    
    export class Content {
        constructor() {
            const elem = document.createElement('div');
            elem.innerText = 'this is Content';
            document.body.appendChild(elem);
        }
    }
    
    export class Footer {
        constructor() {
            const elem = document.createElement('div');
            elem.innerText = 'this is Footer';
            document.body.appendChild(elem);
        }
    }
}