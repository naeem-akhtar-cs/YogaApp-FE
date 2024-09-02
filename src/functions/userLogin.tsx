const userLogin = async (event: any) => {
    event.preventDefault();
    const formElements = event.target.elements;
    const userData = {
        "email": formElements.email.value,
        "password": formElements.password.value
    }
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
        "email": userData.email,
        "password": userData.password,
    });

    const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow" as RequestRedirect
    };
  console.log("email", userData.email)
    return fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/user/login`, requestOptions);
    
}

export default userLogin
