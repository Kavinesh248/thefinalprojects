import { useRouteError, Link } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  console.log(error);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-900 px-6 text-center text-white">
      <h1 className="mb-4 text-6xl font-bold text-red-500">Oops!</h1>
      <p className="mb-2 text-2xl font-semibold">Something went wrong.</p>

      {error?.status && (
        <p className="mb-1 text-lg text-gray-400">
          <strong>Status:</strong> {error.status}
        </p>
      )}

      {error?.statusText && (
        <p className="mb-1 text-lg text-gray-400">
          <strong>Message:</strong> {error.statusText}
        </p>
      )}

      {error?.data && typeof error.data === "string" && (
        <p className="text-md mb-3 text-gray-500 italic">{error.data}</p>
      )}

      <Link
        to="/dashboard"
        className="mt-4 inline-block rounded bg-purple-600 px-4 py-2 font-semibold text-white hover:bg-purple-700"
      >
        Go to Dashboard
      </Link>
    </div>
  );
};

export default ErrorPage;
