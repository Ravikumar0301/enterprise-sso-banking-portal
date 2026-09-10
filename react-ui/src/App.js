import { useEffect, useState } from 'react';
import keycloak from './auth/keycloak';
import './App.css';

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
      .catch((err) => {
        console.error('Keycloak Initialization Failed', err);
      });
  }, []);

  const login = () => {
    keycloak.login();
  };

  const logout = () => {
    keycloak.logout({
      redirectUri: 'http://localhost:3000'
    });
  };

  return (
    <div className="App">
      <h1>Enterprise SSO Banking Portal</h1>

      {!authenticated ? (
        <div>
          <p>You are not logged in.</p>
          <button onClick={login}>Login with Keycloak</button>
        </div>
      ) : (
        <div>
          <h2>Welcome {userName}</h2>
          <p>Login Successful.</p>
          <button onClick={logout}>Logout</button>
        </div>
      )}
    </div>
  );
}

export default App;