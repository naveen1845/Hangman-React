
import { Route, Routes } from "react-router-dom";
import PlayGame from "./Pages/PlayGame/PlayGame";
import StartGame from "./Pages/StartGame/StartGame";

function App(){
  return(
    <Routes>
      <Route path="/Play" element= {<PlayGame />}></Route>
      <Route path="/Start" element= {<StartGame />}></Route>
      <Route path="*" element= {<div>Not Found 401</div>}></Route>
    </Routes>
  )
}

export default App;