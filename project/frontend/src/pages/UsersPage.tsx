import { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import { api } from "../api/api";

const UsersPage = () => {
  const [users, setUsers] = useState<any[]>([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await api.get("/users");
        setUsers(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchUsers();
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Users</h1>

      <Link to="/register">
        <button style={{ marginBottom: "20px" }}>
          Go to Register
        </button>
      </Link>

      <div style={{ display: "grid", gap: "15px" }}>
        {users.map((user) => (
          <div
            key={user.id}
            style={{
              border: "1px solid #ccc",
              borderRadius: "10px",
              padding: "15px",
              display: "flex",
              flexDirection: "column",
              gap: "5px",
            }}
          >
            <div style={{ fontWeight: "bold" }}>
              {user.display_name || user.username}
            </div>

            <div style={{ color: "gray" }}>@{user.username}</div>

            <div>💰 Balance: ${Number(user.balance).toLocaleString()}</div>

            <div>
              Status: {user.is_online ? "🟢 Online" : "⚫ Offline"}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UsersPage;