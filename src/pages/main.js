import React from 'react';
import {auth} from '../firebase';
import {useAuthState} from 'react-firebase-hooks/auth';
import {Navigate} from 'react-router-dom';
import Counter from "../features/counter/Counter";
import Address from "../features/address/Address";

const Mainpage = () => {
	const [user] = useAuthState(auth);

	// Signout function
	const logout = () => {
		auth.signOut();
	}
	
	return (
		<div>
			<Counter />
			<Address />
		</div>
	);
}

export default Mainpage;