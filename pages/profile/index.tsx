

import React, { useEffect, useState, useCallback } from "react";
import Link from "next/link";

import { useGlobalContext } from "@/src/contexts";
import { useRouter } from "next/navigation";

import refreshSession from "@/src/functions/refreshSession";

interface UserDetails {
    _id: string,
    firstName: string,
    lastName: string,
    email: string
}

const Profile = () => {
    const [userDetails, setUserDetails] = useState<UserDetails | null>(null);
    const [buttonState, setButtonState] = useState(false);

    const { user, setUser, isLoading } = useGlobalContext();
    const router = useRouter();

    const requestNewToken = useCallback(async () => {
        try {
            const userData = {
                userId: user._id,
                refreshToken: user.refreshToken,
            };
            const newTokens = await refreshSession(userData);
            if (!newTokens) {
                throw new Error("Could not refresh token");
            }
            const userUpdated = { ...user, accessToken: newTokens.accessToken, refreshToken: newTokens.refreshToken };
            setUser(userUpdated);
            localStorage.setItem("user", JSON.stringify(userUpdated));
        } catch (error) {
            console.error("Error refreshing token:", error);
            // router.push('/login');
        }
    }, [user, setUser]);
    useEffect(() => {
        if (!isLoading && user) {
            const fetchUserDetails = async () => {
                try {
                    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/user/getUserDetails`, {
                        method: "GET",
                        headers: { 'Authorization': `Bearer ${user.accessToken}` }
                    });
    // console.log("acess", user.accessToken)
                    if (!response.ok) {
                        throw new Error(`HTTP error! Status: ${response.status}`);
                    }
    
                    const userDetails = await response.json();
                    if (!userDetails) {
                        throw new Error("User details are empty");
                        
                    }
                    console.log("user", userDetails)
                    setUserDetails(userDetails);
                } catch (error) {
                    console.error("Error fetching user details:", error);
                    try {
                        await requestNewToken();
                       
                    } catch (refreshError) {
                        console.error("Error refreshing token:", refreshError);
                        router.push('/login');
                    }
                }
            };
    
            fetchUserDetails();
        } else if (!isLoading && !user) {
            router.push('/login');
        }
    }, [user, isLoading, requestNewToken, router]);


    const updateProfile = (event: any) => {
        setButtonState(true);
        event.preventDefault();
        const formElements = event.target.elements;

        const userData = {
            firstName: formElements.firstName.value,
            lastName: formElements.lastName.value
        };

        const accessToken = user.accessToken;
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Authorization", `Bearer ${accessToken}`);

        const raw = JSON.stringify(userData);

        const requestOptions = {
            method: "POST",
            'Authorization': `Bearer ${accessToken}`,
            body: raw,
            redirect: "follow" as RequestRedirect
        };

        fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/user/updateProfile`, requestOptions)
        .then((response) => response.json())
        .then((userDetails) => {
            setUserDetails(userDetails);
        })
        .catch((error) => console.error(error)).finally(() => {
            setButtonState(false)
        })
}
    // const handleInputChange = (event: { target: { name: any; value: any; }; }) => {
    //     setUser({ ...user, [event.target.name]: event.target.value });
    // };
    return (
        <div className=" w-full ml-60 md:ml-0">
            {isLoading ? (
                <div className="fixed top-[80px] left-0 w-full h-1 bg-blue-400 overflow-hidden ">
                    <div className=" top-[80px] left-0 w-full h-full bg-blue-900" style={{
                        animation: 'move 2s infinite' }}
                    ></div>
                </div>
            ) : userDetails ? (
                <div className="flex min-h-full flex-col justify-center py-4 lg:px-8 sm:mx-auto sm:w-full sm:max-w-sm ">
                <h2 className="mt-20 mb-8 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                  User Profile
                </h2>
                <form className="space-y-8 w-full" onSubmit={updateProfile}>
                  <div>
                    <label className="block text-sm font-medium leading-6 text-gray-900">
                      First Name
                    </label>
                    <div className="mt-4">
                      <input
                        id="firstName"
                        defaultValue={userDetails.firstName}
                        name="firstName"
                        type="text"
                        required
                        className="pl-4 block w-full max-w-lg rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                      ></input>
                    </div>
                  </div>
              
                  <div>
                    <label className="block text-sm font-medium leading-6 text-gray-900">
                      Last Name
                    </label>
                    <div className="mt-4">
                      <input
                        id="lastName"
                        defaultValue={userDetails.lastName}
                        name="lastName"
                        type="text"
                        required
                        className="pl-4 block w-full max-w-lg rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                      ></input>
                    </div>
                  </div>
              
                  <div>
                    <label className="block text-sm font-medium leading-6 text-gray-900">
                      Email
                    </label>
                    <div className="mt-4">
                      <input
                        id="email"
                        defaultValue={userDetails.email}
                        name="email"
                        type="email"
                        required
                        className="pl-4 block w-full max-w-lg rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                        readOnly={true}
                      ></input>
                    </div>
                  </div>

                        <div>
                            <button
                                disabled={buttonState}
                                type="submit"
                                className="bg-cyan-500 text-center w-full justify-center rounded-md px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 inline-flex items-center"
                            >
                                {buttonState ? (
                                    <>
                                        <svg
                                            aria-hidden="true"
                                            role="status"
                                            className="inline mr-3 w-4 h-4 text-white animate-spin"
                                            viewBox="0 0 100 101"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                                                fill="#E5E7EB"
                                            ></path>
                                            <path
                                                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                                                fill="currentColor"
                                            ></path>
                                        </svg>
                                        <span id="buttonText">Updating...</span>
                                    </>
                                ) : (
                                    <span id="buttonText">Update Profile</span>
                                )}
                            </button>
                        </div>
                    </form>

                    <div className="mt-8 space-y-2">
                        <div>
                            <Link href="/profile/protocols">
                                <span className="underline underline-offset-2 text-blue-600">
                                    Protocols
                                </span>
                            </Link>
                        </div>
                        <div>
                            <Link href="/profile/protocols">
                                <span className="underline underline-offset-2 text-blue-600">
                                    Change Password
                                </span>
                            </Link>
                        </div>
                    </div>
                </div>
            ) : null}
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
};

export default Profile;