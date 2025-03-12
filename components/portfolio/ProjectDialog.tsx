import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ProjectForm } from "./ProjectForm";

interface Project {
  id?: string;
  title: string;
  description: string;
  tags?: string[];
  imageUrl?: string;
}

interface ProjectDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  project?: Project;
  onSubmit: (data: Project) => void;
  isSubmitting?: boolean;
}

export function ProjectDialog({
  open,
  onOpenChange,
  project,
  onSubmit,
  isSubmitting = false,
}: ProjectDialogProps) {
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
