import { Group, Paper, Text } from '@mantine/core';
import { IconType } from 'react-icons';

interface DetailProps {
  icon: IconType;
  label: string;
}

export default function Detail({ icon: Icon, label }: DetailProps) {
  return (
    <Group>
      <Paper
        sx={(theme) => ({
          background: theme.colors.white,
          boxShadow: theme.shadows.xl,
          padding: '4px 10px',
        })}
      >
        <Icon color="orange" size={24} />
      </Paper>
      <Text weight={500}>{label}</Text>
    </Group>
  );
}
