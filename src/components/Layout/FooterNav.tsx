import { SimpleGrid } from '@mantine/core';
import Column1 from './Footer/Col-1';
import Column2 from './Footer/Col-2';
import Column3 from './Footer/Col-3';
import Column4 from './Footer/Col-4';

export default function FooterNav() {
  return (
    <SimpleGrid cols={4} h={300} mt={100} py={20}>
      <Column1 />
      <Column2 />
      <Column3 />
      <Column4 />
    </SimpleGrid>
  );
}
