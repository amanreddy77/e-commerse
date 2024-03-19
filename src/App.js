import Login from "./components/Login";
import Register from "./components/Register";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
const App=()=> {
  return <div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
    </Routes>
    </BrowserRouter>
  </div>
}
export default App;