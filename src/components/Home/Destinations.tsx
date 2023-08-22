import { Box, Group, SimpleGrid, Stack, Title } from '@mantine/core';
import DestinationCard from './Destination/Card';

export default function Destinations() {
  return (
    <Box h="100vh">
      <Title>Top tourist destinations</Title>
      <SimpleGrid cols={3} mt={50}>
        <Stack>
          <DestinationCard
            width={357}
            height={245}
            image="https://images.pexels.com/photos/2516406/pexels-photo-2516406.jpeg?auto=compress&cs=tinysrgb&w=600"
            name="Banaue Rice Terraces"
            place="Philippines"
          />
          <DestinationCard
            width={357}
            height={245}
            image="https://images.pexels.com/photos/1320684/pexels-photo-1320684.jpeg?auto=compress&cs=tinysrgb&w=600"
            name="Maldives"
            place="Indonesia"
          />
        </Stack>
        <DestinationCard
          width={357}
          height={510}
          image="https://images.unsplash.com/photo-1542224566-6e85f2e6772f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG1vdW50YWluc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
          name="Higravstinden "
          place="Lofoten, Norway"
        />
        <Stack>
          <DestinationCard
            width={357}
            height={245}
            image="https://images.unsplash.com/photo-1546882588-d9bd63f85a7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8d2F0ZXJmYWxsfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
            name="Ottopotu Falls"
            place="New Zeland"
          />
          <Group>
            <DestinationCard
              width={165}
              height={245}
              image="https://images.pexels.com/photos/17841904/pexels-photo-17841904/free-photo-of-landscape-of-high-mountains.jpeg?auto=compress&cs=tinysrgb&w=600"
              name="Weisshorn "
              place="Switzerland"
            />
            <DestinationCard
              width={175}
              height={245}
              image="https://images.unsplash.com/photo-1523997596732-56d0ebb8eacf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHNub3clMjBtb3VudGFpbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
              name="Saint Étienne de  Tinée"
              place="France"
            />
          </Group>
        </Stack>
      </SimpleGrid>
    </Box>
  );
}
