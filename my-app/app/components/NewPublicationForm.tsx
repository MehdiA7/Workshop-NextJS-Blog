import React from "react";

const NewPublicationForm = () => {
    return (
        <div className="flex justify-center border-2 w-80 ">
            <form action="" className="mt-4 mb-4 space-y-4">
                <label htmlFor="title" className="mr-14">
                    Title
                </label>
                <input
                    type="text"
                    id="title"
                    className="bg-blue-50 border-black"
                />
                <br />
                <label htmlFor="description" className="mr-1.5">
                    Description
                </label>
                <input
                    type="text"
                    id="description"
                    className="bg-blue-50 border-black"
                />
                <br />
                <div className="flex justify-end">
                    <button
                        type="submit"
                        className="bg-blue-600 hover:bg-blue-500 p-1 rounded-md"
                    >
                        Create
                    </button>
                </div>
            </form>
        </div>
    );
};

export default NewPublicationForm;
