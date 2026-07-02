import Youtube from "./Youtube.jsx"

// the {} must contain a already evaluated expression like 2+2 but if you put something like if() conditional statement inside this braces then it will throw an error because (it needs to be evaluated, it is not already evaluated), what happens is the react takes the everything inside these {} and places it inside another object in the createElement() method after the first three parameters as it is.
function App() {
  const username = "aashish"
  return (
    <>
    <h1> Vite react app {2+2} </h1>
    <h1> Vite react app {username} </h1>
    <Youtube />
    </>
  )
}

export default App
