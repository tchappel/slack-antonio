"use client";

import { Toolbar } from "./toolbar";

interface WorkspaceIDLayoutProps {
  children: React.ReactNode;
}

const WorkspaceIdLayout = ({ children }: WorkspaceIDLayoutProps) => {
  return (
    <div className="h-full">
      <Toolbar />
      {children}
    </div>
  );
};

export default WorkspaceIdLayout;
