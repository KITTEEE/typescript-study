class Person {
    name = 'kite';
    getName() {
        return this.name;
    }
}

class Teacher extends Person {
    getTeacherName() {
        return 'Teacher';
    }
    // 重载
    getName() {
        // return 'yiu';
        return super.getName() + 'yiu';
    }
}

const teacher = new Teacher();
console.log(teacher.getName());
console.log(teacher.getTeacherName());
export {}