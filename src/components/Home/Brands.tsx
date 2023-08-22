import { Image } from '@mantine/core';
import { Carousel } from '@mantine/carousel';
import { useRef } from 'react';
import Autoplay from 'embla-carousel-autoplay';

export default function PartnerBrands() {
  const autoplay = useRef(Autoplay({ delay: 2000 }));
  return (
    <Carousel
      height={200}
      slideSize="33.333333%"
      slideGap="md"
      loop
      align="start"
      slidesToScroll={3}
      draggable={false}
      withControls={false}
      plugins={[autoplay.current]}
      onMouseEnter={autoplay.current.stop}
      onMouseLeave={autoplay.current.reset}
    >
      <Carousel.Slide>
        <Image
          src="/src/assets/images/brands/687474703a2f2f7069676d656e742e6769746875622e696f2f66616b652d6c6f676f732f6c6f676f732f766563746f722f677261797363616c652f63726f6674732d6163636f756e74616e74732e737667.svg"
          fit="contain"
          height={120}
          width={224}
        />
      </Carousel.Slide>
      <Carousel.Slide>
        <Image
          src="/src/assets/images/brands/687474703a2f2f7069676d656e742e6769746875622e696f2f66616b652d6c6f676f732f6c6f676f732f766563746f722f677261797363616c652f6175746f2d73706565642e737667.svg"
          fit="contain"
          height={120}
          width={224}
        />
      </Carousel.Slide>
      <Carousel.Slide>
        <Image
          src="/src/assets/images/brands/687474703a2f2f7069676d656e742e6769746875622e696f2f66616b652d6c6f676f732f6c6f676f732f766563746f722f677261797363616c652f666173742d62616e616e612e737667.svg"
          fit="contain"
          height={120}
          width={224}
        />
      </Carousel.Slide>
      <Carousel.Slide>
        <Image
          src="/src/assets/images/brands/687474703a2f2f7069676d656e742e6769746875622e696f2f66616b652d6c6f676f732f6c6f676f732f766563746f722f677261797363616c652f677265656e732d666f6f642d737570706c696572732e737667.svg"
          fit="contain"
          height={120}
          width={224}
        />
      </Carousel.Slide>
      <Carousel.Slide>
        <Image
          src="/src/assets/images/brands/687474703a2f2f7069676d656e742e6769746875622e696f2f66616b652d6c6f676f732f6c6f676f732f766563746f722f677261797363616c652f6265617574792d626f782e737667.svg"
          fit="contain"
          height={120}
          width={224}
        />
      </Carousel.Slide>
      <Carousel.Slide>
        <Image
          src="/src/assets/images/brands/687474703a2f2f7069676d656e742e6769746875622e696f2f66616b652d6c6f676f732f6c6f676f732f766563746f722f677261797363616c652f63686573686972652d636f756e74792d68796769656e652d73657276696365732e737.svg"
          fit="contain"
          height={120}
          width={224}
        />
      </Carousel.Slide>
    </Carousel>
  );
}
