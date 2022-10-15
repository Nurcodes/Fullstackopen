
// This component uses a prop to pass the course name to the App component
const Header = (props) => {
  return (
    <div>
      <p>{props.course}</p>
    </div>
  )
}

// This component uses two props to pass the name of the part and number of exercises to App component
const Content = (props) => {
  return (
    <div>
      <p>{props.part} {props.number}</p>
    </div>
  )
}

// This component uses one prop to pass in the sum of all exercises to the App component
const Total = (props) => {
  return (
    <div>
      <p>Number of exercises {props.all}</p>
    </div>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14
  

  return (
  <div>
    <Header course={course} />
    <Content part={part1} number={exercises1} />
    <Content part={part2} number={exercises2} />
    <Content part={part3} number={exercises3} />
    <Total all={exercises1 + exercises2 + exercises3} />
  </div>
  )
}

export default App;
