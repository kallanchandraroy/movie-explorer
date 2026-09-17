import { AlertCircle, RefreshCw } from "lucide-react";

const ErrorMessage = ({ message, onRetry }) => {
  return (
    <div className="flex min-h-80 flex-col items-center justify-center rounded-2xl border border-red-500/20 bg-red-500/5 p-8 text-center">
      <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-red-500/10 text-red-400">
        <AlertCircle />
      </div>

      <h3 className="text-lg font-bold text-white">
        Something went wrong
      </h3>

      <p className="mt-2 max-w-md text-sm text-slate-400">
        {message || "Unable to load shows. Please try again."}
      </p>

      {onRetry && (
        <button
          onClick={onRetry}
          className="mt-5 inline-flex items-center gap-2 rounded-xl bg-white px-5 py-2.5 text-sm font-semibold text-slate-900 transition hover:bg-slate-200"
        >
          <RefreshCw size={16} />
          Try Again
        </button>
      )}
    </div>
  );
};

export default ErrorMessage;