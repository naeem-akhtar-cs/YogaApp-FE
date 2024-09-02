const refreshSession = async (userData: { userId: string, refreshToken: string }) => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
        "userId": userData.userId,
        "refreshToken": userData.refreshToken
    });

    const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow" as RequestRedirect
    };

    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/user/refreshSession`, requestOptions);
    
    if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const responseData = await response.json();
    if (!responseData.success) {
        throw new Error(responseData.message || "Failed to refresh token");
    }
    return responseData.tokens;
}

export default refreshSession;