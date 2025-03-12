import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Pencil, Trash2 } from "lucide-react";

interface ProjectCardProps {
  id: string;
  title: string;
  description: string;
  imageUrl?: string;
  tags?: string;
  onEdit?: (id: string) => void;
  onDelete?: (id: string) => void;
}

export function ProjectCard({
  id,
  title,
  description,
  imageUrl,
  tags = "",
  onEdit,
  onDelete,
}: ProjectCardProps) {
  // Parse tags string into array
  const tagArray = tags
    ? tags
        .split(",")
        .map((tag) => tag.trim())
        .filter(Boolean)
    : [];

  return (
    <Card className="overflow-hidden">
      <div className="relative aspect-video w-full overflow-hidden bg-gray-100">
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={title}
            className="h-full w-full object-cover transition-all hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-gray-200">
            <span className="text-sm text-gray-500">No image</span>
          </div>
        )}
      </div>
      <CardContent className="p-4">
        <h3 className="font-semibold text-lg mb-2">{title}</h3>
        <p className="text-sm text-gray-500 line-clamp-3">{description}</p>
        {tagArray.length > 0 && (
          <div className="flex flex-wrap gap-1 mt-3">
            {tagArray.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </CardContent>
      <CardFooter className="flex justify-between p-4 pt-0">
        {onEdit && (
          <Button
            variant="outline"
            size="sm"
            onClick={() => onEdit(id)}
            className="flex items-center gap-1"
          >
            <Pencil className="h-4 w-4" />
            Edit
          </Button>
        )}
        {onDelete && (
          <Button
            variant="outline"
            size="sm"
            onClick={() => onDelete(id)}
            className="flex items-center gap-1 text-red-500 hover:text-red-600"
          >
            <Trash2 className="h-4 w-4" />
            Delete
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}
