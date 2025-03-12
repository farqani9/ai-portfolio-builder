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

export default function PortfolioPage() {
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
            <Button variant="ghost" size="sm">
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
                    <Button className="w-full">Get AI Suggestions</Button>
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
                      <Input id="firstName" placeholder="John" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="lastName" className="text-sm font-medium">
                        Last Name
                      </label>
                      <Input id="lastName" placeholder="Doe" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="title" className="text-sm font-medium">
                      Professional Title
                    </label>
                    <Input
                      id="title"
                      placeholder="e.g. UX Designer, Software Engineer, Photographer"
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
                    ></textarea>
                    <div className="flex justify-end">
                      <Button variant="outline" size="sm">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="mr-2 h-4 w-4"
                        >
                          <path d="M21 15V6" />
                          <path d="M18.5 18a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
                          <path d="M12 12H3" />
                          <path d="M16 6H3" />
                          <path d="M12 18H3" />
                        </svg>
                        Generate with AI
                      </Button>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="location" className="text-sm font-medium">
                      Location
                    </label>
                    <Input id="location" placeholder="e.g. New York, NY" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Profile Image</label>
                    <div className="flex items-center gap-4">
                      <div className="h-24 w-24 rounded-full bg-gray-200 flex items-center justify-center">
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
                      </div>
                      <Button variant="outline">Upload Image</Button>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline">Cancel</Button>
                  <Button>Save Changes</Button>
                </CardFooter>
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
                      <div className="h-10 w-10 rounded-full bg-blue-500 cursor-pointer ring-2 ring-offset-2 ring-blue-500"></div>
                      <div className="h-10 w-10 rounded-full bg-green-500 cursor-pointer"></div>
                      <div className="h-10 w-10 rounded-full bg-purple-500 cursor-pointer"></div>
                      <div className="h-10 w-10 rounded-full bg-red-500 cursor-pointer"></div>
                      <div className="h-10 w-10 rounded-full bg-gray-800 cursor-pointer"></div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Layout Style</label>
                    <div className="grid grid-cols-3 gap-2">
                      <div className="border rounded-md p-2 cursor-pointer bg-primary/10">
                        <div className="h-20 bg-gray-200 mb-2"></div>
                        <div className="h-2 bg-gray-200 mb-1"></div>
                        <div className="h-2 bg-gray-200 w-2/3"></div>
                      </div>
                      <div className="border rounded-md p-2 cursor-pointer">
                        <div className="h-10 bg-gray-200 mb-2"></div>
                        <div className="h-12 bg-gray-200 mb-2"></div>
                        <div className="h-2 bg-gray-200 mb-1"></div>
                        <div className="h-2 bg-gray-200 w-2/3"></div>
                      </div>
                      <div className="border rounded-md p-2 cursor-pointer">
                        <div className="flex gap-2 h-20">
                          <div className="w-1/3 bg-gray-200"></div>
                          <div className="w-2/3 space-y-1">
                            <div className="h-2 bg-gray-200 mb-1"></div>
                            <div className="h-2 bg-gray-200 w-2/3 mb-1"></div>
                            <div className="h-2 bg-gray-200 w-1/2"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline">Reset to Default</Button>
                  <Button>Apply Design</Button>
                </CardFooter>
              </Card>
            </div>
          </div>

          <div className="flex justify-end gap-4">
            <Button variant="outline">Preview Portfolio</Button>
            <Button>Publish Portfolio</Button>
          </div>
        </div>
      </main>
    </div>
  );
}
