import { Box, Container } from '@mantine/core';
import Showcase from '../components/About/Showcase';
import Welcome from '../components/About/Welcome';
import Popular from '../components/Home/Popular';
import FooterNav from '../components/Layout/FooterNav';
import Destinations from '../components/Home/Destinations';

export default function Blog() {
  return (
    <Container size="lg">
      <Showcase />
      <div style={{ height: 100 }}></div>
      <Destinations />
      <Popular />
      <FooterNav />
    </Container>
  );
}
