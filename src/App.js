import {Link, Route, Routes} from 'react-router-dom'

import About from './pages/About';
import Counter from './pages/Counter'
import Home from './pages/Home'
import Input from './pages/Input'
import Input2 from './pages/Input2';
import List from './pages/List'
import React from 'react';

function App() {
  return (
    <div className="App">
      <nav>
        <Link to='/'>Home</Link> |  <Link to='/about'>About</Link> | <Link to='/counter'>Counter</Link>
        | <Link to='/Input'>Input</Link> | <Link to='/Input2'>Input2</Link> | <Link to='/List'>List</Link>
      </nav>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/counter' element={<Counter />}/>
        <Route path='/Input' element={<Input />}/>
        <Route path='/Input2' element={<Input2 />}/>
        <Route path='/List' element={<List />}/>
      </Routes>
    </div>
  );
}

export default App;