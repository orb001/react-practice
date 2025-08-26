import './App.css';
import Counter from './components/Counter';
import { useState } from 'react';

function App() {
  const [total, setTotal] = useState(0);
  const handleClick = () => setTotal((prev) => prev + 1);
  return (
    <div>
      <div className="banner">
        Total count {total} {total > 10 ? '🔥' : '💦'}
      </div>
      <Counter total={total} onClick={handleClick} />
      <Counter total={total} onClick={handleClick} />
    </div>
  );
}

export default App;
