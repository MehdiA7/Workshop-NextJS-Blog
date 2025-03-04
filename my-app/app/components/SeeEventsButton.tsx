import Link from "next/link";
import React from "react";

const SeeEventsButton = () => {
    return (
        <div className="flex justify-center m-4">
            <Link href="/post">
                <button className="bg-blue-600 rounded-sm w-28 hover:bg-blue-500">
                    See Blogs !
                </button>
            </Link>
        </div>
    );
};

export default SeeEventsButton;
