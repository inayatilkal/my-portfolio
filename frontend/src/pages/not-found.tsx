import { AlertCircle } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-950 px-4">
      <div className="max-w-md w-full bg-slate-900 border border-slate-800 rounded-2xl p-8 text-center shadow-lg">
        <div className="flex justify-center mb-4">
          <AlertCircle className="w-12 h-12 text-red-500" />
        </div>

        <h1 className="text-3xl font-bold text-white mb-3">
          404 Page Not Found
        </h1>

        <p className="text-slate-400">
          The page you're looking for doesn't exist.
        </p>
      </div>
    </div>
  );
}