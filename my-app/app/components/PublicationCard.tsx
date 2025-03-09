"use client";
import React, { useState } from "react";
import { AiOutlineLike } from "react-icons/ai";
import { FaRegTrashAlt } from "react-icons/fa";

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
        console.log(isLiked);
        const body = {
            id: id,
            liked: !isLiked,
        };

        try {
            await fetch("/api/publication", {
                method: "PATCH",
                body: JSON.stringify(body),
            });

            body.liked
                ? setLikeStatus(likeStatus + 1)
                : setLikeStatus(likeStatus - 1);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="flex-col m-auto w-96 space-y-4">
            <div className="inline-flex items-center justify-center w-full">
                <h3 className="text-xl text-center">
                    <u>{title}</u>
                </h3>
                <button className="flex justify-center w-6 h-6 items-center ml-8 hover:bg-red-500 rounded-2xl">
                    <FaRegTrashAlt />
                </button>
            </div>
            <p>{description}</p>
            <div className="inline-flex space-x-2">
                <button onClick={handleLike}>
                    <AiOutlineLike
                        size="20"
                        className={
                            isLiked
                                ? "bg-blue-400 rounded-sm"
                                : "hover:bg-blue-400 rounded-sm"
                        }
                    />
                </button>
                <span className="">{likeStatus}</span>
            </div>
            <hr className="mt-4 mb-4" />
        </div>
    );
};

export default PublicationCard;
