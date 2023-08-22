import { Box, Group, Title, UnstyledButton } from '@mantine/core';

export default function Newsletter() {
  return (
    <Box
      sx={() => ({
        height: 200,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 50,
      })}
    >
      <Title>Sign up to our newsletter</Title>
      <UnstyledButton
        sx={() => ({
          boxShadow: '-1px 1px 28px 4px rgba(0,0,0,0.36)',
          borderRadius: 10,
        })}
      >
        <Group>
          <input
            placeholder="Enter your e-address"
            type="email"
            style={{
              width: 400,
              border: 'none',
              outline: 'none',
              padding: '1em',
              borderTopLeftRadius: 10,
              borderBottomLeftRadius: 10,
            }}
          />
          <button
            style={{
              background: 'orange',
              color: 'white',
              padding: '1em',
              border: 'none',
              outline: 'none',
              borderTopRightRadius: 10,
              borderBottomRightRadius: 10,
            }}
          >
            Sign up
          </button>
        </Group>
      </UnstyledButton>
    </Box>
  );
}
