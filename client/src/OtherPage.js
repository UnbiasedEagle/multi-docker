import React from 'react';
import { Link } from 'react-router-dom';

const OtherPage = () => {
  return (
    <div>
      <h1>I am some other page</h1>
      <Link to='/'>Go to homepage</Link>
    </div>
  );
};

export default OtherPage;
