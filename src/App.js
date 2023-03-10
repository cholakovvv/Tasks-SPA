import { CreateEmployeePage } from "./pages/CreateEmployeePage";
import { Home } from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import { CreateTaskCardForm } from "./pages/CreateTaskCardForm";


function App() {

  

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/create-employee" element={<CreateEmployeePage />} />
      <Route path="/create-task" element={<CreateTaskCardForm />} />
    </Routes>
  );
}

export default App;
