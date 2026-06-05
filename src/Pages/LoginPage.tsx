import FormInput from '../Components/MY-UI/FormInput'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import {
    loginSchema,
    type LoginFormData
} from '../schemas/loginSchema'
import { LogIn } from 'lucide-react'
import { login } from '../services/authService'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const LoginPage = () => {

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<LoginFormData>({
        resolver: zodResolver(loginSchema),
        defaultValues: {
            email: '',
            password: '',
        }
    })
    const [authError, setAuthError] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate()

    const onSubmit = async (data: LoginFormData) => {
        setAuthError(null);
        setLoading(true);

        try {
            const res = await login(data.email, data.password);

            console.log("User logged in:", res.user);
            navigate('/dashboard')

        } catch (error: any) {
            console.error("Login error:", error);

            const errorCode = error?.code;

            let message = "Something went wrong";

            switch (errorCode) {
                case "auth/invalid-credential":
                    message = "Invalid email or password";
                    break;

                case "auth/user-not-found":
                    message = "No account found with this email";
                    break;

                case "auth/wrong-password":
                    message = "Wrong password";
                    break;

                case "auth/too-many-requests":
                    message = "Too many attempts. Try again later";
                    break;

                default:
                    message = "Login failed. Please try again";
            }

            setAuthError(message);

        } finally {
            setLoading(false);
        }
    };
    return (
        <div className='py-17.5 px-5 sm:px-10 w-full'>
            <form
                onSubmit={handleSubmit(onSubmit)}
                className='bg-white py-17.5 px-5 sm:px-10 flex flex-col gap-5 flex-1 justify-center items-center rounded-lg shadow-(--custom-shadow) max-w-xl mx-auto'
            >
                <p className='text-2xl text-primary'>
                    Team Login
                </p>

                <div className='flex flex-col gap-5 w-full'>
                    <FormInput
                        label='Email'
                        type='email'
                        placeholder='example@gmail.com'
                        error={errors.email?.message}
                        {...register('email')}
                    />

                    <FormInput
                        label='Password'
                        type='password'
                        error={errors.password?.message}
                        {...register('password')}
                    />
                    {authError && (
                        <div className="w-full bg-red-100 text-red-600 px-4 py-3 rounded-lg text-sm">
                            {authError}
                        </div>
                    )}
                </div>

                <button
                    type="submit"
                    disabled={loading}
                    className="w-full shadow-(--custom-shadow) rounded-lg flex items-center justify-center gap-2 px-10 py-5 font-bold text-base bg-primary text-text-s hover:bg-primary/90 disabled:opacity-50"
                >
                    {loading ? "Logging in..." : "Login"} <LogIn />
                </button>
            </form>
        </div>
    )
}

export default LoginPage