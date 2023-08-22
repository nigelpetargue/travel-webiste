import { Card as MantineCard, Image, Text, Stack, Overlay } from '@mantine/core';

interface DestinationCardProps {
  image: string;
  name: string;
  place: string;
  height: number;
  width: number;
}

export default function DestinationCard({
  image,
  name,
  place,
  height,
  width,
}: DestinationCardProps) {
  return (
    <MantineCard w={width} h={height} radius="md" pos="relative" shadow="sm" withBorder>
      <MantineCard.Section>
        <Image src={image} fit="contain" width="100%" height="100%" />
        <Overlay color="#000" opacity={0.25} />
        <Stack spacing={0} pos="absolute" bottom={10} left={10} style={{ zIndex: 300 }}>
          <Text color="white">{name}</Text>
          <Text color="white" size="xs">
            {place}
          </Text>
        </Stack>
      </MantineCard.Section>
    </MantineCard>
  );
}
