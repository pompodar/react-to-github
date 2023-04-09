import React from 'react';
import {auth} from '../firebase';
import {useAuthState} from 'react-firebase-hooks/auth';
import {Navigate} from 'react-router-dom';
import Photo from "../features/photo/Photo";
import Work1 from "../features/work1/Work1";
import Work2 from "../features/work2/Work2";
import AboutMe from "../features/aboutMe/AboutMe";
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
            <AboutMe/>		 
            <Photo />
            <Work1 />
            <Work2 />
		</div>
	);
}

export default Admin;
