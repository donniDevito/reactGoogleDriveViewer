import React from 'react';
import AppHeader from '../../components/AppHeaderComponent/AppHeaderComponent';
import AppContent from './AppContent';

export enum AuthRole {
  Guest,
  AuthUser,
  AuthAdmin,
}
function App(): JSX.Element {
  const authRole = AuthRole.Guest;
  return (
    <div className="flex flex-col h-screen w-full">
      <AppHeader />
      <AppContent role={AuthRole.Guest} />
    </div>
    // <Switch>
    //  <Route path="/" exact component={Home} />
    // <AuthenticatedRoute path="/profile" component={Profile} />
    // <AuthenticatedRoute path="/people" component={People} />
    //</Switch>
  );
}

export default App;
