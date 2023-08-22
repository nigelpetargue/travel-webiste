import { Card as MantineCard, Image, Group, Text, Stack, Badge } from '@mantine/core';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { BiTime } from 'react-icons/bi';
import InclusivePackage from './Card/Inclusive';
import Price from './Card/Price';

interface CardProps {
  image: string;
  title: string;
  location: string;
}

export default function Card({ image, title, location }: CardProps) {
  return (
    <MantineCard
      shadow="sm"
      padding="sm"
      radius="md"
      sx={() => ({
        width: 340,
        height: 420,
      })}
    >
      <MantineCard.Section>
        <Image
          src={image}
          height={200}
          width="100%"
          alt="Norway"
          sx={() => ({
            borderBottomLeftRadius: 'none',
          })}
        />
      </MantineCard.Section>

      <Group position="apart" mt={8}>
        <Text weight={600} size="md">
          {title}
        </Text>
        <Badge color="orange">Popular</Badge>
      </Group>

      <Group spacing={5} mt={5}>
        <HiOutlineLocationMarker color="gray" />
        <Text size="xs" color="dimmed">
          {location}
        </Text>
      </Group>

      <Stack spacing={0} mt={10}>
        <Price price="$689.00" rating="⭐⭐⭐⭐⭐" promotion="Price varies" review="48(102)" />
      </Stack>

      <Stack spacing={0} mt={20}>
        <Group spacing={8}>
          <BiTime color="cyan" />
          <Text color="dimmed" size="xs">
            7 Days
          </Text>
        </Group>

        <Group spacing={8} mt={5}>
          <InclusivePackage label="Free Cancellation" />
          <InclusivePackage label="Luxurious Amenities" />
        </Group>
      </Stack>
    </MantineCard>
  );
}
