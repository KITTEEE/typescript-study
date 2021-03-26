const userInfo:any = undefined;


function catchError(msg:string) {
    return function (target:any,key:string,descriptor:PropertyDescriptor) {
        const fn = descriptor.value;
        descriptor.value = function() {
            try {
                fn();
            } catch (error) {
                console.log(msg);
            }
        }
    }
}

class Testtest {
    @catchError('userInfo.name 存在问题')
    getName() {
        return userInfo.name;            
    }

    @catchError('userInfo.age 存在问题')
    getAge() {
        return userInfo.age;
    }
}

const obj = new Testtest();
obj.getName();
obj.getAge();