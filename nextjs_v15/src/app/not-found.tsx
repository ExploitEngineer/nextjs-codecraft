export default function NotFound() {
  return (
    <div className="w-full min-h-screen bg-zinc-800 flex items-center justify-center font-mono flex-col gap-6">
      <h1 className="text-red-600 text-shadow-red-800 text-shadow-lg font-semibold text-4xl">
        404 | Page Not Found
      </h1>
      <p className="text-white font-medium text-sm">
        Could not find requested resource
      </p>
    </div>
  );
}
