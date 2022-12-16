const ages = [10,20,22,1,100,30,14,90];

const predicate = (age:number) => {
    return age>90;
}

const oldAges = [100];

type CoursesType = {
    title: string
    price: number
}

const courses = [
    {title: 'css',price:100},
    {title: 'JS',price:200},
    {title: 'React', price: 150}
]

const cheap = (course: CoursesType) =>{
    return course.price<160;
}

const cheapCourses = [];