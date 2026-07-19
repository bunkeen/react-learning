// App.jsx
import { Routes, Route } from "react-router-dom";
import Home from './Home.jsx'
import About from './About.jsx'
import { TodoList } from "./TodoList.jsx";
import { TodoListDeleteLater } from "./TodoListDeleteLater.jsx";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path='/todo' element={<TodoList />} />
      <Route path='/tododeletelater' element={<TodoListDeleteLater />} />
    </Routes>
  );
}