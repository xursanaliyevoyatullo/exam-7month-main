import { BsCart3, BsMoonFill, BsSunFill } from "react-icons/bs";
import { Link, NavLink, } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux";
import { toggleMode } from "../redux/features/basketSlice";

function Navbar() {
  const dispatch = useDispatch()
  const mode = useSelector((state) => state.basket.mode);


  const handleMode = () => {
    dispatch(toggleMode())
  }

  return (
    <nav className="bg-base-200 dark:bg-[#F0F6FF]">
      <div className="align-element pt-2 pb-2 flex items-center justify-between">
        <Link
          aria-current="page"
          className="hidden lg:flex btn btn-info text-3xl items-center"
          to="/">
          C
        </Link>

        <div className="flex gap-7 items-center">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/products">Products</NavLink>
          <NavLink to="/cart">Cart</NavLink>
          <NavLink to="/chekout">Chekout</NavLink>
          <NavLink to="/orders">Orders</NavLink>
          <NavLink to="/login">Login</NavLink>
        </div>
        <div className="flex items-center">
          <button onClick={handleMode} className="dark:text-white">
            {mode == 'dark' ? <BsSunFill /> : <BsMoonFill />}
          </button>
          <NavLink to="cart" className="btn btn-ghost btn-circle btn-md ml-4">
            <div className="indicator w-[20px]">
              <BsCart3 className="h-6 w-6" />
            </div>
          </NavLink>
        </div>
      </div>
    </nav>
  )
}

export default Navbar