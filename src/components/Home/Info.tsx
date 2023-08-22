import { Box, Text } from '@mantine/core';

interface InformationItemProps {
  label: string;
  sub: string;
}

export default function InformationItem({ label, sub }: InformationItemProps) {
  return (
    <Box>
      <Text size="xs" color="orange">
        {sub}
      </Text>
      <Text size="sm">{label}</Text>
    </Box>
  );
}
