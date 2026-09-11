# Lesson 03 — React Routing

## Goal

Implement BrowserRouter.

## Routes

| URL            | Page         |
| -------------- | ------------ |
| /dashboard     | Dashboard    |
| /cases         | Cases        |
| /cases/:caseId | Case Details |
| /profile       | Profile      |

## Components

* Sidebar
* AppRoutes

## React Router Flow

```text
Sidebar Click
      │
BrowserRouter
      │
Route Match
      │
Page Render
```

## BrowserRouter

Chosen because enterprise applications use clean URLs.

S3 deployment requires route fallback to index.html.
