import { Box, Group, Title } from '@mantine/core';
import { tabs } from './tabs';
import { useState } from 'react';
import Beaches from './Cards/Beaches';
import Waterfalls from './Cards/Waterfalls';
import Mountains from './Cards/Mountains';
import Icebergs from './Cards/Icebergs';

type View = {
  [key: string]: () => JSX.Element;
};

const views: View = {
  beaches: Beaches,
  mountains: Mountains,
  waterfalls: Waterfalls,
  icebergs: Icebergs,
};

export default function Popular() {
  const [click, setClicked] = useState('beaches');

  const CurrentSelection = views[click];

  return (
    <Box h="90vh">
      <Group grow>
        <Title>Popular Places ✦</Title>

        <Group position="right" spacing="xl">
          {tabs.map((label) => (
            <a
              key={label}
              id={label}
              onClick={(e) => setClicked(e.currentTarget.id.toLowerCase())}
              style={{ color: 'orange', letterSpacing: 1, cursor: 'pointer' }}
            >
              {label}
            </a>
          ))}
        </Group>
      </Group>

      <Box
        sx={() => ({
          margin: '3em 0 0 0',
          height: '40%',
          display: 'flex',
          justifyContent: 'space-between',
        })}
      >
        <CurrentSelection />
      </Box>
    </Box>
  );
}
