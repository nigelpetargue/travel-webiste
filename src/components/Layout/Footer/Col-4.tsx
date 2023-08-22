import { Group, Stack, Text, Title } from '@mantine/core';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { IoCallOutline } from 'react-icons/io5';
import { FiMail } from 'react-icons/fi';

export default function Column4() {
  return (
    <Stack spacing={10}>
      <Title order={4} mb={10}>
        Contact Us
      </Title>
      <Group noWrap>
        <HiOutlineLocationMarker color="orange" />
        <Text size="xs">342 Blane Street, Philippines </Text>
      </Group>
      <Group noWrap>
        <IoCallOutline color="orange" />
        <Text size="xs">(02)-123-4449</Text>
      </Group>
      <Group noWrap>
        <FiMail color="orange" />
        <Text size="xs">pacifico@sample.com</Text>
      </Group>
    </Stack>
  );
}
