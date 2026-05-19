import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../api/api";

type User = {
  userId: number;
  email: string;
};

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
        // если не авторизован → на login
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

  return (
    <div style={{ padding: "20px" }}>
      <h1>Profile</h1>

      <p>
        <strong>User ID:</strong> {user.userId}
      </p>

      <p>
        <strong>Email:</strong> {user.email}
      </p>
    </div>
  );
}