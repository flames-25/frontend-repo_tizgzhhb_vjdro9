import { useState } from "react";
import Header from "./components/Header";
import SignupForm from "./components/SignupForm";
import SocialAuth from "./components/SocialAuth";
import SidePanel from "./components/SidePanel";

function App() {
  const [message, setMessage] = useState("");

  const handleSignup = async ({ name, email, password }) => {
    // In this template, we only simulate a request.
    // Backend endpoints can be connected later via VITE_BACKEND_URL.
    await new Promise((r) => setTimeout(r, 800));
    setMessage(`Welcome, ${name}! Your account has been created.`);
  };

  const handleProvider = (provider) => {
    setMessage(`Redirecting to ${provider}...`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-slate-50 to-indigo-50 dark:from-gray-950 dark:via-gray-950 dark:to-indigo-950">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:py-16">
        <div className="grid lg:grid-cols-5 gap-8 items-stretch">
          <div className="lg:col-span-3">
            <div className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-white/70 dark:bg-gray-900/60 backdrop-blur shadow-sm p-6 sm:p-8 space-y-8">
              <Header />

              <SocialAuth onProvider={handleProvider} />

              <div className="relative">
                <div className="flex items-center gap-4 my-2">
                  <div className="h-px flex-1 bg-gray-200 dark:bg-gray-800" />
                  <span className="text-xs uppercase tracking-wider text-gray-500">or</span>
                  <div className="h-px flex-1 bg-gray-200 dark:bg-gray-800" />
                </div>
              </div>

              <SignupForm onSubmit={handleSignup} />

              {message && (
                <div className="rounded-lg bg-emerald-50 text-emerald-700 px-3 py-2 text-sm border border-emerald-100">
                  {message}
                </div>
              )}

              <p className="text-sm text-center text-gray-600 dark:text-gray-400">
                Already have an account? <a className="text-indigo-600 hover:underline" href="#">Sign in</a>
              </p>
            </div>
          </div>

          <div className="lg:col-span-2">
            <SidePanel />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
