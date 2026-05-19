import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { api } from "../api/api";

const schema = z.object({
  email: z.string().email("Invalid email"),
  username: z.string().min(3, "Min 3 characters"),
  password: z.string().min(6, "Min 6 characters"),
});

type FormData = z.infer<typeof schema>;

const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    try {
      const res = await api.post(
        "/auth/register",
        data
      );

      console.log("Registered:", res.data);
      alert("User created!");
    } catch (err: any) {
      console.error(err.response?.data);
      alert(err.response?.data?.message);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Register</h1>

      <form
        onSubmit={handleSubmit(onSubmit)}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          width: "250px",
        }}
      >
        <input placeholder="email" {...register("email")} />
        <p style={{ color: "red" }}>{errors.email?.message}</p>

        <input placeholder="username" {...register("username")} />
        <p style={{ color: "red" }}>{errors.username?.message}</p>

        <input
          placeholder="password"
          type="password"
          {...register("password")}
        />
        <p style={{ color: "red" }}>{errors.password?.message}</p>

        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegisterPage;