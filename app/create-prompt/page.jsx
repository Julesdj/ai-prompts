"use client";

import Form from "@components/Form";
import { useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

function CreatePrompt() {
    const router = useRouter();
    const { data: session } = useSession();

    const [submition, setSubmition] = useState(false);
    const [post, setPost] = useState({
        prompt: "",
        tag: "",
    });

    const createPrompt = async (e) => {
        e.preventDefault();
        setSubmition(true);
        try {
            const response = await fetch("/api/prompt/new", {
                method: "POST",
                body: JSON.stringify({
                    prompt: post.prompt,
                    userId: session?.user.id,
                    tag: post.tag,
                }),
            });
            if (response.ok) {
                router.push("/");
            }
        } catch (error) {
            console.log(error);
        } finally {
            setSubmition(false);
        }
    };

    return (
        <Form
            type="Create"
            post={post}
            setPost={setPost}
            submition={submition}
            handleSubmit={createPrompt}
        />
    );
}

export default CreatePrompt;
