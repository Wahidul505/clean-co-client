import React, { useEffect } from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import toast from 'react-hot-toast';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../firebase.init';
import useToken from '../hooks/useToken';

const SocialLogin = () => {
    const [signInWithGoogle, user, , error] = useSignInWithGoogle(auth);
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/';
    const [token] = useToken(user);
    useEffect(() => {
        if (token) {
            navigate(from, { replace: true });
        }
        if (error) {
            toast.error(error.message, { id: 'socialLoginError' });
        }
    }, [token, error, navigate, from]);

    return (
        <div>
            <div class="divider">OR</div>
            <button
                onClick={() => signInWithGoogle()}
                class="btn btn-outline btn-primary w-full">Google SignIn</button>
        </div>
    );
};

export default SocialLogin;