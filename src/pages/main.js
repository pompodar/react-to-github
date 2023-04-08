import React from 'react';
import {auth} from '../firebase';
import {useAuthState} from 'react-firebase-hooks/auth';
import {Navigate} from 'react-router-dom';
import Counter from "../features/counter/Counter";
import Work1 from "../features/work1/Work1";
import Work2 from "../features/work2/Work2";

const Mainpage = () => {
	const [user] = useAuthState(auth);

	// Signout function
	const logout = () => {
		auth.signOut();
	}
	
	return (
		<div>
			<Counter />
			<div className="work1">
			    <Work1 />
			</div>
			<div className="work2">
			    <Work2 />
			</div>
		</div>
	);
}

export default Mainpage;
