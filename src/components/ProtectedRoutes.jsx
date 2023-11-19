import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"

function ProtectedRoutes({ children }) {
    const { user } = useSelector((state) => state.basket)
    if (user) {
        return children;
    } else {
        return <Navigate />
    }
}

export default ProtectedRoutes