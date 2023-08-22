import {
  Header as MantineHeader,
  Flex,
  Image,
  Group,
  Text,
  ActionIcon,
  Divider,
} from '@mantine/core';
import { NavLink, Navigate } from 'react-router-dom';
import { navigations } from './navigations';
import { useMediaQuery, useDisclosure } from '@mantine/hooks';
import { IoMenu } from 'react-icons/io5';
import { IoIosCall } from 'react-icons/io';
import { MdMail } from 'react-icons/md';
import Drawer from './Drawer';
import './navigations.css';
import { useNavigate } from 'react-router-dom';

export default function Header() {
  const media = useMediaQuery('(min-width: 975px)');
  const [opened, { open, close }] = useDisclosure(false);
  const navigate = useNavigate();

  return (
    <MantineHeader
      height={70}
      px={media ? 215 : 30}
      withBorder={false}
      sx={(theme) => ({ boxShadow: theme.shadows.xl })}
    >
      <Flex h="100%" gap="lg" direction="row" justify="center" align="center">
        <Group position="apart" w="100%">
          <Image
            src="/src/assets/images/logo.png"
            alt="brand-logo"
            fit="contain"
            height={80}
            width={100}
            style={{ cursor: 'pointer' }}
            onClick={() => navigate('/')}
          />
          {media && (
            <Group w={400} spacing={60} position="right">
              {navigations.map((nav, index) => (
                <NavLink key={index} to={nav.href}>
                  {nav.label}
                </NavLink>
              ))}
            </Group>
          )}
          {media ? (
            <Group position="right">
              <Group>
                <IoIosCall size="1.3em" color="orange" />
                <Text size="xs">(02)-123-4449</Text>
              </Group>
              <Divider orientation="vertical" size="sm" color="orange" />
              <Group>
                <MdMail size="1.3em" color="orange" />
                <Text size="xs">pacifico@sample.com</Text>
              </Group>
            </Group>
          ) : (
            <ActionIcon onClick={open}>
              <IoMenu size={24} />
            </ActionIcon>
          )}
        </Group>
      </Flex>
      <Drawer opened={opened} close={close} />
    </MantineHeader>
  );
}
