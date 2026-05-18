'use client';

import React, { Component, ErrorInfo, ReactNode } from 'react';
import { AlertOctagon, RefreshCw } from 'lucide-react';

interface Props {
  children?: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("ErrorBoundary caught an error:", error, errorInfo);
  }

  private handleRetry = () => {
    this.setState({ hasError: false, error: null });
  };

  public render() {
    if (this.state.hasError) {
      const isDev = process.env.NODE_ENV === 'development';

      return (
        <div className="min-h-[400px] flex items-center justify-center p-8 bg-[#1C1C1E] border border-white/5 rounded-3xl m-4">
          <div className="max-w-md w-full text-center space-y-6">
            <div className="inline-flex w-16 h-16 bg-red-500/10 rounded-2xl items-center justify-center text-red-500 border border-red-500/20 shadow-lg shadow-red-500/5">
              <AlertOctagon size={32} />
            </div>

            <div className="space-y-2">
              <h2 className="text-2xl font-outfit font-bold text-white tracking-tight">Something went wrong</h2>
              <p className="text-zinc-400 text-sm leading-relaxed">
                An unexpected rendering exception was intercepted in this dashboard section.
              </p>
            </div>

            {isDev && this.state.error && (
              <div className="bg-[#0B0B0E] p-4 rounded-xl border border-white/5 text-left font-mono text-xs text-red-400 max-h-40 overflow-y-auto whitespace-pre-wrap select-all">
                {this.state.error.toString()}
              </div>
            )}

            <button
              onClick={this.handleRetry}
              className="inline-flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white px-6 py-3 rounded-xl font-medium transition-all shadow-lg shadow-indigo-500/20 cursor-pointer active:scale-98"
            >
              <RefreshCw size={16} />
              Retry Rendering
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
