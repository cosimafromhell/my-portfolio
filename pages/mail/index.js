import Layout from '../../components/layout';
import HeadContainer from '../../components/HeadContainer';
import Intro from '../../components/intro';
import Header from '../../components/header';
import MailForm from '../../components/MailForm';
import Container from '../../components/container';

export default function Index({ preview }) {
    return (
        <>
            <Layout preview={preview}>
                <HeadContainer>
                    <Intro title="Contact" />
                    <Header />
                </HeadContainer>
                <Container>
                    <MailForm />
                </Container>
            </Layout>
        </>
    );
}