# Lesson 02 — Keycloak Integration

## Install Library

```bash
npm install keycloak-js
```

## keycloak.js

Create:

src/auth/keycloak.js

Responsibilities:

* Keycloak configuration.
* Login initialization.
* Logout.
* Token management.

## Login Flow

```text
Browser
   │
React
   │
Keycloak
   │
Login Screen
   │
JWT
   │
React Dashboard
```

## Verification

Opening localhost:3000 redirects automatically to Keycloak login.
