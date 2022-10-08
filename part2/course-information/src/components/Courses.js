const Course = ({course}) =>
    <>
        <Header course={course} />
        <Content course={course} />
        <Total course={course} />
    </>

const Header = ({course}) =>
    <h2>
        {course.name}
    </h2>

const Content = ({course}) =>
    <>
        {course.parts.map(part =>
            <Part key={part.id} part={part} /> 
            )}
    </>

const Part = ({part}) =>
    <p>
        {part.name} {part.exercises}
    </p>

const Total = ({course}) =>
    <>
        <h3>
            Total number of exercises: <Sum parts={course.parts} />
        </h3>
    </>

const Sum = ({parts}) =>
    <>
        {parts.reduce((sum, part) =>
        sum + part.exercises, 0)}
    </>

const Courses = ({courses}) => {
    return (
        <>
            {courses.map(course =>
                <Course key={course.id} course={course} />
                )}
        </>
    )
}

export default Courses