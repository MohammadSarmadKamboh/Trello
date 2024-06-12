import "./App.css";
import Header from "./Header";
import LogInForm from "./LogInForm";
import MainStart from "./MainStart";
import SignUpForm from "./SignUpForm";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <MainStart />
            </>
          }
        />
        <Route path="/login" element={<LogInForm />} />
        <Route path="/signup" element={<SignUpForm />} />

        {/* Add other routes here if needed */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
