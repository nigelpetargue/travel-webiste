import { Group, Image, SimpleGrid, Stack, Text, Title } from '@mantine/core';
import { MdFlight } from 'react-icons/md';
import { FaHotel, FaWifi } from 'react-icons/fa';
import { IoFastFood } from 'react-icons/io5';
import Detail from './Feature/Detail';

export default function Features() {
  return (
    <SimpleGrid h="90vh" cols={2}>
      <Image src="/images/1664535286200-image2.png" fit="contain" height={496} width={442} />
      <Stack spacing="xl">
        <Title>Explore all corners of the world with us</Title>
        <Text color="dimmed" mb={50} style={{ lineHeight: 2 }}>
          Travelling eradicates bias and closed-mindedness, which is greatly needed by a significant
          portion of our population. Many individuals among us require this experience urgently.
        </Text>

        <Group spacing={50} w="80%">
          <Detail icon={IoFastFood} label="Delicious Foods" />
          <Detail icon={MdFlight} label="Comfort Flight" />
        </Group>
        <Group spacing={75} w="80%">
          <Detail icon={FaHotel} label="Clean Room" />
          <Detail icon={FaWifi} label="Free WiFi" />
        </Group>
      </Stack>
    </SimpleGrid>
  );
}
