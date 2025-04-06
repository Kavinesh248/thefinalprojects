import { useRouteError, Link } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-900 text-white px-6 text-center">
      <h1 className="text-6xl font-bold text-red-500 mb-4">Oops!</h1>
      <p className="text-2xl font-semibold mb-2">Something went wrong.</p>

      {error?.status && (
        <p className="text-lg text-gray-400 mb-1">
          <strong>Status:</strong> {error.status}
        </p>
      )}

      {error?.statusText && (
        <p className="text-lg text-gray-400 mb-1">
          <strong>Message:</strong> {error.statusText}
        </p>
      )}

      {error?.data && typeof error.data === "string" && (
        <p className="text-md text-gray-500 italic mb-3">{error.data}</p>
      )}

      <Link
        to="/dashboard"
        className="mt-4 inline-block bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded"
      >
        Go to Dashboard
      </Link>
    </div>
  );
};

export default ErrorPage;
