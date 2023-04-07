import React from 'react';
import {auth} from '../firebase';
import {useAuthState} from 'react-firebase-hooks/auth';
import {Navigate} from 'react-router-dom';
import Counter from "../features/counter/Counter";
import Address from "../features/address/Address";

const Admin = () => {

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

            <Counter />
            <Address />
			<button style={{"marginLeft" : "20px"}}
			onClick={logout}>
				Logout
			</button>
		</div>
	);
}

export default Admin;
