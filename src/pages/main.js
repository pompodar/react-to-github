import React from 'react';
import {auth} from '../firebase';
import {useAuthState} from 'react-firebase-hooks/auth';
import {Navigate} from 'react-router-dom';
import AboutMe from "../features/aboutMe/AboutMe";
import Photo from "../features/photo/Photo";
import Work1 from "../features/work1/Work1";
import Work2 from "../features/work2/Work2";

const Mainpage = () => {
  const [user] = useAuthState(auth);

  // Signout function
  const logout = () => {
    auth.signOut();
  }
  
  return (
    <div className='homePage'>
      <div className='homePage-left'>
        <div className="work1">
          <Work1 />
        </div>
        <div className="work2">
          <Work2 />
        </div>
      </div>
      <div className='homePage-right'>
        <div className='photo'>
          <Photo />
        </div>
        <AboutMe />
      </div>
    </div>
  );
}

export default Mainpage;