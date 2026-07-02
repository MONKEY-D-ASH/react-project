import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Card from './components/Card.jsx'

let myObj = {
  name: 'aashish',
  age: 21,
  address: {
    city: 'New Delhi',
    state: 'New Delhi',
    country: 'India',
  },
}

let newArr = [1,2,3,4,5,6,7,8,9] // you can pass an array into your component 

//  this is just like calling a function with the following arguments and in the components you are defining the parameters and also the type of information you want to receive whether it is a string or an array or an object etc

function App() {
  const [count, setCount] = useState(0)
  return (
    <>
      <h1 className='text-3xl bg-green-500 p-3 rounded-md'>Vite with Tailwind</h1>
      <Card username='aashish' price={3000} myArr={newArr} /> 
      <Card username='john' price={500}/>
    </>
  )
}

export default App
