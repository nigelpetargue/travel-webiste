import { Box, Button, Image, SimpleGrid, Stack, Text, Title } from '@mantine/core';

export default function Welcome() {
  return (
    <Box h={450} mt={80} pt={40}>
      <SimpleGrid cols={2}>
        <Stack spacing={30} align="flex-start" justify="center">
          <Title>Welcome to Pacifico ✦</Title>
          <Text size="sm" color="dimmed">
            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
            there live the blind texts. Separated they live in Bookmarksgrove right at the coast of
            the Semantics, a large language ocean.
          </Text>
          <Button variant="filled" color="orange">
            Book Destination
          </Button>
        </Stack>
        <Box
          h="100%"
          sx={() => ({
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          })}
        >
          <Image src="/images/travel-1.png" fit="contain" height={351} width={400} />
        </Box>
      </SimpleGrid>
    </Box>
  );
}
