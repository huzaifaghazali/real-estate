import React from 'react';
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { app } from '../firebase';

function OAuth() {

   const handleGoogleClick = async () => {

  
   } 

   return (
    <button onClick={handleGoogleClick} type='submit' className='bg-red-700 text-white p-3 rounded-lg uppercase hover:opacity-95'>
      Continue with google
    </button>
  );
}

export default OAuth;
