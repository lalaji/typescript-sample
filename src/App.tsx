import React from 'react';

// 1. We define an Interface for our props (Type Safety)
interface HelloWorldProps {
  name: string;
  year?: number; // The '?' makes this prop optional
}

// 2. We apply the interface to the component
// This tells TypeScript: "This function expects props matching HelloWorldProps"
const App: React.FC<HelloWorldProps> = ({ name, year }) => {
  return (
    <div style={{ fontFamily: 'sans-serif', textAlign: 'center', marginTop: '50px' }}>
      <h1>Hello, World!</h1>
      <p>
        Welcome to {name}'s app.
      </p>
      
      {/* 3. We can conditionally render the optional prop */}
      {year && <p>Current Year: {year}</p>}
    </div>
  );
};

export default App;