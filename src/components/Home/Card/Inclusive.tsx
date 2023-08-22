import { Group, Text } from '@mantine/core';
import { BsCheckLg } from 'react-icons/bs';

interface InclusivePackageProps {
  label: string;
}

export default function InclusivePackage({ label }: InclusivePackageProps) {
  return (
    <Group spacing={5}>
      <BsCheckLg color="cyan" />
      <Text color="dimmed" size="xs">
        {label}
      </Text>
    </Group>
  );
}
