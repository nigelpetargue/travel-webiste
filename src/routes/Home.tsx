import { Container, SimpleGrid } from '@mantine/core';
import LeftContainer from '../components/Home/Left';
import RightContainer from '../components/Home/Right';
import Popular from '../components/Home/Popular';
import Features from '../components/Home/Features';
import Destinations from '../components/Home/Destinations';
import PartnerBrands from '../components/Home/Brands';
import Newsletter from '../components/Home/Newsletter';
import FooterNav from '../components/Layout/FooterNav';

export default function Home() {
  return (
    <Container size="lg">
      <SimpleGrid h="100vh" py="lg" cols={2}>
        <LeftContainer />
        <RightContainer />
      </SimpleGrid>

      <Popular />
      <Features />
      <Destinations />
      <PartnerBrands />
      <Newsletter />
      <FooterNav />
    </Container>
  );
}
