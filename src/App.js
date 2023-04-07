import React from 'react';
import {auth} from './firebase';
import {useAuthState} from 'react-firebase-hooks/auth';
import Login from './login';
import Mainpage from './main';
import { Route, Routes } from 'react-router-dom';

function App() {
	const [user] = useAuthState(auth);
// return (
// 	user ? <Mainpage/> : <Login/>
// );
return <Routes>
	<Route path="/" element={<Mainpage />}/>
	<Route path="/login" element={<Login/>}/>
</Routes>
}

export default App;
