import Link from "next/link";
import React from "react";
import { GiSpy } from "react-icons/gi";

const Header = () => {
    return (
        <header className="flex justify-center mt-5">
            <Link href={"/"}>
                <GiSpy size={45} />
            </Link>
        </header>
    );
};

export default Header;
