// App.jsx
import { Routes, Route } from "react-router-dom";
import Home from './Home.jsx'
import About from './About.jsx'
import { TodoList } from "./TodoList.jsx";
import { TodoListDeleteLater } from "./TodoListDeleteLater.jsx";
import { Weather } from './Weather.jsx';
import { TailwindPractice } from './learning/css/01-Tailwind-Practice.jsx'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path='/todo' element={<TodoList />} />
      <Route path='/tododeletelater' element={<TodoListDeleteLater />} />
      <Route path='/weather' element={<Weather />} />
      <Route path='/tailwindPractice' element={<TailwindPractice />} />
    </Routes>
  );
}