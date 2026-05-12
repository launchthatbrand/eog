"use client";

import { useState, useEffect } from "react";

const REPO_URL = "https://github.com/launchthatbrand/eog#deployment-procedure";

export const WelcomeDialog = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const dismissed = sessionStorage.getItem("eog-welcome-dismissed");
    if (!dismissed) setOpen(true);
  }, []);

  const handleExplore = () => {
    sessionStorage.setItem("eog-welcome-dismissed", "1");
    setOpen(false);
  };

  const handleDeployment = () => {
    sessionStorage.setItem("eog-welcome-dismissed", "1");
    setOpen(false);
    window.open(REPO_URL, "_blank", "noopener,noreferrer");
  };

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby="welcome-title"
    >
      <div className="mx-4 w-full max-w-md rounded-lg border border-border bg-white p-8 shadow-2xl">
        <div className="mb-6 flex justify-center">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="text-primary"
              aria-hidden="true"
            >
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
          </div>
        </div>

        <h2
          id="welcome-title"
          className="text-center text-xl font-bold text-text"
        >
          EOG RFQ-26-03 Demo
        </h2>
        <p className="mt-3 text-center text-sm leading-relaxed text-text-muted">
          This is a working prototype for the Executive Office of the Governor
          static website RFP. Built with Next.js static export, deployable to
          Azure Static Web Apps.
        </p>

        <div className="mt-8 flex flex-col gap-3">
          <button
            onClick={handleExplore}
            className="w-full rounded bg-primary px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-light"
          >
            Explore the Site
          </button>
          <button
            onClick={handleDeployment}
            className="w-full rounded border border-border px-5 py-3 text-sm font-semibold text-text transition-colors hover:border-primary/30 hover:bg-surface-muted"
          >
            View Deployment Procedure
          </button>
        </div>

        <p className="mt-5 text-center text-[11px] text-text-muted">
          Quest Corporation of America &middot; EOG-RFQ-26-03
        </p>
      </div>
    </div>
  );
};
