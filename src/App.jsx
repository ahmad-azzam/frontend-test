import logo from './logo.svg';
import './App.css';
import { Alert } from 'flowbite-react';

function App() {
  return (
    <>
      <Alert color="info">
        <span>
          <span className="font-medium">
            Info alert!
          </span>
          this is a info alert
        </span>
      </Alert>
    </>
  );
}

export default App;
