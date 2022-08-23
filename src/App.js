import { BrowserRouter, Route, Routes } from "react-router-dom;"
import HomeScreen from"./screens/HomeScreen";
import ContactScreen from "./screen/DetailtScreen";
import ContactScreen from "./screens/ContactScreen";
import HomeScreen from "screens/HomeScreen";

function App() {
  return (
    <BrowserRouter>
      <div>
      <Routes>
        <Route Path="/" element={<HomeScreen />} />
        <Route Path="/contact" element={<ContactScreen/>} />
        <Route Path="/about" element={<AboutScreen />} />
        <Route Path="detail/:name" element={<DetailScreen />} />
        </Routes>
        <div/>
    </BrowserRouter>
  )
}