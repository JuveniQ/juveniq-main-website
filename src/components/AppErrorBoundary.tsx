import { Component, type ErrorInfo, type ReactNode } from "react";

type AppErrorBoundaryProps = {
  children: ReactNode;
};

type AppErrorBoundaryState = {
  hasError: boolean;
};

class AppErrorBoundary extends Component<AppErrorBoundaryProps, AppErrorBoundaryState> {
  public state: AppErrorBoundaryState = {
    hasError: false,
  };

  public static getDerivedStateFromError(): AppErrorBoundaryState {
    return { hasError: true };
  }

  public componentDidCatch(_: Error, __: ErrorInfo) {
    // Intentionally silent in production to avoid extra console noise.
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="site-shell flex min-h-screen items-center justify-center px-6">
          <div className="max-w-md rounded-2xl border border-white/20 bg-slate-900/80 p-6 text-center shadow-[0_20px_45px_-30px_rgba(2,5,186,0.55)]">
            <h1 className="text-2xl font-semibold text-slate-100">Something went wrong</h1>
            <p className="mt-2 text-sm text-slate-300">
              Please refresh the page. If the issue persists, contact JuveniQ support.
            </p>
            <button
              type="button"
              onClick={() => window.location.reload()}
              className="ring-cyan ring-led mt-4 rounded-lg border border-cyan-300/40 bg-cyan-300/15 px-4 py-2 text-sm font-semibold text-cyan-100 transition hover:bg-cyan-300/25"
            >
              Reload
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default AppErrorBoundary;
