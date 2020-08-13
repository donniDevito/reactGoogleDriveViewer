import React from 'react';
import AppContent from './AppContent';
import { AuthRole } from './App';

export default {
  component: AppContent,
  title: 'App Content',
};
export const ApplicationContentGuest = (): JSX.Element => (
  <div className="flex flex-col h-screen w-full">
    <AppContent role={AuthRole.Guest} />
  </div>
);
export const ApplicationContentUser = (): JSX.Element => (
  <AppContent role={AuthRole.AuthUser} />
);
export const ApplicationContentAdmin = (): JSX.Element => (
  <AppContent role={AuthRole.AuthAdmin} />
);
