"use client";
import React, { useState } from "react";
import Spinner from "./Spinner";
import { useRouter } from "next/navigation";

type bodyData = {
    
    title: string;
    description: string;
    
}

const NewPublicationForm = () => {
    const [isSubmit, setIsSubmit] = useState<boolean>(false);
    const [title, setTitle] = useState<string>("");
    const [description, setDescription] = useState<string>("");

    const router = useRouter();

    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        setIsSubmit(true);

        const data: bodyData = {
            title: title,
            description: description
        }
        
        try {
            await fetch("/api/publication", {
                method: "POST",
                body: JSON.stringify(data)
            })

            router.push("/publication");
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="flex justify-center border-2 rounded-md w-80 ">
            <form action="" className="mt-4 mb-4 space-y-4" onSubmit={onSubmit}>
                <label htmlFor="title" className="mr-14">
                    Title
                </label>
                <input
                    type="text"
                    id="title"
                    name="title"
                    className="bg-blue-50 text-black border-black"
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />
                <br />
                <label htmlFor="description" className="mr-1.5">
                    Description
                </label>
                <input
                    type="text"
                    id="description"
                    name="description"
                    className="bg-blue-50 text-black border-black"
                    onChange={(e) => setDescription(e.target.value)}
                    required
                />
                <br />
                <div className="flex justify-end">
                    <button
                        type="submit"
                        className="bg-blue-600 hover:bg-blue-500 p-1 rounded-md"
                        disabled={isSubmit}
                    >
                        Create  
                        {isSubmit && <Spinner/>}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default NewPublicationForm;
