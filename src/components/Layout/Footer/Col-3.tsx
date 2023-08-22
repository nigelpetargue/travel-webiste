import { Stack, Text, Title } from '@mantine/core';

export default function Column3() {
  return (
    <Stack spacing={10}>
      <Title order={4} mb={10}>
        Quick Links
      </Title>
      <Text size="xs">FAQ's</Text>
      <Text size="xs">Privacy Policy</Text>
      <Text size="xs">Terms & Condition</Text>
      <Text size="xs">Support</Text>
    </Stack>
  );
}
