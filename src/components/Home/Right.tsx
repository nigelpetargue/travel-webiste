import { Box, Image } from '@mantine/core';

export default function RightContainer() {
  return (
    <Box pos="relative">
      <Image
        src="/images/kindpng_4995355.png"
        fit="contain"
        width={200}
        height={200}
        pos="absolute"
        top={-50}
      />
      <Image
        src="/images/blob.svg"
        fit="contain"
        width={538}
        height={524}
        pos="absolute"
        top={10}
        left={65}
      />
      <Image
        src="images/30.png"
        fit="contain"
        width={538}
        height={524}
        pos="absolute"
        top={10}
        left={65}
      />
    </Box>
  );
}
