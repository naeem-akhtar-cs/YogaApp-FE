export default interface AuthContextProps {
    user: any;
    setUser: (user: any) => void;
    isLoading: boolean
}
