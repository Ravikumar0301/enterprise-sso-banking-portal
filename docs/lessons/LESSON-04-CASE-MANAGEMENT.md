# Lesson 04 — Enterprise Case Management

## Goal

Build enterprise banking case management UI.

## Features

* Search Case ID.
* Dynamic Routing.
* Service Layer.
* Loading State.
* Case Not Found.

## Folder Added

```text
src/services/caseService.js
```

## Architecture

```text
Cases Page
      │
Click Case
      │
Route /cases/CASE10001
      │
useParams()
      │
caseService.getCase(caseId)
      │
React UI
```

## Mock Service

Functions implemented:

* getAllCases()
* getCase(caseId)

Purpose:

Frontend development before backend APIs are ready.

## Pages

### CasesPage

Responsibilities:

* Load all cases.
* Search.
* Display table.
* Navigate using Link.

### CaseDetailsPage

Responsibilities:

* Read URL parameter.
* Fetch case.
* Display customer details.

## Verification Checklist

* /cases loads table.
* Search filters table.
* Clicking CASE10001 opens details.
* Invalid Case ID shows "Case Not Found".
* Direct URL navigation works.

## Enterprise Mapping

| React Feature | Banking Equivalent            |
| ------------- | ----------------------------- |
| Cases Table   | Operations Queue              |
| Case Details  | Customer Investigation Screen |
| Service Layer | API Client Layer              |
| useParams     | Dynamic Resource Identifier   |
