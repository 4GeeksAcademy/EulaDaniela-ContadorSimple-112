import React from 'react'
import ReactDOM from 'react-dom/client'

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"

// index.css'
import '../styles/index.css'

// FontAwesome


// components
import Home from './components/Home';

let counter = 0;
const root = ReactDOM.createRoot(document.getElementById('root'));

setInterval(function(){

counter++
let num1 = Math.floor(counter/1) %10
let num2 = Math.floor(counter/10) %10
let num3 = Math.floor(counter/100) %10
let num4 = Math.floor(counter/1000) %10
let num5 = Math.floor(counter/10000) %10
let num6 = Math.floor(counter/100000) %10

root.render(
    <React.StrictMode>
      <Home digito1={num1} digito2={num2} digito3={num3} digito4={num4} digito5={num5} digito6={num6}/>
    </React.StrictMode>
  )
}, 1000)











