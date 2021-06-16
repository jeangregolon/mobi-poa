import React from 'react'

import {BrowserRouter, Route} from 'react-router-dom'
import HomeScreen from './screens/HomeScreen'
import LineScreen from './screens/LineScreen'

function App() {
  return (
    <BrowserRouter>
      <div className="grid-container">
        <header className="row">
          <div>
            <a className="brand" href="/">Mobi PoA </a>
          </div>
          <div>
            <a href="/favoritos"><i className="fa fa-star"></i></a>
            <a href="/signin"><i className="fa fa-user-circle"></i></a>
          </div>
        </header>
        <main>
          <Route path='/linha/:id' component={LineScreen}></Route>
          <Route path='/' component={HomeScreen} exact></Route>
        </main>
        <footer className="row center">Todos os direitos reservados.</footer>
      </div>
    </BrowserRouter>
  )
}

export default App 
