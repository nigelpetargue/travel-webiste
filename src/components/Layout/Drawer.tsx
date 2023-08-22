import { Drawer as MantineDrawer } from '@mantine/core';

interface DrawerProps {
  opened: boolean;
  close: () => void;
}

export default function Drawer({ opened, close }: DrawerProps) {
  return (
    <MantineDrawer opened={opened} onClose={close} size="xs" position="right">
      Drawer
    </MantineDrawer>
  );
}
