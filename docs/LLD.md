# Low Level Design (LLD)

## Repository Structure

```text
enterprise-sso-banking-portal/
│
├── react-ui/
│
├── springboot-api/
│
├── infrastructure/
│   ├── docker/
│   ├── keycloak/
│   └── aws/
│
└── docs/
```

## React Folder Structure

```text
src/
├── auth/
│   └── keycloak.js
│
├── components/
│   └── Sidebar.js
│
├── pages/
│   ├── DashboardPage.js
│   ├── CasesPage.js
│   ├── CaseDetailsPage.js
│   └── ProfilePage.js
│
├── routes/
│   └── AppRoutes.js
│
├── services/
│   └── caseService.js
│
├── App.js
├── App.css
└── index.js
```

## Design Principles

### Pages

Responsible only for rendering UI.

### Services

Responsible for API communication.

### Components

Reusable UI components.

### Routes

Application navigation.
