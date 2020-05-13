import React, { useEffect } from 'react';
import dog from './dog-image.jpeg';
import './dog-style.css';

export default function Dog() {
  useEffect(() => {
    console.log('Dog rendered');
  }, []);

  return (
    <div class='dog'>
      <img alt='dog' src={dog} />
    </div>
  );
}
