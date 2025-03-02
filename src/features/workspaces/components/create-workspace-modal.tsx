import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { useCreateWorkspaceModal } from "@/features/workspaces/store/use-create-workspace-modal";
import { useRouter } from "next/navigation";
import { useRef } from "react";
import { toast } from "sonner";
import { useCreateWorkspace } from "../api/use-create-workspace";

export const CreateWorkspaceModal = () => {
  const [open, setOpen] = useCreateWorkspaceModal();
  const { mutate, isPending } = useCreateWorkspace();
  const router = useRouter();
  const formRef = useRef<HTMLFormElement>(null);

  const handleClose = () => {
    setOpen(false);
    if (formRef.current) formRef.current.reset();
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name") as string;
    if (!name) return;
    mutate(
      {
        name: "Workspace1",
      },
      {
        onSuccess: (workspaceId) => {
          toast.success("Workspace created");
          router.push(`/workspace/${workspaceId}`);
          handleClose();
        },
      }
    );
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add a workspace</DialogTitle>
        </DialogHeader>
        <form className="space-y-4" onSubmit={handleSubmit} ref={formRef}>
          <Input
            disabled={isPending}
            type="text"
            name="name"
            placeholder="Workspace name e.g 'Work', 'Personal', 'Home'"
            required
            autoFocus
            minLength={3}
          />
          <div className="flex justify-end">
            <Button className="" type="submit" disabled={isPending}>
              Create
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};
