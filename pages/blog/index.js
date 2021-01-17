import { useState } from 'react';
import Layout from '../../components/layout';
import Container from '../../components/container';
import HeadContainer from '../../components/HeadContainer';
import Intro from '../../components/intro';
import Header from '../../components/header';
import SearchBar from '../../components/SearchBar';
import AchievementSection from '../../components/AchievementSection';
import { getAllPostsForBlog } from '../../lib/api';

export default function Index({ allPosts, preview }) {
    const [postsState, setPostsState] = useState(allPosts);
    const handleSearchPosts = function (posts, word) {
        const result = posts.filter(p => p.title.includes(word) | toPlainText(p.body).includes(word));
        setPostsState(result);
    };
    const toPlainText = function (blocks = []) {
        return blocks
            // loop through each block
            .map(block => {
                // if it's not a text block with children, 
                // return nothing
                if (block._type !== 'block' || !block.children) {
                    return ''
                }
                // loop through the children spans, and join the
                // text strings
                return block.children.map(child => child.text).join('')
            })
            // join the paragraphs leaving split by two linebreaks
            .join('\n\n')
    };

    return (
        <>
            <Layout preview={preview}>
                <HeadContainer>
                    <Intro title="Blog" />
                    <Header />
                </HeadContainer>
                <Container>
                    <SearchBar
                        targets={allPosts}
                        action={handleSearchPosts} />
                    <AchievementSection posts={postsState} />
                </Container>
            </Layout>
        </>
    );
}

export async function getStaticProps({ preview = false }) {
    const allPosts = await getAllPostsForBlog(preview)
    return {
        props: { allPosts, preview },
        revalidate: 1
    }
}