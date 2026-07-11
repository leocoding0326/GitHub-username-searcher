import { useState } from 'react'
import './App.css'

const App = () => {
  return (
    <div>
      <h1>Username Checker</h1>
      <form action="submit">
        <input type="text" placeholder='Enter Username'/>
        <input type="button" value="Search" />
      </form>
    </div>
  );
}

export default App
