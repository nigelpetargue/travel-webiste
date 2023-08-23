import { Button, Container, Stack, Text } from '@mantine/core';
import { FaArrowLeft } from 'react-icons/fa';
import { useRouteError, isRouteErrorResponse, useNavigate } from 'react-router-dom';

export default function ErrorBoundary() {
  const error = useRouteError();
  const navigate = useNavigate();

  console.log(error);

  if (isRouteErrorResponse(error)) {
    return (
      <Container size="lg">
        <Stack h="100vh" align="center" justify="center">
          <Text size={74} weight={700}>
            {error.status}
          </Text>
          <Text>{error.statusText}</Text>
          <Text>{error.error?.message}</Text>
          <Button color="orange" w={130} leftIcon={<FaArrowLeft />} onClick={() => navigate('/')}>
            Go Back!
          </Button>
        </Stack>
      </Container>
    );
  }
}
