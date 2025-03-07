import React from "react";
import { AiOutlineLike } from "react-icons/ai";
type Props = {
    title: string;
    description: string;
    like: number;
};

const PublicationCard = ({ title, description, like }: Props) => {
    return (
        <div className="flex-col m-auto w-96 space-y-3">
            <h3 className="text-xl text-center">{title}</h3>
            <p>{description}</p>
            <div className="inline-flex space-x-2">
                <AiOutlineLike size="20" className="hover:bg-blue-400 rounded-sm"/>
                <span className="">{like}</span>
            </div>
        </div>
    );
};

export default PublicationCard;
