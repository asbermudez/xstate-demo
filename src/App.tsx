import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import { Navbar } from './components/Navbar'
import { PrivateRoute } from './components/PrivateRoute'
import { About } from './pages/About'
import { Home } from './pages/Home'

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="container">
        <Switch>
          <Route path="/" component={Home} exact />
          <PrivateRoute path="/about">
            <About />
          </PrivateRoute>
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App
