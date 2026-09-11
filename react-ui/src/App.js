import { useEffect, useState } from 'react';
import keycloak from './auth/keycloak';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import './App.css';
import AppRoutes from "./routes/AppRoutes";

function App() {
  const [authenticated, setAuthenticated] = useState(false);
  const [userName, setUserName] = useState('');

  useEffect(() => {
    keycloak
      .init({
        onLoad: 'login-required',
        pkceMethod: 'S256'
      })
      .then((auth) => {
        setAuthenticated(auth);

        if (auth) {
          setUserName(keycloak.tokenParsed.preferred_username);
        }
      })
      .catch((err) => console.log(err));
  }, []);

  const logout = () => {
    keycloak.logout({
      redirectUri: 'http://localhost:3000'
    });
  };

  if (!authenticated) {
    return <p>Redirecting to Login...</p>;
  }

  return (
    <div className="app-container">
      <Header userName={userName} />

      <div className="content-container">
        <Sidebar logout={logout} />

        <main className="dashboard">
          <AppRoutes />
        </main>
      </div>
    </div>
  );
}

export default App;