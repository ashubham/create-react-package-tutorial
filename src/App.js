import React, { useEffect, Suspense, Children, cloneElement } from 'react';

const Dog = React.lazy(() => import('./lib/Dog'));

export function App({ children }) {
  useEffect(() => {
    console.log('This executes after Render');
  }, []);
  Children.toArray(children);
  cloneElement(<div></div>);

  const [state, setState] = React.useState(null);

  return (
    <Suspense fallback={<div>Loading ...</div>}>
      <div className='App'>
        <Dog />
      </div>
    </Suspense>
  );
}
