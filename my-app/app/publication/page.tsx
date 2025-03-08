import React from "react";
import PublicationCard from "../components/PublicationCard";
import Link from "next/link";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const PublicationPage = async () => {
    const publications = await prisma.publication.findMany();

    return (
        <main className="space-y-6">
            <h1 className="flex justify-center text-2xl">Publication</h1>
            <div className="flex justify-end">
                <Link href="/publication/create">
                    <button className="bg-blue-600 hover:bg-blue-500 p-1 rounded-md mr-10 ">
                        Create New
                    </button>
                </Link>
            </div>
            
            <ul>
                {publications.map((p) => <li key={p.id}>
                    <PublicationCard
                    title={p.title}
                    description={p.description}
                    like={p.like} />
                    </li>)}
            </ul>
        </main>
    );
};

export default PublicationPage;
