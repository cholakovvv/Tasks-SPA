import { CreateEmployeePage } from "./pages/CreateEmployeePage";
import { Home } from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import { CreateTaskCardForm } from "./pages/CreateTaskCardForm";
import { TopFiveEmployees } from "./pages/TopFiveEmployees";
import { ShowAllEmps } from "./pages/ShowAllEmps";

function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/create-employee" element={<CreateEmployeePage />} />
      <Route path="/top-5-employees" element={<TopFiveEmployees />} />
      <Route path="/create-task" element={<CreateTaskCardForm />} />
      <Route path="/show-all-employees" element={<ShowAllEmps />} />
    </Routes>
  );
}

export default App;
