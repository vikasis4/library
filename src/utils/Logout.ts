import { useRouter } from "next/navigation";

const Logout = () => {

    const router = useRouter();

    const fxn = () => {
        localStorage.removeItem('user');
        router.push('/')

    }

    return fxn

}

export default Logout