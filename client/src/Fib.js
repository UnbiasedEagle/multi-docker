import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Fib = () => {
  const [seenIndexes, setSeenIndexes] = useState([]);
  const [values, setValues] = useState({});
  const [index, setIndex] = useState('');

  const fetchValues = async () => {
    const values = await axios.get('/api/values/current');
    setValues(values.data);
  };

  const fetchIndexes = async () => {
    const indexes = await axios.get('/api/values/all');
    setSeenIndexes(indexes.data);
  };

  useEffect(() => {
    fetchValues();
    fetchIndexes();
  }, []);

  const renderSeenIndexes = () => {
    return seenIndexes.map(({ number }, idx) => {
      return (
        <span key={idx} style={{ margin: '0 4px' }}>
          {number}
        </span>
      );
    });
  };

  const renderValues = () => {
    return Object.keys(values).map((key, idx) => {
      return (
        <p key={idx}>
          For index {key}, I calculated {values[key]}
        </p>
      );
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    await axios.post('/api/values', { value: index });

    setIndex('');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Enter your index:</label>
        <input
          type='text'
          value={index}
          onChange={(event) => setIndex(event.target.value)}
        />
        <button>Submit</button>
      </form>

      <div>
        <h3>Indexes I have seen:</h3>
        {renderSeenIndexes()}
      </div>
      <div>
        <h3>Calculated values:</h3>
        {renderValues()}
      </div>
    </div>
  );
};

export default Fib;
