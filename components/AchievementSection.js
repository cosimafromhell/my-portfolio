import PostPreview from '../components/post-preview';

export default function AchievementSection({ posts }) {
    return (
        <section>
            {posts.length ?
                <>
                    <div className="grid grid-cols-1 md:grid-cols-2 md:col-gap-16 lg:col-gap-32 row-gap-10 md:row-gap-16 mt-8 md:mt-16 mb-16">
                        {posts.map((post) => (
                            <PostPreview
                                key={post.slug}
                                title={post.title}
                                coverImage={post.coverImage}
                                date={post.date}
                                author={post.author}
                                slug={post.slug}
                                excerpt={post.excerpt}
                            />
                        ))}
                    </div>
                </>
                : <h1 className="text-2xl md:text-4xl font-bold tracking-tighter leading-tight mb-10 p-6">
                    該当の記事が見つかりません。
                </h1>}
        </section>
    )
}

