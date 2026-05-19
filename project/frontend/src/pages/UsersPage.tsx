import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const UsersPage = () => {
  const [users, setUsers] = useState<any[]>([]);

  useEffect(() => {
    axios
      .get("http://localhost:4000/users")
      .then((res) => setUsers(res.data))
      .catch((err) => console.error(err));
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