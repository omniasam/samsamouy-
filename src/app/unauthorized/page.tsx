// File: src/app/unauthorized/page.tsx
export default function UnauthorizedPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white p-6">
      <h1 className="text-4xl font-bold mb-4">Unauthorized</h1>
      <p className="text-lg">You do not have permission to access this page.</p>
    </div>
  );
}
