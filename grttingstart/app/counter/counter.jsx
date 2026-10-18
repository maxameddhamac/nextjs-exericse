"use client";

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };
  return (
    <div>
      <h1>Counter</h1>
      <p>0</p>
      <button onClick={increment} className="bg-blue-500 text-white p-2 rounded-md">Increment</button>
      <button onClick={decrement} className="bg-red-500 text-white p-2 rounded-md">Decrement</button>
    </div>
  );
}

export default Counter;