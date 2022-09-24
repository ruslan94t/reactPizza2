import React, { useState } from 'react'
import {

  Routes,
  Route,
  json,
} from "react-router-dom";
import './App.css';
import { Header } from './components'
import { Home, Cart } from './pages'






function App() {

  const [pizzas, setPizzas] = useState([])

  React.useEffect(() => {
    fetch('http://localhost:3000/db.json')
      .then((resp) => resp.json())
      .then((json) => {
        setPizzas(json.pizzas);

      })
  }, [])







  return (
    <div className="wrapper">
      <Header />


      <div className="content">
        <Routes>
          <Route exact path="/" element={<Home items={pizzas} />}></Route>
          <Route exact path="/cart" element={<Cart />}></Route>

        </Routes>
      </div>
    </div>
  );
}

export default App;
