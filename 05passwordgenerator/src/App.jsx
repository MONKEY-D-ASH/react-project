import { useState, useCallback, useEffect, useRef } from 'react'
import './App.css'

function App() {
  // what we are doing here is we are defining the variables that will have a state and will change their state in the application using their respective functions 
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charactersAllowed, setCharactersAllowed] = useState(false)
  const [password, setPassword] = useState('')

  // this is a powerful hook that is used to grab something from your window, useRef creates a tiny box { current: null }, then React grabs that massive browser DOM object with all its hundreds of keys and values, shoves it inside that box via the ref={} field, and lets you read or change those properties instantly using the dot format without ever triggering a re-render.
  const passwordRef = useRef(null)

  // the usecallback takes the function that you want to cache but it also takes an array of dependencies in which u mention the states, props or local variables on which the output of the function depends, like [a, b] if the values of the a or b changes between the renders, react discards the old function reference from the memory and creates a new one, it does it because when the function was first created it holds the values of the local variables and the props as context information with it and hence the old values of a and b , if we do not provie the dependencies react will execute the old function with the old values, completely ignoring the new values of a and b after the render  
  // as long as the dependencies values do not change too frequently, your code will work finr 
  const generatePassword = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    // based on the values of these variables we are appending the nunmber and the character strings inside the str variable 
    if (numberAllowed) str += "0123456789"
    if (charactersAllowed) str += "!@#$%^&*()_+"

    // now we will run a loop on the str which will pick up random characters from the str variable and inject them in the pass
    for(let i=1; i<= length; i++){
      // generate a random decimal value between 0 and 1 and then multiplying with the length of the str and adding 1 if the math.random chooses 0 
      const char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }
    setPassword(pass)
  },
    [length, numberAllowed,  charactersAllowed]
  )

  // i want the component to re-render as soon as the user changes the length bar or checks the checkboxes
  // in this hook we are saying that if anything chnages from these dependencies that i am providing you here i want you to run the callback function
  useEffect(() => {
    generatePassword()
  }, [length, numberAllowed, charactersAllowed])

  // since we already have the password in the password state variable, here we are accessing the clipboard and writing that password directly into your clipboard
  const copyPasswordToClipboard = () => {
    window.navigator.clipboard.writeText(password)
    passwordRef.current?.select()

  }

  return (  
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500'>
        <h1 className='text-white text-center my-3'>Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>

            <input type="text" 
            value={password} 
            className='outline-none w-full px-3 py-1 bg-gray-300'
            placeholder='password'
            readOnly
            ref={passwordRef}
            />

            <button 
            className='outline-none bg-blue-700 text-white px-3 py-1 shrink-0'
            onClick={copyPasswordToClipboard}
            >Copy</button>

        </div>

        <div
        className='flex text-sm gap-x-2'
        >
          <div className='flex items-center gap-x-1'>
            <input type="range"
            min={8}
            max={100}
            value={length} // it is the default value of the slider when the page loads and also it takes the value from the user
            className='cursor-pointer'
            onChange={(e) => setLength(e.target.value)}
            name=""
            id="" />
            <label htmlFor="length">Length: {length} </label>
          </div>

          <div className='flex items-center gap-x-1'>
              <input 
              type="checkbox" 
              // we are initially setting the value of the defaultChecked as false so when the page loads the box is unchecked and onChange we are grabbing the previous state of the variable numberAllowed and reversing it and storing that
              defaultChecked={numberAllowed}
              onChange={() => {
                setNumberAllowed((prev) => !prev)
              }}
              name="" 
              id="" />
              <label htmlFor="number">Numbers</label>
          </div>

          <div className='flex items-center gap-x-1'>
               <input type="checkbox"
               defaultChecked={charactersAllowed}
               onChange={ () => {
                setCharactersAllowed((prev) => !prev)
               }}
              name=''
              id=''/>   
              <label htmlFor="character">Character</label>
          </div>

        </div>
      </div>     
  )
}

export default App
