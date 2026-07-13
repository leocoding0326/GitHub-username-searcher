import { useState } from 'react';
import './App.css';
import userSearch from './API/userSearch.js';
import AutoComplete from './components/AutoComplete.jsx';

const App = () => {
  return (
    <div>
      <h1>Username Checker</h1>
        <form action="submit">
        <AutoComplete 
          searchFunction={userSearch}
          getLabel={(user) => user.username}
        />
        <input type="button" value="Search" />
      </form>
    </div>
  );
}

export default App
