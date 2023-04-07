import React from 'react';
import {auth} from './firebase';
import {useAuthState} from 'react-firebase-hooks/auth';
import Login from './pages/login';
import Mainpage from './pages/main';
import { Route, Routes } from 'react-router-dom';

function App() {
	const [user] = useAuthState(auth);
	return <Routes>
		<Route path="/" element={<Mainpage />}/>
		<Route path="/login" element={<Login/>}/>
	</Routes>
}

export default App;
