import { AppShell } from '@mantine/core';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';

export default function Layout() {
  return (
    <AppShell header={<Header />} footer={<Footer />}>
      <Outlet />
    </AppShell>
  );
}
