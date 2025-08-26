import './App.css';

function App() {
  const name = '호수';
  const list = ['우유', '바나나', '딸기'];
  return (
    <>
      <h1 className="green">{`Hello! ${name}`}</h1>
      <h2>Hello</h2>
      <p>{name}</p>
      <ul>
        {list.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
      <img
        src="https://images.unsplash.com/photo-1578589318274-02854f68813e?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="nature"
        style={{ width: '200px', height: '200px' }}
      />
    </>
  );
}

export default App;
