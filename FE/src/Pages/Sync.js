
import React, { useState } from 'react'

const Sync = () => {
  const [data, setData] = useState(null);
  const fetchDataSynchronously = () => {
    // Simulation of synchronous data fetching
    setTimeout(() => {
      const synchronousData = {
        id: 1,
        name: 'Sannihith',
      };
      setData(synchronousData);
    }, 3000); // Simulating a 3s delay
  };

  return (
    <div className="App">
      <h2>JavaScript: Synchronous Implementation</h2>
      <p>This section demonstrates how synchronous operations behave.</p>
      <button onClick={fetchDataSynchronously}>Fetch Data</button>
      {data ? (
        <div>
          <p>ID: {data.id}</p>
          <p>Name: {data.name}</p>
        </div>
      ) : (
        <p>Data not fetched yet...</p>
      )}
    </div>
  );
}

export default Sync