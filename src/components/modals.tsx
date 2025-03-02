"use client";

import { CreateWorkspaceModal } from "@/features/workspaces/components/create-workspace-modal";
import { useEffect, useState } from "react";

export const Modals = () => {
  // Prevent hydration error, ensure all modals will be rendered on client side rendering
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, [mounted, setMounted]);

  if (!mounted) return null;

  return <CreateWorkspaceModal />;
};
