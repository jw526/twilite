import { useState } from 'react'
import './App.css'
import Board from './components/Board/Board'

function App() {

  return (
    <div className="the_board">
       <h1>TicTacToe</h1>
       <Board/>
    </div>
  )
}

export default App
