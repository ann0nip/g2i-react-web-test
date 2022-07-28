import { Routes, Route } from 'react-router-dom';
import './App.css';

import Home from './routes/home/home.component';
import Quiz from './routes/quiz/quiz.component';
import Results from './routes/results/results.component';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/quiz" element={<Quiz />} />
      <Route path="/results" element={<Results />} />
    </Routes>
  );
};

export default App;
