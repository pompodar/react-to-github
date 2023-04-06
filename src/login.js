import React from 'react';
import { getAuth, signInWithPopup } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";

const provider = new GoogleAuthProvider();

const auth = getAuth();

const Login = () => {

	// Sign in with google
	const signin = () => {
		signInWithPopup(auth, provider).catch(alert);
	}
	
	return (
		<div>
			<center>
				<button style={{"marginTop" : "200px"}}
				onClick={signin}>Sign In with Google</button>
			</center>
		</div>
	);
}

export default Login;
