export default function App() {
  const handleClick = () => {
    alert("Button clicked");
  }

  return (
    <div>
      <button onClick={handleClick}>Click button</button>
    </div>
  )
}