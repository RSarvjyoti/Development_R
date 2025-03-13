const Counter = ({count, onClick}) => {

  return (
    <button onClick={onClick}>Click {count} me</button>
  )
}

export default Counter