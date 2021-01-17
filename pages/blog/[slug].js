import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import Container from '../../components/container'
import PostBody from '../../components/post-body'
import MoreStories from '../../components/more-stories'
import Header from '../../components/header'
import PostHeader from '../../components/post-header'
import Comments from '../../components/comments'
import SectionSeparator from '../../components/section-separator'
import Layout from '../../components/layout'
import { getAllPostsWithSlug, getPostAndMorePosts } from '../../lib/api'
import PostTitle from '../../components/post-title'
import Head from 'next/head'
import { CMS_NAME } from '../../lib/constants'
import Form from '../../components/CommentForm'
import HeadContainer from '../../components/HeadContainer';
import Intro from '../../components/intro';

export default function Post({ post, morePosts, preview }) {
    const router = useRouter()
    if (!router.isFallback && !post?.slug) {
        return <ErrorPage statusCode={404} />
    }
    return (
        <Layout preview={preview}>
            <HeadContainer>
                <Intro title="Blog" />
                <Header />
            </HeadContainer>
            <Container>
                {router.isFallback ? (
                    <PostTitle>Loading…</PostTitle>
                ) : (
                        <>
                            <article className="mt-16">
                                <Head>
                                    <title>
                                        {post.title} | cfh's Blog
                                    </title>
                                    {/* <meta property="og:image" content={post.ogImage.url} /> */}
                                </Head>
                                <PostHeader
                                    title={post.title}
                                    coverImage={post.coverImage}
                                    date={post.date}
                                    author={post.author}
                                />
                                <PostBody content={post.body} />
                            </article>

                            <Comments comments={post.comments} />
                            <Form _id={post._id} />

                            <SectionSeparator />
                            {morePosts.length > 0 && <MoreStories posts={morePosts} />}
                        </>
                    )}
            </Container>
        </Layout>
    )
}

export async function getStaticProps({ params, preview = false }) {
    const data = await getPostAndMorePosts(params.slug, preview)
    return {
        props: {
            preview,
            post: data?.post || null,
            morePosts: data?.morePosts || null,
        },
        revalidate: 1
    }
}

export async function getStaticPaths() {
    const allPosts = await getAllPostsWithSlug()
    return {
        paths:
            allPosts?.map((post) => ({
                params: {
                    slug: post.slug,
                },
            })) || [],
        fallback: true,
    }
}
