import { useEffect, useState } from "react";
import { getProfile } from "../services/profileService";

function ProfilePage() {

    const [profile, setProfile] = useState(null);

    useEffect(() => {
        loadProfile();
    }, []);

    async function loadProfile() {
        const data = await getProfile();
        setProfile(data);
    }

    if (!profile) {
        return <h2>Loading profile...</h2>;
    }

    return (
        <div className="dashboard">

            <div className="card">

                <h2>My Profile</h2>

                <div className="case-card">

                    <p><strong>Username:</strong> {profile.username}</p>

                    <p><strong>Email:</strong> {profile.email}</p>

                    <p><strong>First Name:</strong> {profile.firstName}</p>

                    <p><strong>Last Name:</strong> {profile.lastName}</p>

                    <p><strong>Roles:</strong> {profile.roles?.join(", ")}</p>

                </div>

            </div>

        </div>
    );
}

export default ProfilePage;