import React from 'react';
import {auth} from './firebase';
import {useAuthState} from 'react-firebase-hooks/auth';
import Login from './pages/login';
import Mainpage from './pages/main';
import Admin from './pages/admin';
import Page404 from './pages/page404';
import { Route, Routes } from 'react-router-dom';
import "./App.scss";

function App() {
	const [user] = useAuthState(auth);
	return (
		<>
		<Routes>
			<Route path="/" element={<Mainpage />}/>
			<Route path="/login" element={<Login/>}/>
			<Route path="/admin" element={<Admin/>}/>
			<Route path="/*" element={<Page404/>}/>
		</Routes>
		</>
	)
	}

export default App;
