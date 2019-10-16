import React from 'react';
import './App.css';
import { useRoutes } from 'hookrouter';
import Start from "./start"
import Meme from "./meme.js"

const Routes = {
  "/": () => <Start />,
  "/meme": () => <Meme />
}


function App() {
  const routeResult = useRoutes(Routes)
  return routeResult
}

export default App;
