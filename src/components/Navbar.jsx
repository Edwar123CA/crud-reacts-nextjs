import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark" style={{ background: 'linear-gradient(to right, #4f46e5, #7e22ce, #ec4899)' }}>
      <div className="container">
        <Link href={"/"} className="navbar-brand">
          <Image
            src="/w2.png"
            alt="Next.js Logo"
            width={50}
            height={17}
            priority
          />
        </Link>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link
                href={"/create"}
                className="btn btn-dark"
              >
                Crear
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
