import logo from './logo.svg';
import './App.css';

import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: "AIzaSyAaRq_HgPN_Dseq5fdwglJdR-qC2QlF5-4",
  authDomain: "chat-7ca58.firebaseapp.com",
  projectId: "chat-7ca58",
  storageBucket: "chat-7ca58.appspot.com",
  messagingSenderId: "877579505827",
  appId: "1:877579505827:web:57c75e23cc2e1b5310ef16",
  databaseURL: "https://chat-7ca58-default-rtdb.europe-west1.firebasedatabase.app"
};

const app = initializeApp(firebaseConfig);
console.log(app);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
