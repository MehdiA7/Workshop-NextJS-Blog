import NewPublicationForm from "@/app/components/NewPublicationForm";
import Link from "next/link";
import React from "react";
import { FaArrowDown, FaArrowLeft } from "react-icons/fa";

const CreatePage = () => {
    return (
        <main>
            <Link className="flex justify-center mr-7 mt-3" href={"/publication"}>
                <FaArrowLeft size={20}/>
            </Link>
            <div className="flex justify-center mt-3">
                <h1 className="inline-flex">
                    <FaArrowDown className="mr-2" />
                    Create your publication
                    <FaArrowDown className="ml-2" />
                </h1>
            </div>
            <article className="flex justify-center mt-5">
            <NewPublicationForm  />
            </article>
        </main>
    );
};

export default CreatePage;
