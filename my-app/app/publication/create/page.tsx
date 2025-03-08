import NewPublicationForm from "@/app/components/NewPublicationForm";
import React from "react";
import { FaArrowDown } from "react-icons/fa";

const CreatePage = () => {
    return (
        <main>
            <div className="flex justify-center mt-5">
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
