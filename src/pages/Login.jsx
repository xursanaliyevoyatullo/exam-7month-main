import { FcGoogle } from "react-icons/fc"
import { signUpWithGoogleAccount } from "../firebase/firebaseConfig";
import { userSetting } from "../redux/features/basketSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { signOutFromAccount } from "../firebase/firebaseConfig";
import { useNavigate } from "react-router-dom";

function Login() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { user } = useSelector((state) => state.basket)
    const loginSignup = () => {
        signUpWithGoogleAccount()
            .then((result) => {
                dispatch(userSetting(result.user));
                navigate('/')
            })
            .catch((error) => {
                console.log(error);
            })
    }

    return (
        <div className="flex flex-col justify-center items-center mt-32">
            {!user && <h1 className="font-bold text-xl mb-10">Login / SignUp</h1>}
            {user && <div>
                <div className="mb-7">
                    <h1 className="font-bold text-2xl">{user.displayName}</h1>
                </div>
                <div className="avatar items-center ml-[75px]">
                    <div className="w-24 rounded-full mb-10">
                        <img src={user.photoURL} alt="" />
                    </div>
                </div>
            </div>}
            <div className="flex gap-7">
                <button onClick={loginSignup} className="btn btn-success">
                    <span className="bg-slate-100 rounded-xl">
                        <FcGoogle />
                    </span>
                    <span>Sign Up</span>
                </button>
                <button onClick={signOutFromAccount} className="btn btn-error">
                    <span className="bg-slate-100 rounded-xl">
                        <FcGoogle />
                    </span>
                    <span>Log Out</span>
                </button>
            </div>
        </div>
    )
}

export default Login