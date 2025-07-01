import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar fixed top-0 z-10 bg-red-100 max-w-7xl mx-auto">
      <div className="flex-1">
        <Link className="btn btn-ghost text-xl text-accent-content font-semibold">TOKIO</Link>
      </div>
      <div className="flex  justify-center items-center gap-4">
        <div className="flex justify-center items-center gap-4  font-medium ">
          <Link to='/' className="">
            Home
          </Link>
          <Link>Menu</Link>
          <Link>About Us</Link>
        </div>
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src="https://i.ibb.co/kHxxHXM/manna.jpg"
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <Link className="justify-between">Profile</Link>
            </li>
            <li>
              <Link>Settings</Link>
            </li>
            <li>
              <Link>Logout</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
