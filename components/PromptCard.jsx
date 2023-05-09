"use client";

import Image from "next/image";
import { useState } from "react";

function PromptCard({ post, handleTagClick }) {
    const [copied, setCopied] = useState("");

    //copy to clipboard handler
    const handleCopy = () => {
        setCopied(post.prompt);
        navigator.clipboard.writeText(post.prompt);
        setTimeout(() => setCopied(""), 5000);
    };

    return (
        <div className="prompt_card">
            <div className="flex justify-between items-start gap-5">
                <div className="flex flex-1 justify-start items-center gap-3 cursor-pointer">
                    <Image
                        src={post.creator.image}
                        alt="user profile picture"
                        width={40}
                        height={40}
                        className="rounded-full"
                    />
                    <div className="flex flex-col">
                        <h3 className="font-satoshi font-semibold text-gray-900">
                            {post.creator.username}
                        </h3>{" "}
                        <p className="font-inter text-sm text-gray-500">
                            {post.creator.email}
                        </p>
                    </div>
                </div>
                <div className="copy_btn" onClick={handleCopy}>
                    <Image
                        src={
                            copied === post.prompt
                                ? "/assets/icons/tick.svg"
                                : "/assets/icons/copy.svg"
                        }
                        width={20}
                        height={20}
                        alt="Copy icon"
                    />
                </div>
            </div>
            <p className="my-4 font-satoshi text-sm text-gray-700">
                {post.prompt}
            </p>
            <p
                onClick={() => handleTagClick && handleTagClick(post.tag)}
                className="font-inter text-sm text-gray-700 blue_gradient cursor-pointer"
            >
                {post.tag}
            </p>
        </div>
    );
}

export default PromptCard;
