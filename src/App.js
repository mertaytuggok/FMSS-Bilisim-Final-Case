import { Toaster } from "react-hot-toast";
import "./App.css";
import Header from "./Components/Header";
import { StarshipsProvider } from "./Context/StarshipsContext";
import Main from "./Components/Main";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import LandingPage from "./LandingPage";
import DetailCard from "./Components/DetailCard";

function App() {
  return (
    <StarshipsProvider>
      {" "}
      <Toaster />
      <div className="App">
        <BrowserRouter>
          {" "}
          <Routes>
            {" "}
            <Route path="/" element={<Navigate to="/starships" replace />} />
            <Route path="/" element={<LandingPage />}>
              <Route path="starships" element={<Main />} />
              <Route path="/starships/:name" element={<DetailCard />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </StarshipsProvider>
  );
}

export default App;
