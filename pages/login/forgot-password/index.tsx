export default function FotgotPassword() {
    return (
        <main className="min-h-screen items-center py-20 xs:px-2 sm:px-2 md:px-20 lg:px-40 text-black  ml-40 w-full md:ml-0 md:w-auto">
            <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <h2 className=" text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Recover Password</h2>
                </div>
                <div className="mt-10 sm:mx-auto sm:max-w-sm">
                    <h2 className="">Enter your registered email address and a confirmation message will be sent to recover your password.</h2>
                    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                        <form className="space-y-6" action="#" method="POST">
                            <div className="mt-6">
                                <label className="block text-sm font-medium leading-6 text-gray-900">Email address</label>
                                <div className="mt-2">
                                    <input id="email" name="email" type="email" required className="pl-4 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"></input>
                                </div>
                            </div>
                            <div>
                                <button type="submit" className="bg-cyan-500 flex w-full justify-center rounded-md px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2">Send request</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </main>
    )
}
