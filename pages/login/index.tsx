"use client";

import { useRouter } from 'next/navigation';
import { useState, useEffect } from "react";
import Link from 'next/link';
import { useGlobalContext } from '@/src/contexts';
import userLogin from "@/src/functions/userLogin";

export default function Login() {
    const [buttonState, setButtonState] = useState(false);
    const [loading, setLoading] = useState(true);
    const { user, setUser } = useGlobalContext();
    const router = useRouter();

    const login = async (event: any) => {
        event.preventDefault();
        setButtonState(true);
        userLogin(event).then((res) => res.json())
            .then((userData) => {
                setButtonState(false);
                if (userData.success) {
                    setUser(userData.user);
                    localStorage.setItem("user", JSON.stringify(userData.user));
                    router.push('/protocols');
                    console.log("user data", userData.user);
                }
            })
            
            .catch((error) => {
                console.log(error);
                setButtonState(false);
            });
    };

    useEffect(() => {
        setLoading(false);
    }, []);

    return (
        <div className="flex flex-col min-h-screen w-full mt-[50px]  ml-60 md:ml-0 bg-white">
            {loading ? (
                <div className="fixed top-[80px] left-0 w-full h-1 bg-blue-400 overflow-hidden ">
                    <div className=" top-[80px] left-0 w-full h-full bg-blue-900" style={{
                        animation: 'move 2s infinite'
                    }}></div>
                </div>
            ) : (
                <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
                    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign in to your account</h2>
                    </div>
                    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                        <form className="space-y-6" onSubmit={login}>
                            <div>
                                <label className="block text-sm font-medium leading-6 text-gray-900">Email address</label>
                                <div className="mt-2">
                                    <input id="email" name="email" type="email" required className="pl-4 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"></input>
                                </div>
                            </div>

                            <div>
                                <div className="flex items-center justify-between">
                                    <label className="block text-sm font-medium leading-6 text-gray-900">Password</label>
                                    <div className="text-sm">
                                        <Link href="/login/forgot-password" className="font-semibold text-cyan-500">
                                            Forgot password?
                                        </Link>
                                    </div>
                                </div>
                                <div className="mt-2">
                                    <input id="password" name="password" type="password" required className="pl-4 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"></input>
                                </div>
                            </div>

                            <div>
                                <button disabled={buttonState} type="submit" className="bg-cyan-500 text-center w-full justify-center rounded-md px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 inline-flex items-center">
                                    {buttonState ? (
                                        <>
                                            <svg aria-hidden="true" role="status" className="inline mr-3 w-4 h-4 text-white animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB"></path>
                                                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor"></path>
                                            </svg>
                                            <span id="buttonText">Logging in...</span>
                                        </>
                                    ) : (
                                        <span id="buttonText">Login</span>
                                    )}
                                </button>
                            </div>
                        </form>
                        <div className="text-center py-6">OR</div>
                        <Link href="/signup" className="bg-cyan-700 flex w-full justify-center rounded-md px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm focus-visible:outline focus-visible:outline-2">
                            Create new account
                        </Link>
                    </div>
                </div>
            )}
            <style jsx>{`
                @keyframes move {
                    0% {
                        transform: translateX(-100%);
                    }
                    50% {
                        transform: translateX(100%);
                    }
                    100% {
                        transform: translateX(-100%);
                    }
                }
            `}</style>
        </div>
    );
}
