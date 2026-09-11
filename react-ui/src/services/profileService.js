import keycloak from "../auth/keycloak";
import API_BASE_URL from "../config/api";

export async function getProfile() {

    const response = await fetch(`${API_BASE_URL}/api/profile`, {
        headers: {
            Authorization: `Bearer ${keycloak.token}`,
            "Content-Type": "application/json"
        }
    });

    if (!response.ok) {
        throw new Error("Failed to fetch profile.");
    }

    return await response.json();
}