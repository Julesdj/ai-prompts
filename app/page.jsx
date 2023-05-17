import Feed from "@components/Feed";

function Home() {
    return (
        <section className="w-full flex justify-center items-center flex-col">
            <h1 className="head_text text-center">
                Discover & Share <br className="max-md:hidden" />
                <span className="orange_gradient text-center">
                    AI-Prowered Prompts
                </span>
            </h1>
            <p className="desc">
                Welcome to <pan className="font-bold">InspireAI+</pan>, the
                open-source prompts sharing tool designed to inspire your
                creativity and boost your productivity. With InspireAI+, you'll
                have access to a vast library of creative prompts created and
                shared by a community of like-minded creators. Whether you're a
                writer, artist, designer, or simply someone who loves to create,
                InspireAI+ is the perfect tool to help you overcome creative
                blocks and generate fresh ideas. With intuitive discovery and
                sharing features, you can easily collaborate with others and
                discover new ways to push your creative boundaries. Join our
                community today and unleash your creativity with InspireAI+ !
            </p>
            <Feed />
        </section>
    );
}

export default Home;
