import { Group, Text } from '@mantine/core';

interface PriceProps {
  price: string;
  promotion: string;
  review: string;
  rating: string;
}

export default function Price({ price, promotion, review, rating }: PriceProps) {
  return (
    <>
      <Group position="apart">
        <Text weight={700} size={28}>
          {price}
        </Text>
        <Text size="xs">{rating}</Text>
      </Group>
      <Group position="apart">
        <Text size="xs" color="dimmed">
          {promotion}
        </Text>
        <Text size="xs" color="dimmed">
          {review}
        </Text>
      </Group>
    </>
  );
}
