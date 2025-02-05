```javascript
import React, { useState, useEffect } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // This effect will only run when 'count' changes
    console.log('Count:', count);
    return () => {
      console.log('Component unmounting');
    };
  }, [count]); // <-- dependency array correctly specifies 'count'

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}

export default MyComponent;
```