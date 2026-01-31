import Home from "./page/Home"
import Buy from "./page/Buy"
import { Routes, Route } from 'react-router-dom'

export default function App() {
  

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/buy" element={<Buy />} />
    </Routes>
  )
}
