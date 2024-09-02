const newUserSignup = async (event: any) => {
    event.preventDefault();

    try {


        const formElements = event.target.elements;
        const userData = {
            "firstName": formElements.firstName.value,
            "lastName": formElements.lastName.value,
            "email": formElements.email.value,
            "username": formElements.username.value,
            "password": formElements.password.value
        }

        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const raw = JSON.stringify({
            "firstName": userData.firstName,
            "lastName": userData.lastName,
            "email": userData.email,
            "username": userData.username,
            "password": userData.password
        });

        const requestOptions: RequestInit = {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow" as RequestRedirect
        };
     
        const result = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/user/signup`, requestOptions);
        return result;
    } catch (error) {
        return null
    }
}

export default newUserSignup
