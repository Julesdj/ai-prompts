"use client";

import { useSession } from "next-auth/react";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

function PromptCard({ post, handleTagClick, handleEdit, handleDelete }) {
    const { data: session } = useSession();
    const pathName = usePathname();
    const router = useRouter();

    const [copied, setCopied] = useState("");

    const handleProfileClick = () => {
        console.log(post);

        if (post.creator._id === session?.user.id)
            return router.push("/profile");

        router.push(
            `/profile/${post.creator._id}?name=${post.creator.username}`
        );
    };

    //copy to clipboard handler
    const handleCopy = () => {
        setCopied(post.prompt);
        navigator.clipboard.writeText(post.prompt);
        setTimeout(() => setCopied(false), 5000);
    };

    return (
        <div className="prompt_card">
            <div className="flex justify-between items-start gap-5">
                <div
                    className="flex flex-1 justify-start items-center gap-3 cursor-pointer"
                    onClick={handleProfileClick}
                >
                    <Image
                        src={post.creator.image}
                        alt="user profile picture"
                        width={32}
                        height={32}
                        className="rounded-full"
                    />
                    <h3 className="font-satoshi font-semibold text-gray-900">
                        {post.creator.displayName}
                    </h3>
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
            {session?.user.id === post.creator._id &&
                pathName === "/profile" && (
                    <div className="mt-5 flex justify-center gap-4 border-t border-gray-200 pt-3">
                        <p
                            className="font-inter text-sm green_gradient cursor-pointer"
                            onClick={handleEdit}
                        >
                            Edit
                        </p>
                        <p
                            className="font-inter text-sm orange_gradient cursor-pointer"
                            onClick={handleDelete}
                        >
                            Delete
                        </p>
                    </div>
                )}
        </div>
    );
}

export default PromptCard;
