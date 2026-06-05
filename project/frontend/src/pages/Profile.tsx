import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../api/api";

type User = {
  userId: number;
  email: string;
  username?: string;
  avatarUrl?: string | null;
};

const DEFAULT_AVATAR = "https://www.gravatar.com/avatar/?d=mp";

export default function Profile() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchMe = async () => {
      try {
        const res = await api.get("/auth/me");
        setUser(res.data);
      } catch (err) {
        navigate("/login");
      } finally {
        setLoading(false);
      }
    };

    fetchMe();
  }, [navigate]);

  if (loading) {
    return <div>Loading profile...</div>;
  }

  if (!user) {
    return <div>Not authorized</div>;
  }

  const avatar = user.avatarUrl || DEFAULT_AVATAR;

  return (
    <div style={{ padding: "20px", maxWidth: "400px" }}>
      <h1>Profile</h1>

      <div style={{ marginBottom: "20px" }}>
        <img
          src={avatar}
          alt="avatar"
          style={{
            width: 100,
            height: 100,
            borderRadius: "50%",
            objectFit: "cover",
          }}
        />
      </div>

      <p>
        <strong>User ID:</strong> {user.userId}
      </p>

      <p>
        <strong>Email:</strong> {user.email}
      </p>

      {user.username && (
        <p>
          <strong>Username:</strong> {user.username}
        </p>
      )}
    </div>
  );
}