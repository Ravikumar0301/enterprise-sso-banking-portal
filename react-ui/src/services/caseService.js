// src/services/caseService.js

import keycloak from "../auth/keycloak";
import API_BASE_URL from "../config/api";

/**
 * Common headers for authenticated requests.
 */
function getAuthHeaders() {
  return {
    Authorization: `Bearer ${keycloak.token}`,
    "Content-Type": "application/json",
  };
}


/**
 * Get all banking cases.
 */
export async function getAllCases() {
  const response = await fetch(`${API_BASE_URL}/api/cases`, {
    headers: getAuthHeaders(),
  });

  if (!response.ok) {
    throw new Error("Failed to fetch cases");
  }

  return await response.json();
}

/**
 * Get a single banking case.
 */
export async function getCase(caseId) {
  const response = await fetch(`${API_BASE_URL}/api/cases/${caseId}`, {
    headers: getAuthHeaders(),
  });

  if (!response.ok) {
    throw new Error("Failed to fetch case");
  }

  return await response.json();
}
