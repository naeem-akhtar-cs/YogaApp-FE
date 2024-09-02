const getProtocols = async () => {
    try {
        const requestOptions = {
            method: "GET",
            redirect: "follow" as RequestRedirect
        };
        const protocols = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/protocol/getProtocols`, requestOptions);
        return protocols;
    } catch (error) {
        console.log("Error getting protocols", error);
    }
}

export default getProtocols
