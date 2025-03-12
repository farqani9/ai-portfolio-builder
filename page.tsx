import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Create Your Professional Portfolio in Minutes
                  </h1>
                  <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                    Our AI-powered platform helps you build a stunning portfolio
                    website that showcases your work and skills. No coding
                    required.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="/register">
                    <Button size="lg" className="w-full">
                      Get Started
                    </Button>
                  </Link>
                  <Link href="/login">
                    <Button size="lg" variant="outline" className="w-full">
                      Log In
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative w-full h-[400px] bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg shadow-xl">
                  {/* Placeholder for portfolio preview image */}
                  <div className="absolute inset-0 flex items-center justify-center text-white text-xl font-medium">
                    Portfolio Preview
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Features
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Our AI-powered portfolio builder makes it easy to create a
                  professional online presence.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-8">
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                <div className="p-2 bg-primary/10 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6 text-primary"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">AI-Driven Design</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                  Get personalized design recommendations based on your style
                  and content.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                <div className="p-2 bg-primary/10 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6 text-primary"
                  >
                    <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                    <polyline points="14 2 14 8 20 8" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Content Generation</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                  Our AI helps you write compelling project descriptions and
                  about sections.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                <div className="p-2 bg-primary/10 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6 text-primary"
                  >
                    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Easy Customization</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                  Customize your portfolio with intuitive controls and see
                  changes in real-time.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Testimonials
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  See what our users are saying about our portfolio builder.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-8">
              <div className="flex flex-col justify-between rounded-lg border p-6 shadow-sm">
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    "I was able to create a stunning portfolio in just 30
                    minutes. The AI suggestions were spot on!"
                  </p>
                </div>
                <div className="mt-4 flex items-center space-x-2">
                  <div className="h-10 w-10 rounded-full bg-gray-200"></div>
                  <div>
                    <p className="text-sm font-medium">Jane Cooper</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      Graphic Designer
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-between rounded-lg border p-6 shadow-sm">
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    "The content generation feature saved me hours of writing.
                    Highly recommended!"
                  </p>
                </div>
                <div className="mt-4 flex items-center space-x-2">
                  <div className="h-10 w-10 rounded-full bg-gray-200"></div>
                  <div>
                    <p className="text-sm font-medium">Alex Morgan</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      Freelance Developer
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-between rounded-lg border p-6 shadow-sm">
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    "I landed three new clients within a week of publishing my
                    portfolio. This tool is a game-changer!"
                  </p>
                </div>
                <div className="mt-4 flex items-center space-x-2">
                  <div className="h-10 w-10 rounded-full bg-gray-200"></div>
                  <div>
                    <p className="text-sm font-medium">Sarah Johnson</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      Photographer
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Ready to Build Your Portfolio?
                </h2>
                <p className="max-w-[900px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Join thousands of professionals who have created stunning
                  portfolios with our platform.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/register">
                  <Button size="lg" variant="secondary" className="w-full">
                    Get Started for Free
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full py-6 bg-gray-100 dark:bg-gray-800">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="flex items-center space-x-2">
              <span className="text-lg font-bold">AI Portfolio Builder</span>
            </div>
            <div className="flex items-center space-x-4">
              <Link
                href="/terms"
                className="text-sm text-gray-500 hover:underline dark:text-gray-400"
              >
                Terms
              </Link>
              <Link
                href="/privacy"
                className="text-sm text-gray-500 hover:underline dark:text-gray-400"
              >
                Privacy
              </Link>
              <Link
                href="/contact"
                className="text-sm text-gray-500 hover:underline dark:text-gray-400"
              >
                Contact
              </Link>
            </div>
            <div className="text-sm text-gray-500 dark:text-gray-400">
              © {new Date().getFullYear()} AI Portfolio Builder. All rights
              reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
