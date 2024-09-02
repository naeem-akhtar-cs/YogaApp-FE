"use client";
import { useState, useEffect } from "react";
import newUserSignup from "../../src/functions/newUserSignup";
import Link from 'next/link';
import { useRouter } from 'next/router';
export default function Signup() {
  const [buttonState, setButtonState] = useState(false);
  const [loading, setLoading] = useState(true);
  const [alert, setAlert] = useState({ show: false, message: "", type: "" });
  const [password, setPassword] = useState("");
  const router = useRouter();
  const [validations, setValidations] = useState({
    length: false,
    uppercase: false,
    number: false,
    special: false,
  });

  const signup = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setButtonState(true);
    
    const userData = await newUserSignup(event);

    setButtonState(false);
    
    if (userData && userData.status === 200) {
      setAlert({
        show: true,
        message:
          "An email has been sent to the email you provided. Please open it to verify.",
        type: "success",
      });
      setTimeout(() => {
        router.push('/login');
      }, 2000);
    } else {
      setAlert({
        show: true,
        message: "Failed to sign up. Please try again later.",
        type: "error",
      });
    }
  };

  const handleCloseAlert = () => {
    setAlert({ ...alert, show: false });
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPassword(value);

    setValidations({
      length: value.length >= 8,
      uppercase: /[A-Z]/.test(value),
      number: /[0-9]/.test(value),
      special: /[!@#$%^&*]/.test(value),
    });
  };

  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <div className="flex flex-col w-full mt-[60px] items-center justify-center min-h-screen  ml-60 md:ml-0">
      {alert.show && (
        <div
          className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 p-4 border rounded-md shadow-lg ${
            alert.type === "success"
              ? "bg-green-100 border-green-400 text-green-700"
              : "bg-red-100 border-red-400 text-red-700"
          }`}
        >
          <span>{alert.message}</span>
          <button className="ml-4 text-lg font-bold" onClick={handleCloseAlert}>
            x
          </button>
        </div>
      )}
      {loading ? (
        <div className="fixed top-[80px] left-0 w-full h-1 bg-blue-400 overflow-hidden">
          <div
            className="top-[80px] left-0 w-full h-full bg-blue-900"
            style={{
              animation: "move 2s infinite",
            }}
          ></div>
        </div>
      ) : (
        <div className="flex min-h-full flex-col justify-center">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <h2 className="mt-[50px] text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Create new account
            </h2>
          </div>
          <div className="mt-10 px-6 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-6" onSubmit={signup}>
              <div className="grid gap-6 mb-6 md:grid-cols-2">
                <div>
                  <label className="block text-sm font-medium leading-6 text-gray-900">
                    First Name
                  </label>
                  <div className="mt-2">
                    <input
                      id="firstName"
                      type="text"
                      required
                      className="pl-4 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium leading-6 text-gray-900">
                    Last Name
                  </label>
                  <div className="mt-2">
                    <input
                      id="lastName"
                      name="lastName"
                      type="text"
                      required
                      className="pl-4 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium leading-6 text-gray-900">
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="pl-4 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium leading-6 text-gray-900">
                  Username
                </label>
                <div className="mt-2">
                  <input
                    id="username"
                    name="username"
                    type="text"
                    required
                    className="pl-4 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium leading-6 text-gray-900">
                  Password
                </label>
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    required
                    className="pl-4 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                    onChange={handlePasswordChange}
                  />
                </div>
                <ul className="password-requirements mt-2 text-sm list-disc pl-6 w-100 flex flex-col">
                  <li
                    className={`${
                      validations.length ? "text-green-500" : "text-red-500"
                    } `}
                  >
                    Must contain at least 8 characters
                  </li>
                  <li
                    className={`${
                      validations.uppercase ? "text-green-500" : "text-red-500"
                    }`}
                  >
                    Must have one or more capital letters
                  </li>
                  <li
                    className={`${
                      validations.number ? "text-green-500" : "text-red-500"
                    } `}
                  >
                    Must have one or more numbers
                  </li>
                  <li
                    className={`${
                      validations.special
                        ? "text-green-500 w-full"
                        : "text-red-500 w-full"
                    } `}
                  >
                    Must have a special character ex: !@#$%^&*()
                  </li>
                </ul>
              </div>
              <div>
                <div className="block text-sm font-medium leading-6 text-gray-900">
                  <input
                    id="terms"
                    name="terms"
                    type="checkbox"
                    required
                    defaultChecked
                  />
                  {" "}By Signing up I agree to{" "}
                  <Link href="/terms">
                    <span className="text-cyan-600 underline underline-offset-2">
                      Terms and Conditions
                    </span>
                  </Link>
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
                        />
                        <path
                          d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                          fill="currentColor"
                        />
                      </svg>
                      <span id="buttonText">Signing up</span>
                    </>
                  ) : (
                    <span id="buttonText">Create account</span>
                  )}
                </button>
              </div>
            </form>
            <div className="text-center py-6">OR</div>
            <Link href="/login">
              <button
                type="button" 
                className="bg-cyan-700 flex w-full justify-center rounded-md px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
              >
                Login to existing account
              </button>
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
