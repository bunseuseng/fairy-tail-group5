import Navbar from "./components/navbar";
import Footer from "./components/footer";
import { Routes, Route } from "react-router-dom";
import Home from "./page/Home/home";
import Favorite from "./page/favorite";
import Story from "./page/story";
import Login from "./page/login";
import Register from "./page/register";

function App() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen px-4 py-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/story" element={<Story />} />
          <Route path="/favorite" element={<Favorite />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </main>

      <Footer />
    </>
  );
}

export default App;
