import './App.css'
import { Route , Routes} from "react-router-dom"
import Home from "./pages/Home/Home"
import About from "./pages/About/About"
import PackagesPage from "./pages/PackagesPage/PackagesPage";
import MainLayout from './components/MainLayout/MainLayout'
function App() {

  return (
    <>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/packages" element={<PackagesPage />} />
        </Routes>
      </MainLayout>
    </>
  );
}

export default App
