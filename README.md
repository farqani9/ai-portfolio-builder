# AI-Powered Portfolio Builder

An innovative web application that empowers creative professionals, freelancers, job seekers, and agencies to create personalized, professional portfolio websites with ease and speed. This tool harnesses artificial intelligence to deliver tailored design recommendations and dynamically generate content, slashing the time and effort typically required for portfolio creation.

## Features

- **AI-Driven Design**: Get personalized design recommendations based on your style and content.
- **Content Generation**: Our AI helps you write compelling project descriptions and about sections.
- **Easy Customization**: Customize your portfolio with intuitive controls and see changes in real-time.
- **User Authentication**: Secure login and registration system.
- **Responsive Design**: Looks great on all devices, from mobile to desktop.
- **Portfolio Publishing**: Share your portfolio with a unique URL.

## Tech Stack

- **Frontend**: Next.js, React, TypeScript, Tailwind CSS
- **UI Components**: Radix UI, Shadcn UI
- **Authentication**: NextAuth.js
- **Form Handling**: React Hook Form, Zod
- **Animation**: Framer Motion
- **Icons**: Lucide React

## Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm or yarn

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/ai-portfolio-builder.git
   cd ai-portfolio-builder
   ```

2. Install dependencies:

   ```bash
   npm install
   # or
   yarn install
   ```

3. Run the development server:

   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Project Structure

- `app/`: Next.js app directory
  - `(auth)/`: Authentication routes (login, register)
  - `dashboard/`: Dashboard and portfolio management routes
  - `page.tsx`: Homepage
- `components/`: React components
  - `ui/`: Reusable UI components
  - `auth/`: Authentication-related components
  - `portfolio/`: Portfolio-specific components
- `lib/`: Utility functions and shared code
- `public/`: Static assets

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Radix UI](https://www.radix-ui.com/)
- [Shadcn UI](https://ui.shadcn.com/)
