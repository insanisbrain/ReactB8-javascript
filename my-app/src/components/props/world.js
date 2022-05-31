const World = (props) => {
  console.log("World -- props", props)
  return (
    <h1>Hello, world {props.name} -- {props.xyz}</h1>
  )

}

export default World;