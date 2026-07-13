import React from "react";

const NotFound = () => {
  return (
    <main className="px-standard w-full max-w-content mx-auto space-y-block min-h-[calc(100vh-25rem)] flex flex-col justify-center">
        <h1 className="text-center text-4xl font-bold text-black-dark">
            404 - Page Not Found
        </h1>
        <p className="text-center text-lg text-black-mid">
            The page you are looking for might have been removed or is temporarily
            unavailable.
        </p>
    </main>
  );
};

export default NotFound;
