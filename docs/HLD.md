# High Level Design (HLD)

## Project Architecture

```text
User Browser
      │
      ▼
Route53
      │
      ▼
Application Load Balancer (HTTPS)
      │
      ├───────────────► Keycloak (Authentication)
      │
      ▼
React UI (Private S3 via REST Endpoint)
      │
      ▼
Spring Boot REST APIs
      │
      ▼
PostgreSQL
```

## Components

### Route53

Public DNS for enterprise portal.

Example:

portal.company.com

### Application Load Balancer

* HTTPS termination.
* Listener rules.
* Authentication routing.
* Target forwarding.

### Private S3 Bucket

Stores React production build.

Contents:

* index.html
* static/js/*
* static/css/*
* favicon.ico

### Keycloak

Identity Provider implementing OAuth2 and OpenID Connect.

Responsibilities:

* Login page.
* JWT generation.
* User authentication.
* Role management.

### Spring Boot

Backend REST APIs.

Endpoints planned:

* GET /api/cases
* GET /api/cases/{caseId}
* GET /api/profile

### PostgreSQL

Stores enterprise business data.
