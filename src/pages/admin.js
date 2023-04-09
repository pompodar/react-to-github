import React from 'react';
import {auth} from '../firebase';
import {useAuthState} from 'react-firebase-hooks/auth';
import {Navigate} from 'react-router-dom';
import Counter from "../features/counter/Counter";
import Address from "../features/address/Address";
import {Link } from 'react-router-dom';

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
            <nav>
				<ul>
					<li className='home-Link'><Link to="/">Home</Link></li>
				    <li>{ user.email }</li>
                    <li>
                        <button style={{"marginLeft" : "20px"}}
                        onClick={logout}>
                            Logout
                        </button>
                    </li>
                </ul>
			</nav>			 
            <Counter />
            <Address />
		</div>
	);
}

export default Admin;
