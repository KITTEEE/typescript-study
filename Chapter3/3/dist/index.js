"use strict";
var Components;
(function (Components) {
    // 命名空间里还可以导出命名空间
    var SubComponent;
    (function (SubComponent) {
        function testFunc() {
            console.log('test');
        }
        SubComponent.testFunc = testFunc;
    })(SubComponent = Components.SubComponent || (Components.SubComponent = {}));
    var Header = /** @class */ (function () {
        function Header() {
            var elem = document.createElement('div');
            elem.innerText = 'this is Header';
            document.body.appendChild(elem);
        }
        return Header;
    }());
    Components.Header = Header;
    var Content = /** @class */ (function () {
        function Content() {
            var elem = document.createElement('div');
            elem.innerText = 'this is Content';
            document.body.appendChild(elem);
        }
        return Content;
    }());
    Components.Content = Content;
    var Footer = /** @class */ (function () {
        function Footer() {
            var elem = document.createElement('div');
            elem.innerText = 'this is Footer';
            document.body.appendChild(elem);
        }
        return Footer;
    }());
    Components.Footer = Footer;
})(Components || (Components = {}));
// 为了使代码更加直观，可以添加一个依赖声明，如下
///<reference path="./components.ts" />
var Home;
(function (Home) {
    var Page = /** @class */ (function () {
        // user:Components.User = {name:'kite'}
        function Page() {
            new Components.Header();
            new Components.Content();
            new Components.Footer();
        }
        return Page;
    }());
    Home.Page = Page;
})(Home || (Home = {}));
