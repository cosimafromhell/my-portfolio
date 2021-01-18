import Container from '../components/container';
import HeadContainer from '../components/HeadContainer';
// import MoreStories from '../components/more-stories'
// import HeroPost from '../components/hero-post'
import Intro from '../components/intro';
import Layout from '../components/layout';
import { getAllPostsForHome } from '../lib/api';
import Head from 'next/head';
// import { CMS_NAME } from '../lib/constants'
import TechStackIconSection from '../components/TechStackIconSection';
import AchievementSection from '../components/AchievementSection';
import GotoBlogButton from '../components/GotoBlogButton';
import Header from '../components/header';

const introduction = `未経験で某IT企業に就職後はフロントエンド、バックエンド、AWS環境構築、サーバー保守・運用等、広範囲に業務経験を積み重ね5年目に退職。
現在はReact、Next.jsを主に使用したWebフロントエンジニアとしてフリーランスで活動中。`;

export default function Index({ allPosts, preview }) {
  const headPosts = allPosts.slice(0, 6);
  return (
    <>
      <Layout preview={preview}>
        <Head>
          <title>cfh's Profile</title>
        </Head>
        <HeadContainer>
          <Intro
            title="cfh's profile"
            describe={introduction}
          />
          <TechStackIconSection />
          <Header />
        </HeadContainer>
        <Container>
          {/* 仮置としてブログの記事を出力するようにしている。 */}
          {headPosts.length > 0 &&
            <>
              <AchievementSection posts={headPosts} />
              <GotoBlogButton />
            </>
          }
        </Container>
      </Layout>
    </>
  )
}

export async function getStaticProps({ preview = false }) {
  const allPosts = await getAllPostsForHome(preview)
  return {
    props: { allPosts, preview },
    revalidate: 1
  }
}