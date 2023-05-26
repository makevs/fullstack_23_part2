const Header = (course) => {
    return (
        <h1>{course["name"]}</h1>
    )
}

const Content = (content) => {
    return (        
        <p>content</p>
    )
}

const Course = ({ course }) => {
    console.log(course.parts[0].content)

    return (      
        <div>
            <Header name={course["name"]} />
            <Content content={course} />
        </div>  
    )
}

export default Course

/*
<p>{course.parts[0]["name"]} {course.parts[0]["exercises"]}</p>
<p>{course.parts[1]["name"]} {course.parts[1]["exercises"]}</p>
<p>{course.parts[2]["name"]} {course.parts[2]["exercises"]}</p>
*/