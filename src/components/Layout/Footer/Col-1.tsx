import { Group, Image, Stack, Text } from '@mantine/core';
import { FaFacebookSquare, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

export default function Column1() {
  return (
    <Stack spacing={10}>
      <Image
        src="/src/assets/images/logo.png"
        alt="brand-logo"
        fit="contain"
        height={50}
        width={100}
      />
      <Text size="xs">
        Unveil your wanderlust's perfect match on our travel website. Explore curated experiences,
        diverse cultures, and expert tips for your dream vacation. Your journey begins here.
      </Text>

      <Group mt={20} color="orange">
        <FaFacebookSquare color="orange" />
        <FaTwitter color="orange" />
        <FaInstagram color="orange" />
        <FaLinkedin color="orange" />
      </Group>
    </Stack>
  );
}
