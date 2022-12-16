test('Should take man older 90',()=>{
    const ages = [10,20,22,1,100,30,14,90];

    const oldAges = ages.filter(age => age>90);


    expect(oldAges.length).toBe(1);
    expect(oldAges[0]).toBe(100);
})

test('Should take man older 90',()=>{
    const courses = [
        {title: 'css',price:100},
        {title: 'JS',price:200},
        {title: 'React', price: 150}
    ];

    const cheapCourses = courses.filter(course=>course.price < 160);

    expect(cheapCourses.length).toBe(2);
    expect(cheapCourses[0].title).toBe('css');

})
test ('get only complited task',()=> {
    const task = [
        {id:1, title:'bread',isDone:false},
        {id:2, title:'sugar',isDone:true},
        {id:3, title:'hook',isDone:false},
        {id:4, title:'jam',isDone:true},
        {id:5, title:'onion',isDone:false},
        {id:6, title:'pidor',isDone:false},
    ]

    const complitedTask = task.filter(
        tasks=>tasks.isDone );

    expect(complitedTask.length).toBe(2);
    expect(complitedTask[0].id).toBe(2);
    expect(complitedTask[1].id).toBe(4);
})
