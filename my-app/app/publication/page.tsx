import React from "react";
import PublicationCard from "../components/PublicationCard";
import Link from "next/link";

const PublicationPage = () => {
    return (
        <main className="space-y-6">
            <h1 className="flex justify-center text-2xl">Publication</h1>
            <div className="flex justify-end">
                <Link href="/publication/create">
                    <button className="bg-blue-600 p-1 rounded-md mr-10 ">
                        Create New
                    </button>
                </Link>
            </div>
            <PublicationCard
                title="My new Bike"
                description="My bike is totaly amazing and electrical ! See that ! Oh no i can't put a photo here ..."
                like={2}
            />
        </main>
    );
};

export default PublicationPage;
