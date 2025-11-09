import { User } from "lucide-react";

export default function Header() {
  return (
    <div className="text-center space-y-3">
      <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 text-white shadow-lg">
        <User className="w-6 h-6" />
      </div>
      <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
        Create your account
      </h1>
      <p className="text-gray-500 dark:text-gray-400 max-w-md mx-auto">
        Join in to access your dashboard, sync across devices, and get early
        access to new features.
      </p>
    </div>
  );
}
