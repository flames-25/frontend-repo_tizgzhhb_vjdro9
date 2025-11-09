import { Github, Mail } from "lucide-react";

export default function SocialAuth({ onProvider }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
      <button
        type="button"
        onClick={() => onProvider?.("google")}
        className="inline-flex items-center justify-center gap-2 rounded-lg border border-gray-200 dark:border-gray-700 px-4 py-2.5 text-sm font-medium hover:bg-gray-50 dark:hover:bg-gray-800 transition"
      >
        <Mail className="w-4 h-4" />
        Continue with Google
      </button>
      <button
        type="button"
        onClick={() => onProvider?.("github")}
        className="inline-flex items-center justify-center gap-2 rounded-lg border border-gray-200 dark:border-gray-700 px-4 py-2.5 text-sm font-medium hover:bg-gray-50 dark:hover:bg-gray-800 transition"
      >
        <Github className="w-4 h-4" />
        Continue with GitHub
      </button>
    </div>
  );
}
