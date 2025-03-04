"use client";
import React from "react";
import { useState, useEffect } from "react";

type Props = {
    children: string;
}

const TypeWriterEffect = ( { children }: Props ) => {
    const [typing, setTyping] = useState<string>("");
    const [index, setIndex] = useState<number>(0);
    const destructuredText: string[] = children.split("");

    useEffect(() => {
        if (index < destructuredText.length) {
            setTimeout(() => {
                setTyping(typing + destructuredText[index]);
                setIndex(index + 1);
            }, 150);
        }
    });

    return (
        <div className="flex">
            <p>{typing}</p>
            <div className="inline bg-amber-50 w-0.5 h-4.5 ml-1 mt-1 animate-pulse" ></div>
        </div>
    );
};

export default TypeWriterEffect;