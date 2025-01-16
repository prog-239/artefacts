import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

/**
 * Так писать не надо
 * это просто пример
 * 
 * Это то что скрывается за синтаксисом JSX
 */
function Example() {
  return React.createElement('div', { 
    children: React.createElement('div', {
      children: React.createElement('div', {
        children: React.createElement('h1', {
          children: 'HELLO, REACT',
        })
      })
    })
  })
}


// Вспомним как делать на чистом JS
let count = 0;

function renderCountView() {
  // countView.innerHtml = 'Count:' + count;
}

function countUp() {
  count++;
  renderCountView();
}

function countDown() {
  count--;
  renderCountView();
}



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        {/* <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a> */}
      </div>
      <h1>Hello React!</h1>
      <div className="card">
        <button onClick={() => setCount(count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
