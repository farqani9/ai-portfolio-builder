"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ProjectCard } from "@/components/portfolio/ProjectCard";
import { CustomProjectDialog } from "@/components/portfolio/CustomProjectDialog";
import { useState } from "react";
import { Plus, Sparkles, Upload, Save } from "lucide-react";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";

// Define the project type
type ProjectType = {
  id?: string;
  title: string;
  description: string;
  tags?: string;
  imageUrl?: string;
};

export default function PortfolioPage() {
  const router = useRouter();

  // State for project management
  const [dialogOpen, setDialogOpen] = useState(false);
  const [editingProject, setEditingProject] = useState<ProjectType | undefined>(
    undefined
  );
  const [projects, setProjects] = useState<ProjectType[]>([
    {
      id: "1",
      title: "AI-Powered Portfolio Builder",
      description:
        "A web application that helps creative professionals build personalized portfolio websites using AI-driven features.",
      imageUrl: "/project1.jpg",
      tags: "Next.js, TypeScript, AI",
    },
    {
      id: "2",
      title: "E-commerce Dashboard",
      description:
        "A comprehensive dashboard for e-commerce businesses to track sales, inventory, and customer analytics.",
      imageUrl: "/project2.jpg",
      tags: "React, Redux, Node.js",
    },
  ]);

  // State for form data
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    title: "",
    bio: "",
    location: "",
    profileImage: "",
  });

  // State for design preferences
  const [designPreferences, setDesignPreferences] = useState({
    colorTheme: "blue",
    layoutStyle: "classic",
  });

  // State for loading indicators
  const [isSaving, setIsSaving] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);
  const [isUploading, setIsUploading] = useState(false);

  // Handle form input changes
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  // Handle project dialog
  const handleOpenDialog = (project?: ProjectType) => {
    setEditingProject(project);
    setDialogOpen(true);
  };

  // Handle project submission
  const handleSubmitProject = (data: ProjectType) => {
    if (data.id) {
      // Update existing project
      setProjects((prev) => prev.map((p) => (p.id === data.id ? data : p)));
      toast.success("Project updated successfully!");
    } else {
      // Add new project
      const newProject = {
        ...data,
        id: Date.now().toString(),
      };
      setProjects((prev) => [...prev, newProject]);
      toast.success("Project added successfully!");
    }
    setDialogOpen(false);
  };

  // Handle project deletion
  const handleDeleteProject = (id: string) => {
    setProjects((prev) => prev.filter((p) => p.id !== id));
    toast.success("Project deleted successfully!");
  };

  // Handle saving changes
  const handleSaveChanges = () => {
    setIsSaving(true);
    // Simulate API call
    setTimeout(() => {
      setIsSaving(false);
      toast.success("Changes saved successfully!");
    }, 1000);
  };

  // Handle AI content generation
  const handleGenerateContent = () => {
    setIsGenerating(true);
    // Simulate AI generation
    setTimeout(() => {
      setFormData({
        ...formData,
        bio: "I am a passionate creative professional with over 5 years of experience in design and development. My work focuses on creating user-centered experiences that combine aesthetics with functionality. I believe in the power of design to solve problems and improve people's lives.",
      });
      setIsGenerating(false);
      toast.success("Bio generated with AI!");
    }, 1500);
  };

  // Handle image upload
  const handleImageUpload = () => {
    setIsUploading(true);
    // Simulate upload
    setTimeout(() => {
      setFormData({
        ...formData,
        profileImage: "https://randomuser.me/api/portraits/men/32.jpg",
      });
      setIsUploading(false);
      toast.success("Profile image uploaded!");
    }, 1000);
  };

  // Handle color theme selection
  const handleColorThemeSelect = (color: string) => {
    setDesignPreferences({
      ...designPreferences,
      colorTheme: color,
    });
    toast.success(
      `${color.charAt(0).toUpperCase() + color.slice(1)} theme selected!`
    );
  };

  // Handle layout style selection
  const handleLayoutStyleSelect = (style: string) => {
    setDesignPreferences({
      ...designPreferences,
      layoutStyle: style,
    });
    toast.success(
      `${style.charAt(0).toUpperCase() + style.slice(1)} layout selected!`
    );
  };

  // Handle reset design
  const handleResetDesign = () => {
    setDesignPreferences({
      colorTheme: "blue",
      layoutStyle: "classic",
    });
    toast.success("Design preferences reset!");
  };

  // Handle apply design
  const handleApplyDesign = () => {
    toast.success("Design applied to your portfolio!");
  };

  // Handle AI suggestions
  const handleGetAISuggestions = () => {
    toast.success("AI is analyzing your portfolio...");
    setTimeout(() => {
      toast.success("AI suggestions ready! Check your inbox.");
    }, 2000);
  };

  // Handle logout
  const handleLogout = () => {
    router.push("/");
    toast.success("Logged out successfully!");
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="sticky top-0 z-10 w-full border-b bg-background">
        <div className="container flex h-16 items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold">AI Portfolio Builder</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="/dashboard" className="text-sm font-medium">
              Dashboard
            </Link>
            <Link
              href="/dashboard/portfolio"
              className="text-sm font-medium text-primary"
            >
              My Portfolio
            </Link>
            <Link href="/settings" className="text-sm font-medium">
              Settings
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm" onClick={handleLogout}>
              Logout
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 container py-6">
        <div className="flex flex-col gap-8">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">My Portfolio</h1>
            <p className="text-muted-foreground">
              Create and customize your professional portfolio
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-[300px_1fr]">
            {/* Sidebar */}
            <div className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Portfolio Sections</CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="space-y-1 px-4 py-2 bg-primary/10">
                    <div className="font-medium">About Me</div>
                    <div className="text-xs text-muted-foreground">
                      Personal information and bio
                    </div>
                  </div>
                  <div className="space-y-1 px-4 py-2">
                    <div className="font-medium">Projects</div>
                    <div className="text-xs text-muted-foreground">
                      Showcase your work
                    </div>
                  </div>
                  <div className="space-y-1 px-4 py-2">
                    <div className="font-medium">Skills</div>
                    <div className="text-xs text-muted-foreground">
                      Highlight your expertise
                    </div>
                  </div>
                  <div className="space-y-1 px-4 py-2">
                    <div className="font-medium">Experience</div>
                    <div className="text-xs text-muted-foreground">
                      Work history and achievements
                    </div>
                  </div>
                  <div className="space-y-1 px-4 py-2">
                    <div className="font-medium">Education</div>
                    <div className="text-xs text-muted-foreground">
                      Academic background
                    </div>
                  </div>
                  <div className="space-y-1 px-4 py-2">
                    <div className="font-medium">Contact</div>
                    <div className="text-xs text-muted-foreground">
                      How to reach you
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">AI Assistant</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <p className="text-sm">
                        Need help with your portfolio? I can suggest content and
                        designs based on your information.
                      </p>
                    </div>
                    <Button className="w-full" onClick={handleGetAISuggestions}>
                      Get AI Suggestions
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Main Content */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>About Me</CardTitle>
                  <CardDescription>
                    Tell visitors about yourself and your professional
                    background
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label
                        htmlFor="firstName"
                        className="text-sm font-medium"
                      >
                        First Name
                      </label>
                      <Input
                        id="firstName"
                        placeholder="John"
                        value={formData.firstName}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="lastName" className="text-sm font-medium">
                        Last Name
                      </label>
                      <Input
                        id="lastName"
                        placeholder="Doe"
                        value={formData.lastName}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="title" className="text-sm font-medium">
                      Professional Title
                    </label>
                    <Input
                      id="title"
                      placeholder="e.g. UX Designer, Software Engineer, Photographer"
                      value={formData.title}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="bio" className="text-sm font-medium">
                      Bio
                    </label>
                    <textarea
                      id="bio"
                      rows={5}
                      className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Write a short bio about yourself..."
                      value={formData.bio}
                      onChange={handleInputChange}
                    ></textarea>
                    <div className="flex justify-end">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={handleGenerateContent}
                        disabled={isGenerating}
                      >
                        {isGenerating ? (
                          <>
                            <svg
                              className="animate-spin -ml-1 mr-2 h-4 w-4 text-primary"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                            >
                              <circle
                                className="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="4"
                              ></circle>
                              <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                              ></path>
                            </svg>
                            Generating...
                          </>
                        ) : (
                          <>
                            <Sparkles className="mr-2 h-4 w-4" />
                            Generate with AI
                          </>
                        )}
                      </Button>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="location" className="text-sm font-medium">
                      Location
                    </label>
                    <Input
                      id="location"
                      placeholder="e.g. New York, NY"
                      value={formData.location}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Profile Image</label>
                    <div className="flex items-center gap-4">
                      <div className="h-24 w-24 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
                        {formData.profileImage ? (
                          <img
                            src={formData.profileImage}
                            alt="Profile"
                            className="h-full w-full object-cover"
                          />
                        ) : (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="h-8 w-8 text-gray-500"
                          >
                            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                            <circle cx="12" cy="7" r="4" />
                          </svg>
                        )}
                      </div>
                      <Button
                        variant="outline"
                        onClick={handleImageUpload}
                        disabled={isUploading}
                      >
                        {isUploading ? (
                          <>
                            <svg
                              className="animate-spin -ml-1 mr-2 h-4 w-4 text-primary"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                            >
                              <circle
                                className="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="4"
                              ></circle>
                              <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                              ></path>
                            </svg>
                            Uploading...
                          </>
                        ) : (
                          <>
                            <Upload className="mr-2 h-4 w-4" />
                            Upload Image
                          </>
                        )}
                      </Button>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button
                    variant="outline"
                    onClick={() => {
                      setFormData({
                        firstName: "",
                        lastName: "",
                        title: "",
                        bio: "",
                        location: "",
                        profileImage: "",
                      });
                      toast.success("Form reset!");
                    }}
                  >
                    Cancel
                  </Button>
                  <Button onClick={handleSaveChanges} disabled={isSaving}>
                    {isSaving ? (
                      <>
                        <svg
                          className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Saving...
                      </>
                    ) : (
                      <>
                        <Save className="mr-2 h-4 w-4" />
                        Save Changes
                      </>
                    )}
                  </Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between">
                  <div>
                    <CardTitle>Projects</CardTitle>
                    <CardDescription>
                      Showcase your best work and achievements
                    </CardDescription>
                  </div>
                  <Button
                    size="sm"
                    className="ml-auto"
                    onClick={() => handleOpenDialog()}
                  >
                    <Plus className="h-4 w-4 mr-2" />
                    Add Project
                  </Button>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 md:grid-cols-2">
                    {projects.map((project) => (
                      <ProjectCard
                        key={project.id}
                        id={project.id!}
                        title={project.title}
                        description={project.description}
                        imageUrl={project.imageUrl}
                        tags={project.tags}
                        onEdit={() => handleOpenDialog(project)}
                        onDelete={() => handleDeleteProject(project.id!)}
                      />
                    ))}
                    <div className="border border-dashed rounded-lg p-6 flex flex-col items-center justify-center text-center h-full">
                      <div className="rounded-full bg-primary/10 p-3 mb-3">
                        <Plus className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="font-medium mb-1">Add Another Project</h3>
                      <p className="text-sm text-muted-foreground mb-3">
                        Showcase more of your work
                      </p>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleOpenDialog()}
                      >
                        Add Project
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Design Preferences</CardTitle>
                  <CardDescription>
                    Customize the look and feel of your portfolio
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Color Theme</label>
                    <div className="grid grid-cols-5 gap-2">
                      <div
                        className={`h-10 w-10 rounded-full bg-blue-500 cursor-pointer ${
                          designPreferences.colorTheme === "blue"
                            ? "ring-2 ring-offset-2 ring-blue-500"
                            : ""
                        }`}
                        onClick={() => handleColorThemeSelect("blue")}
                      ></div>
                      <div
                        className={`h-10 w-10 rounded-full bg-green-500 cursor-pointer ${
                          designPreferences.colorTheme === "green"
                            ? "ring-2 ring-offset-2 ring-green-500"
                            : ""
                        }`}
                        onClick={() => handleColorThemeSelect("green")}
                      ></div>
                      <div
                        className={`h-10 w-10 rounded-full bg-purple-500 cursor-pointer ${
                          designPreferences.colorTheme === "purple"
                            ? "ring-2 ring-offset-2 ring-purple-500"
                            : ""
                        }`}
                        onClick={() => handleColorThemeSelect("purple")}
                      ></div>
                      <div
                        className={`h-10 w-10 rounded-full bg-red-500 cursor-pointer ${
                          designPreferences.colorTheme === "red"
                            ? "ring-2 ring-offset-2 ring-red-500"
                            : ""
                        }`}
                        onClick={() => handleColorThemeSelect("red")}
                      ></div>
                      <div
                        className={`h-10 w-10 rounded-full bg-gray-800 cursor-pointer ${
                          designPreferences.colorTheme === "dark"
                            ? "ring-2 ring-offset-2 ring-gray-800"
                            : ""
                        }`}
                        onClick={() => handleColorThemeSelect("dark")}
                      ></div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Layout Style</label>
                    <div className="grid grid-cols-3 gap-2">
                      <div
                        className={`border rounded-md p-2 cursor-pointer ${
                          designPreferences.layoutStyle === "classic"
                            ? "bg-primary/10"
                            : ""
                        }`}
                        onClick={() => handleLayoutStyleSelect("classic")}
                      >
                        <div className="h-20 bg-gray-200 mb-2"></div>
                        <div className="h-2 bg-gray-200 mb-1"></div>
                        <div className="h-2 bg-gray-200 w-2/3"></div>
                      </div>
                      <div
                        className={`border rounded-md p-2 cursor-pointer ${
                          designPreferences.layoutStyle === "modern"
                            ? "bg-primary/10"
                            : ""
                        }`}
                        onClick={() => handleLayoutStyleSelect("modern")}
                      >
                        <div className="h-10 bg-gray-200 mb-2"></div>
                        <div className="h-12 bg-gray-200 mb-2"></div>
                        <div className="h-2 bg-gray-200 mb-1"></div>
                      </div>
                      <div
                        className={`border rounded-md p-2 cursor-pointer ${
                          designPreferences.layoutStyle === "grid"
                            ? "bg-primary/10"
                            : ""
                        }`}
                        onClick={() => handleLayoutStyleSelect("grid")}
                      >
                        <div className="grid grid-cols-2 gap-2 mb-2">
                          <div className="h-10 bg-gray-200"></div>
                          <div className="h-10 bg-gray-200"></div>
                        </div>
                        <div className="h-2 bg-gray-200 mb-1"></div>
                        <div className="h-2 bg-gray-200 w-2/3"></div>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline" onClick={handleResetDesign}>
                    Reset
                  </Button>
                  <Button onClick={handleApplyDesign}>Apply Design</Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </div>
      </main>

      {/* Project Dialog */}
      <CustomProjectDialog
        open={dialogOpen}
        onOpenChange={setDialogOpen}
        project={editingProject}
        onSubmit={handleSubmitProject}
        isSubmitting={false}
      />
    </div>
  );
}
