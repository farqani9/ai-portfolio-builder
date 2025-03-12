import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ProjectForm } from "./ProjectForm";

// Define the project type to match our portfolio page
type ProjectType = {
  id?: string;
  title: string;
  description: string;
  tags?: string;
  imageUrl?: string;
};

interface CustomProjectDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  project?: ProjectType;
  onSubmit: (data: ProjectType) => void;
  isSubmitting?: boolean;
}

export function CustomProjectDialog({
  open,
  onOpenChange,
  project,
  onSubmit,
  isSubmitting = false,
}: CustomProjectDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>
            {project?.id ? "Edit Project" : "Add New Project"}
          </DialogTitle>
        </DialogHeader>
        <ProjectForm
          defaultValues={project}
          onSubmit={onSubmit}
          isSubmitting={isSubmitting}
        />
      </DialogContent>
    </Dialog>
  );
}
