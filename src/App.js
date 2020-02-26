// import logo from './logo.svg';
// import './App.css';

import React from 'react'
import { Counter } from './components/Counter'
import { ThemeToggler } from './components/ThemeToggler'
// import { useStores } from '../hooks/use-stores'

const App = () => (
  <main>
    <Counter />
    <ThemeToggler />
  </main>
)

export default App;
