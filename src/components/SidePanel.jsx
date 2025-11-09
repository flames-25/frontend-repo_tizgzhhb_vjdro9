export default function SidePanel() {
  return (
    <div className="hidden lg:block bg-gradient-to-b from-indigo-500 via-purple-600 to-fuchsia-600 text-white rounded-2xl p-8 shadow-2xl">
      <div className="space-y-6">
        <div>
          <h3 className="text-2xl font-semibold">Why join?</h3>
          <p className="mt-2 text-white/90">
            Get access to personalized insights, faster support, and exclusive beta features.
          </p>
        </div>
        <ul className="space-y-3 text-white/95">
          <li className="flex items-start gap-2">
            <span className="mt-1.5 inline-block h-2 w-2 rounded-full bg-white" />
            Save your preferences across devices
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-1.5 inline-block h-2 w-2 rounded-full bg-white" />
            Unlock pro-level productivity tools
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-1.5 inline-block h-2 w-2 rounded-full bg-white" />
            Get early access and priority support
          </li>
        </ul>
      </div>
    </div>
  );
}
