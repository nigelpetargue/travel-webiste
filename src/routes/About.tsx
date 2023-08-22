import { Container } from '@mantine/core';
import Showcase from '../components/About/Showcase';
import Welcome from '../components/About/Welcome';
import FooterNav from '../components/Layout/FooterNav';
import Popular from '../components/Home/Popular';
import Newsletter from '../components/Home/Newsletter';

export default function About() {
  return (
    <Container size="lg">
      <Showcase />
      <Welcome />
      <Popular />
      <Newsletter />
      <FooterNav />
    </Container>
  );
}
