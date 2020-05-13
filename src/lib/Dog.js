import React, { useEffect } from 'react';

export default function Dog() {
  useEffect(() => {
    console.log('Dog rendered');
  }, []);

  return (
    <div class='dog'>
      <img alt='dog' src='' />
    </div>
  );
}
