import { Footer as MantineFooter, Text } from '@mantine/core';

export default function Footer() {
  return (
    <MantineFooter
      height={50}
      pos="static"
      sx={() => ({
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      })}
    >
      <Text size="sm">Copyright © 2023 Nigel Petargue</Text>
    </MantineFooter>
  );
}
