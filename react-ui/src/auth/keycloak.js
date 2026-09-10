import Keycloak from 'keycloak-js';

const keycloak = new Keycloak({
  url: 'http://localhost:18080',
  realm: 'banking-portal',
  clientId: 'react-banking-ui'
});

export default keycloak;