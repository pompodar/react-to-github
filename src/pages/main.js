import React from 'react';
import {auth} from '../firebase';
import {useAuthState} from 'react-firebase-hooks/auth';
import {Navigate} from 'react-router-dom';

const Mainpage = () => {

	const [user] = useAuthState(auth);

	if(!user) {
		return <Navigate to='/login'/>;
	} 

	// Signout function
	const logout = () => {
		auth.signOut();
	}
	
	return (
		<div>
			Welcome
			 
			{
				user.email
			}
			<button style={{"marginLeft" : "20px"}}
			onClick={logout}>
				Logout
			</button>
		</div>
	);
}

export default Mainpage;
