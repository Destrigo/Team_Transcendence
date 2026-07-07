import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../api/api";

type User = {
  id: string;
  email: string;
  username: string;
  display_name?: string | null;
  avatar_url?: string | null;
  balance: string | number;
  is_online: boolean;
  last_seen?: string | null;
};

const DEFAULT_AVATAR = "https://www.gravatar.com/avatar/?d=mp";

export default function Profile() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [depositAmount, setDepositAmount] = useState("");
  const [depositLoading, setDepositLoading] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchMe = async () => {
      try {
        const res = await api.get("/auth/me");
        setUser(res.data);
      } catch {
        navigate("/login");
      } finally {
        setLoading(false);
      }
    };

    fetchMe();
  }, [navigate]);

  if (loading) return <div>Loading profile...</div>;
  if (!user) return <div>Not authorized</div>;

  const avatar = user.avatar_url || DEFAULT_AVATAR;

  const balance = Number(user.balance ?? 0);

  const handleDeposit = async () => {
  const amount = Number(depositAmount);

  if (!amount || amount <= 0) {
    alert("Enter valid amount");
    return;
  }

  try {
    setDepositLoading(true);

    const res = await api.post("/users/deposit", {
      amount,
    });

    setUser(res.data);

    setDepositAmount("");
    } catch (err) {
    alert("Deposit failed");
    } finally {
    setDepositLoading(false);
  }
  };

  return (
    <div style={{ padding: 20, maxWidth: 420 }}>
      <h1>Profile</h1>

      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        <img
          src={avatar}
          alt="avatar"
          style={{
            width: 80,
            height: 80,
            borderRadius: "50%",
            objectFit: "cover",
          }}
        />

        <div>
          <h2 style={{ margin: 0 }}>
            {user.display_name || user.username}
          </h2>

          <div style={{ fontSize: 12, color: user.is_online ? "green" : "gray" }}>
            {user.is_online ? "Online" : "Offline"}
          </div>
        </div>
      </div>

      <hr />

      <p>
        <strong>Email:</strong> {user.email}
      </p>

      <p>
        <strong>Username:</strong> {user.username}
      </p>

      <p>
        <strong>Balance:</strong> {balance.toFixed(2)}
      </p>

      <p>
        <strong>Status:</strong>{" "}
        {user.is_online ? "🟢 Online" : "⚪ Offline"}
      </p>

      {user.last_seen && (
        <p>
          <strong>Last seen:</strong>{" "}
          {new Date(user.last_seen).toLocaleString()}
        </p>
      )}
      <div style={{ marginTop: 12 }}>
        <input
          type="number"
          placeholder="Enter amount"
          value={depositAmount}
          onChange={(e) => setDepositAmount(e.target.value)}
          style={{
            padding: "6px",
            marginRight: "8px",
            width: "150px",
          }}
        />

        <button
          onClick={handleDeposit}
          disabled={depositLoading}
          style={{
            padding: "6px 12px",
            cursor: depositLoading ? "not-allowed" : "pointer",
          }}
        >
          {depositLoading ? "Adding..." : "Deposit"}
        </button>
      </div>
    </div>
  );
}