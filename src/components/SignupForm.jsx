import { useState } from "react";
import { Eye, EyeOff, Lock, Mail, User } from "lucide-react";

export default function SignupForm({ onSubmit }) {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!form.name || !form.email || !form.password) {
      setError("Please fill out all fields.");
      return;
    }

    try {
      setLoading(true);
      await onSubmit?.(form);
    } catch (err) {
      setError(err?.message || "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {error && (
        <div className="rounded-lg bg-red-50 text-red-700 px-3 py-2 text-sm border border-red-100">
          {error}
        </div>
      )}
      <div className="space-y-1.5">
        <label htmlFor="name" className="text-sm font-medium text-gray-700 dark:text-gray-300">
          Full name
        </label>
        <div className="relative">
          <User className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            value={form.name}
            onChange={handleChange}
            className="w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-white/70 dark:bg-gray-900/60 backdrop-blur px-10 py-2.5 outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Jane Doe"
          />
        </div>
      </div>

      <div className="space-y-1.5">
        <label htmlFor="email" className="text-sm font-medium text-gray-700 dark:text-gray-300">
          Email address
        </label>
        <div className="relative">
          <Mail className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            value={form.email}
            onChange={handleChange}
            className="w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-white/70 dark:bg-gray-900/60 backdrop-blur px-10 py-2.5 outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="jane@example.com"
          />
        </div>
      </div>

      <div className="space-y-1.5">
        <label htmlFor="password" className="text-sm font-medium text-gray-700 dark:text-gray-300">
          Password
        </label>
        <div className="relative">
          <Lock className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            id="password"
            name="password"
            type={showPassword ? "text" : "password"}
            autoComplete="new-password"
            value={form.password}
            onChange={handleChange}
            className="w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-white/70 dark:bg-gray-900/60 backdrop-blur px-10 py-2.5 outline-none focus:ring-2 focus:ring-indigo-500 pr-10"
            placeholder="••••••••"
          />
          <button
            type="button"
            onClick={() => setShowPassword((s) => !s)}
            className="absolute right-2.5 top-1/2 -translate-y-1/2 p-1.5 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-500"
            aria-label={showPassword ? "Hide password" : "Show password"}
          >
            {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
          </button>
        </div>
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full inline-flex items-center justify-center rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white font-medium px-4 py-2.5 transition disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {loading ? "Creating account..." : "Create account"}
      </button>

      <p className="text-xs text-center text-gray-500">
        By continuing, you agree to our Terms and Privacy Policy.
      </p>
    </form>
  );
}
