# Deployment Architecture (Section-001)

## Enterprise Deployment Pattern

```text
Browser
   │
   ▼
Route53
   │
   ▼
Application Load Balancer
   │
   ▼
S3 REST Endpoint
   │
   ▼
Private S3 Bucket
```

## AWS Services Used

| Service     | Purpose                |
| ----------- | ---------------------- |
| Route53     | DNS                    |
| ALB         | HTTPS entry point      |
| Private S3  | React static artifacts |
| Keycloak    | Authentication         |
| Spring Boot | REST APIs              |

## Why Private S3?

* No public access.
* IAM controlled.
* Enterprise banking security.

## React Build Artifacts

```text
build/
├── index.html
├── asset-manifest.json
├── favicon.ico
└── static/
    ├── css/
    └── js/
```

Upload these artifacts into the private bucket.

## Browser Router Consideration

Production routing must always return `index.html` for React routes.

Example routes:

* /dashboard
* /cases
* /cases/CASE10001
* /profile
