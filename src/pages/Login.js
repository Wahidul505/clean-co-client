import React, { useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import SocialLogin from './SocialLogin';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';
import toast from 'react-hot-toast';
import useToken from '../hooks/useToken';

const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [
        signInWithEmailAndPassword,
        user,
        ,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/';
    const [token] = useToken(user);

    useEffect(() => {
        if (token) {
            navigate(from, { replace: true });
        }
        if (error) {
            toast.error(error.message, { id: 'loginError' });
        }
    }, [token, error, navigate, from]);

    const onSubmit = data => {
        signInWithEmailAndPassword(data.email, data.password);
    };

    return (
        <div class="hero min-h-screen bg-base-200">
            <div class="hero-content flex-col lg:flex-row-reverse">
                <div class="text-center lg:text-left">
                    <h1 class="text-5xl font-bold">Login now!</h1>
                    <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                </div>
                <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div class="card-body">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Email</span>
                                </label>
                                <input
                                    type="email"
                                    placeholder="email"
                                    class="input input-bordered"
                                    {...register("email",
                                        {
                                            required: {
                                                value: true,
                                                message: 'Email is required'
                                            },
                                            pattern: {
                                                value: /\S+@\S+\.\S+/,
                                                message: 'Invalid Email'
                                            }
                                        }
                                    )}
                                />
                                {errors.email?.type === 'required' && <small className='text-red-500'>{errors.email.message}</small>}
                                {errors.email?.type === 'pattern' && <small className='text-red-500'>{errors.email.message}</small>}
                            </div>
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Password</span>
                                </label>
                                <input
                                    type="password"
                                    placeholder="password"
                                    class="input input-bordered"
                                    {...register("password", {
                                        required: {
                                            value: true,
                                            message: 'Password is required'
                                        },
                                        pattern: {
                                            value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
                                            message: 'Minimum eight characters, at least one letter, one number and No Special Character'
                                        }
                                    }
                                    )}
                                />
                                {errors.password?.type === 'required' && <small className='text-red-500'>{errors.password.message}</small>}
                                {errors.password?.type === 'pattern' && <small className='text-red-500'>{errors.password.message}</small>}
                                <label class="label">
                                    <small className='underline text-primary'><Link to='/signup'>Create an Account</Link></small>
                                </label>
                            </div>
                            <div class="form-control mt-6">
                                <input className='btn btn-primary' type="submit" value="Login" />
                            </div>
                        </form>
                        <SocialLogin />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;