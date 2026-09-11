# Keycloak Setup

## Docker Image

Keycloak Version

26.3.5

## Docker Run Command

```bash
docker run -d \
  --name keycloak \
  --network identity-network \
  -p 18080:8080 \
  -e KC_HTTP_ENABLED=true \
  -e KC_BOOTSTRAP_ADMIN_USERNAME=admin \
  -e KC_BOOTSTRAP_ADMIN_PASSWORD=admin123 \
  quay.io/keycloak/keycloak:26.3.5 \
  start-dev
```

## Login

URL

http://localhost:18080

Username

admin

Password

admin123

## Realm

banking-portal

## Client

react-banking-ui

### Client Settings

Client Type

Public

Root URL

http://localhost:3000

Home URL

http://localhost:3000

Valid Redirect URI

http://localhost:3000/*

Web Origin

http://localhost:3000

## Authentication Flow

```text
React
  │
  ▼
Keycloak Login
  │
  ▼
JWT Token
  │
  ▼
React Protected Pages
```
