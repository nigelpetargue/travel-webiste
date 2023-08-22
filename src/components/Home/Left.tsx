import { Box, Divider, Group, Text } from '@mantine/core';
import InformationItem from './Info';

export default function LeftContainer() {
  return (
    <Box
      sx={() => ({
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        gap: 50,
        margin: '5em 0 0 0',
      })}
    >
      <Text
        sx={() => ({
          fontSize: 58,
          fontWeight: 800,
          lineHeight: 1.2,
        })}
      >
        Explore Beautiful World
      </Text>
      <Text color="dimmed" style={{ lineHeight: 2 }}>
        Embark on a journey to explore the exquisite and captivating realm of our planet—a world
        that is truly magnificent and enchanting beyond imagination!
      </Text>

      <Box
        sx={(theme) => ({
          width: 438,
          background: theme.colors.gray[0],
          borderRadius: theme.radius.lg,
          boxShadow: theme.shadows.lg,
          padding: theme.spacing.md,
          display: 'flex',
          justifyContent: 'space-between',
        })}
      >
        <InformationItem sub="Located in" label="Philippines" />
        <Divider orientation="vertical" size="xs" />
        <InformationItem sub="Opening" label="8:00AM - 6:00PM" />
        <Divider orientation="vertical" size="xs" />
        <InformationItem sub="Price range" label="$400 - $700" />
      </Box>
    </Box>
  );
}
