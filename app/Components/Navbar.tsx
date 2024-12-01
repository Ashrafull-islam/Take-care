import image from '@/public/images.png';
import Link from "next/link";
import Image from 'next/image'
import BookModal from './BookModal/page';
const NavBar = () => {

    const links=<>

    <li><Link href="/">Home</Link></li>

    <li><Link href="/about">About</Link></li>

    <li><Link href="/contacts">Contact</Link></li>

    <li><Link href="/Program">Program</Link></li>

    </>

    return (

        <div className="font-playfair-bold text-xl max-w-[80%] mx-auto  bg-[#FFFFFF]">

            <div className="navbar bg-base-100">

  <div className="navbar-start">

    <div className="dropdown">

      <div tabIndex={0} role="button" className="btn btn-ghost  lg:hidden">

        <svg

          xmlns="http://www.w3.org/2000/svg"

          className="h-5 w-5"

          fill="none"

          viewBox="0 0 24 24"

          stroke="currentColor">

          <path

            strokeLinecap="round"

            strokeLinejoin="round"

            strokeWidth="2"

            d="M4 6h16M4 12h8m-8 6h16" />

        </svg>

      </div>

      <ul

        tabIndex={0}

        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">

       {links}

      </ul>
    </div>

    <Image
      className="md:rounded-full md:h-[80px] md:w-[83px]"  alt="logo-image"
      src={image}
    />
  </div>

  <div className="navbar-end hidden lg:flex">

    <ul className="menu menu-horizontal px-1">

      {links}

      <li className="bg-[#263B3C] text-white rounded-full">
        {/* The button to open modal */}
<label htmlFor="my_modal_6" className="">Book Now</label>

{/* Put this part before </body> tag */}
<input type="checkbox" id="my_modal_6" className="modal-toggle" />
<div className="modal" role="dialog">
  <div className="">
      <BookModal></BookModal>
  </div>
</div>
      </li>
    </ul>

  </div>

</div>

        </div>

    );
};


export default NavBar;