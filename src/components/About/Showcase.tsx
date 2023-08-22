import { Box, Divider, Text } from '@mantine/core';
import InformationItem from '../Home/Info';

export default function Showcase() {
  return (
    <Box
      sx={() => ({
        height: 400,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'center',
        marginTop: 50,
      })}
    >
      <Text
        sx={() => ({
          width: '50%',
          fontSize: 58,
          fontWeight: 800,
          lineHeight: 1.2,
          marginBottom: 20,
        })}
      >
        Discover The World & Explore Wander
      </Text>
      <Text size="sm" color="dimmed" w="50%" mb={50}>
        Explore the world's wonders with us. Our travel showcase is your gateway to wanderlust,
        inspiring new adventures one click at a time.
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
