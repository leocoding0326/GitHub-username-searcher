import { useState } from 'react';
import './App.css';
import userSearch from './API/userSearch.js';

const App = () => {
  return (
    <div>
      <h1>Username Checker</h1>
        <form action="submit">
        <input type="text" placeholder='Enter Username'/>
        <AutoComplete userObject={userSearch}/>
        <input type="button" value="Search" />
      </form>
    </div>
  );
}

export default App
