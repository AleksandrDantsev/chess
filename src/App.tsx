import React from 'react'
import st from './App.module.scss'
import ChessBoard from './components/ChessBoard/ChessBoard'

function App() {
  return (
    <div className={st.application}>
      <ChessBoard />
    </div>
  )
}

export default App
