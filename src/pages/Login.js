import React from 'react';
import { getAuth, signInWithPopup } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import {Navigate} from 'react-router-dom';
import {useAuthState} from 'react-firebase-hooks/auth';

const provider = new GoogleAuthProvider();

const auth = getAuth();

const Login = () => {
	const [user] = useAuthState(auth);

	if(user) {
		return <Navigate to='/admin'/>;
	} 

	// Sign in with google
	const signin = () => {
		signInWithPopup(auth, provider).catch(alert);
	}
	
	return (
		<div>
		  <center>
			<button style={{marginTop: "200px"}} onClick={signin}>
			  Sign In with Google
			</button>
		  </center>
		</div>
	  )
}

export default Login;
