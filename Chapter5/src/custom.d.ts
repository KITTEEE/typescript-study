// 问题 2： 当我们使用中间件的时候，对 req 和 res 进行修改之后，实际上类型并不能改变
// 解决：通过融合类型解决
declare namespace Express {
    interface Request {
        teacherName:string
    }
}