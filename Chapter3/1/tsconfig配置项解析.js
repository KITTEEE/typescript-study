// include 、 exclude 、 files
/**
 * 默认情况下，在项目根目录下执行 tsc 命令，会将当前目录和子目录里的所有 ts 文件进行解析
 * include exclude 和 files 都表示执行 tsc 命令时哪些文件需要被编译，哪些不需要
 * files 指定一个相对或绝对路径的文件列表，include 可以指定一个文件glob匹配模式列表
 */
// 示例：
// {
//     "include":["src/**/*"],
//     "exclude":["node_modules","**/*.spec.ts"],
//     "files":["core.ts","sys.ts"]
// }

/**************** complierOptions 配置项：********************/

// 基本配置

/**
 *
 * outFile 将输出文件合并为一个文件。合并的顺序是根据传入编译器的文件顺序和 ///<reference``>和 import的文件顺序决定的
 * rootDir 指定 tsc 命令运行的根目录
 * outDir 指定编译后的 js 文件存放的目录
 *
 */

/**
 * allowJs / checkJs
 *
 * allowJs 允许编译 js 文件
 * checkJs 对 js 文件进行检查
 *
 */

/**
 * noUnusedLocals 有声明但没有使用的变量则报错
 *
 * noUnusedParameters 函数里有声明但未使用的参数则报错
 * function test(name:string,age:number) {
 *      console.log(age); // name 会报错
 * }
 *
 *
 */

/**
 * noImplicitAny
 * 为 true 时代码中不能有隐含的 any 类型，即需要显式地指定 any 类型
 * function test(name) { // 为 true 时需要显式地指定 any 类型
 *      return name;
 * }
 *
 */

/**
 * strictNullChecks
 * 为 true 时 null 和 undefined 类型不能包含在其他类型里，即 null 和 undefined 不能赋值给其他类型
 * const teacher:string = null // => 报错
 *
 */
