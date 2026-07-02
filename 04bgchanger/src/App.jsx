import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState('olive')
// for javascript and the react you have to write the properties in the camelCasing inside the style tag if you are injecting a css property inside a tag
// what the callback inside the onclick does is, it tells the browser to execute me when the user clicks this element so when the user clicks the button then the browser executes the arrow fucntion which calls the the changecolor method with the provided argument
  // function changeColor(color) {
  //   setColor(color)
  // }
  const [shade, setShade] = useState(50)

  return (
    <div className='relative w-full h-screen duration-200 flex justify-center items-center' style={{backgroundColor: color, opacity: shade / 100 }}>
      <div className='absolute flex flex-wrap justify-center bottom-12 insert-x-0 px-2'>
        <div className=' flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
          <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg bg-red-500' onClick={() => setColor('red')} >Red</button>
          <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg bg-green-500' onClick={() => setColor('green')}>Green</button>
          <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg bg-blue-500' onClick={() => setColor('blue')}>Blue</button>
          <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg bg-orange-500' onClick={() => setColor('orange')}>Orange</button>
          <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg bg-purple-500' onClick={() => setColor('purple')}>Purple</button>
          <input 
          type="range"
          min={0} 
          max={100}
          value={shade}
          className='cursor-pointer'
          onChange={(e) => setShade(e.target.value)}
          name="" 
          id="" />
          <label htmlFor="">Opacity</label>
        </div>
      </div>
    </div>
  )
}

export default App
