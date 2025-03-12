import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Loader2, Upload } from "lucide-react";

const projectSchema = z.object({
  title: z.string().min(1, "Title is required"),
  description: z.string().min(1, "Description is required"),
  tags: z.string().optional(),
  imageUrl: z.string().optional(),
});

type ProjectFormValues = z.infer<typeof projectSchema>;

interface ProjectFormProps {
  defaultValues?: Partial<ProjectFormValues>;
  onSubmit: (data: ProjectFormValues) => void;
  isSubmitting?: boolean;
}

export function ProjectForm({
  defaultValues = {
    title: "",
    description: "",
    tags: "",
    imageUrl: "",
  },
  onSubmit,
  isSubmitting = false,
}: ProjectFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ProjectFormValues>({
    resolver: zodResolver(projectSchema),
    defaultValues,
  });

  const [imagePreview, setImagePreview] = React.useState<string | null>(
    defaultValues.imageUrl || null
  );

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="space-y-2">
        <label htmlFor="title" className="text-sm font-medium">
          Project Title
        </label>
        <Input
          id="title"
          placeholder="Enter project title"
          {...register("title")}
        />
        {errors.title && (
          <p className="text-sm text-red-500">{errors.title.message}</p>
        )}
      </div>

      <div className="space-y-2">
        <label htmlFor="description" className="text-sm font-medium">
          Project Description
        </label>
        <textarea
          id="description"
          rows={5}
          className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
          placeholder="Describe your project"
          {...register("description")}
        ></textarea>
        {errors.description && (
          <p className="text-sm text-red-500">{errors.description.message}</p>
        )}
      </div>

      <div className="space-y-2">
        <label htmlFor="tags" className="text-sm font-medium">
          Tags (comma separated)
        </label>
        <Input
          id="tags"
          placeholder="e.g. web design, branding, UI/UX"
          {...register("tags")}
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="image" className="text-sm font-medium">
          Project Image
        </label>
        <div className="flex items-center gap-4">
          {imagePreview ? (
            <div className="relative h-24 w-24 overflow-hidden rounded-md">
              <img
                src={imagePreview}
                alt="Preview"
                className="h-full w-full object-cover"
              />
            </div>
          ) : (
            <div className="flex h-24 w-24 items-center justify-center rounded-md border border-dashed border-gray-300 bg-gray-50">
              <span className="text-sm text-gray-500">No image</span>
            </div>
          )}
          <div className="flex-1">
            <label
              htmlFor="image-upload"
              className="inline-flex cursor-pointer items-center gap-1 rounded-md border border-input bg-background px-3 py-2 text-sm font-medium ring-offset-background transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            >
              <Upload className="h-4 w-4" />
              Upload Image
            </label>
            <input
              id="image-upload"
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleImageChange}
            />
          </div>
        </div>
      </div>

      <div className="flex justify-end gap-2">
        <Button type="button" variant="outline">
          Cancel
        </Button>
        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
          {defaultValues.title ? "Update Project" : "Add Project"}
        </Button>
      </div>
    </form>
  );
}
