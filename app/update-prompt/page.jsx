"use client";

import Form from "@components/Form";
import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

function UpdatePrompt() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const promptId = searchParams.get("id");

    const [submition, setSubmition] = useState(false);
    const [post, setPost] = useState({
        prompt: "",
        tag: "",
    });

    useEffect(() => {
        const getPromptDetails = async () => {
            const response = await fetch(`/api/prompts/${promptId}`);
            const data = await response.json();
            setPost({
                prompt: data.prompt,
                tag: data.tag,
            });
        };
        if (promptId) {
            getPromptDetails();
        }
    }, [promptId]);

    const handelUpdate = async (e) => {
        e.preventDefault();
        setSubmition(true);

        if (!promptId) {
            return alert("Prompt ID not found!");
        }
        try {
            const response = await fetch(`/api/prompts/${promptId}`, {
                method: "PATCH",
                body: JSON.stringify({
                    prompt: post.prompt,
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
            type="Update"
            post={post}
            setPost={setPost}
            submition={submition}
            handleSubmit={handelUpdate}
        />
    );
}

export default UpdatePrompt;
