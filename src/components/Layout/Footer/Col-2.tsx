import { Stack, Text, Title } from '@mantine/core';
import { navigations } from '../navigations';

export default function Column2() {
  return (
    <Stack spacing={10}>
      <Title order={4} mb={10}>
        Quick Links
      </Title>
      {navigations.map((nav) => (
        <Text size="xs">{nav.label}</Text>
      ))}
    </Stack>
  );
}
