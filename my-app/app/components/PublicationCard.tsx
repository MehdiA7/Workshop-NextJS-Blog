"use client";
import React, { useState } from "react";
import { AiOutlineLike } from "react-icons/ai";
type Props = {
    id: number;
    title: string;
    description: string;
    like: number;
};

const PublicationCard = ({ id, title, description, like }: Props) => {
    const [isLiked, setIsLiked] = useState<boolean>(false);
    const [likeStatus, setLikeStatus] = useState<number>(like);

    const handleLike = async () => {
        
        setIsLiked(isLiked ? false : true);
        console.log(isLiked)
        const body = {
            id: id,
            liked: !isLiked
        }

        try {
            await fetch("/api/publication", {
                method: "PATCH",
                body: JSON.stringify(body)
            })

            body.liked ? setLikeStatus(likeStatus + 1) : setLikeStatus(likeStatus - 1);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="flex-col m-auto w-96 space-y-3">
            <h3 className="text-xl text-center">{title}</h3>
            <p>{description}</p>
            <div className="inline-flex space-x-2">
                <button onClick={handleLike}>
                <AiOutlineLike size="20" className={isLiked ? "bg-blue-400 rounded-sm" : "hover:bg-blue-400 rounded-sm"}/>
                </button>
                <span className="">{likeStatus}</span>
            </div>
        </div>
    );
};

export default PublicationCard;
