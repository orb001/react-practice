import { useState } from 'react';

export default function Counter({ total, onClick }) {
  const [count, setCount] = useState(0);
  return (
    <div className="counter">
      <span>
        {count} / {total}
      </span>
      <button
        onClick={() => {
          setCount((prev) => prev + 1);
          onClick();
        }}
      >
        Add +
      </button>
    </div>
  );
}
