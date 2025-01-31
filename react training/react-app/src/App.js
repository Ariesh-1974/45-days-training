import { useState } from 'react';

function App() {
  const colors = ['lightblue', 'lightgreen', 'lightcoral', 'lightyellow', 'lightpink'];
  const [index, setColor] = useState(0);

  const collection = () => {

    setColor((index) => (index + 1) % colors.length);

  };
  
  return (  

    <div className="new" style={{ backgroundColor:colors[index] }}>
      
      <button className="click" onClick={collection}>Click Me</button>
    </div>

  );
}

export default App;
