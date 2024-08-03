import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-info shadow-sm">
      <div className="container">
        <Link href={"/"} className="navbar-brand d-flex align-items-center">
          <Image
            src="/w2.png"
            alt="Logo"
            width={50}
            height={17}
            priority
            className="d-inline-block align-top"
          />
          <span className="ml-2 text-light font-weight-bold">Task Manager</span>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            {/* Puedes agregar más elementos aquí si es necesario */}
            <li className="nav-item">
              <Link href={"/create"} className="nav-link btn btn-light btn-outline-dark">
                <i className="bi bi-plus-circle"></i> Create
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
