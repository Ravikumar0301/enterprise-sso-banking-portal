# AWS S3 REST Endpoint

## What is an S3 REST Endpoint?

Amazon S3 provides two endpoints.

### Website Endpoint

Public website hosting.

Example:

http://bucket.s3-website-ap-south-1.amazonaws.com

### REST Endpoint

Private object access.

Example:

https://bucket.s3.ap-south-1.amazonaws.com

## Banking Usage

Private buckets use REST endpoints instead of Website endpoints.

Benefits:

* IAM Authorization.
* Private Bucket.
* Enterprise Networking.

## Objects Stored

* index.html
* static/js/*
* static/css/*
* favicon.ico

## Enterprise Flow

```text
Route53
   │
ALB
   │
S3 REST Endpoint
   │
Private Bucket
```

## Difference

| Website Endpoint       | REST Endpoint  |
| ---------------------- | -------------- |
| Public Bucket          | Private Bucket |
| Static Website Hosting | Object Storage |
| Internet Access        | IAM/VPC Access |
