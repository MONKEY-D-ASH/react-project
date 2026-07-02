// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import App from './App.jsx'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )

// or 

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

const reactElement = {
    type: 'a',
    props: {
        href: "https://google.com",
        target: '_blank'
    },
    children: 'Click me to visit google'
}

function MyApp(){
  return (
    <div>
      <h1>Custom react App </h1>
    </div>
  )
}

const AnotherElement = (
  <a href="http://google.com" target='_blank'> Visit google </a>
)

// this method of the react is used to create a react element and under the hood this method is used by react to convert components into react elements
const areactElement = React.createElement(
  'a',
  {href: 'https://google.com', target: "_blank"},
  'click to visit google'
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <App />
)

