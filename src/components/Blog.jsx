const Blog = () => {
    const posts = [
        { title: "5 síntomas de que tu móvil necesita una revisión", link: "#" },
        { title: "Cómo proteger tu PC de virus", link: "#" },
        { title: "Consejos para alargar la vida de tu batería", link: "#" },
    ];

    return (
        <div className="bg-gray-100 py-16">
            <div className="container mx-auto text-center">
                <h2 className="text-3xl font-bold text-gray-800 mb-8">Consejos y Blog</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {posts.map((post, index) => (
                        <div key={index} className="p-6 bg-white rounded-lg shadow-md">
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">{post.title}</h3>
                            <a href={post.link} className="text-blue-600 hover:underline">Leer más</a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Blog;