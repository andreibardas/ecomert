import React from 'react';
import axios from 'axios';

import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';

import './sign-in-and-sign-up.styles.scss';

const SignInAndSignUpPage = () => (
    <div className='sign-in-and-sign-up'>
        <SignIn />
        <div className="setVisibile">
        <SignUp/>
        </div>
    </div>
);

export default SignInAndSignUpPage;
