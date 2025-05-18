# StreamFlow

A modern video gallery web application with a clean UI, modals for video details, and tagging functionality.

![StreamFlow Banner](https://images.unsplash.com/photo-1611162616475-46b635cb6868?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80)

## Overview

StreamFlow is a responsive video gallery application built with React and TypeScript. It features a sleek, modern interface that allows users to browse, categorize, and watch videos. The application includes modals for detailed video views, tagging functionality, and a responsive design that works across all devices.

## Features

- **Video Gallery**: Clean, grid-based layout for browsing videos
- **Modal Video Details**: Click on any video to see detailed information in a modal
- **Category Filtering**: Browse videos by categories/tags
- **Live Streaming Page**: Dedicated section for live content
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile
- **Dark Mode UI**: Modern dark-themed interface for comfortable viewing

## Technologies Used

- **Frontend Framework**: React 18 with TypeScript
- **Routing**: React Router v6
- **Styling**: TailwindCSS
- **UI Components**: Custom components built with Radix UI primitives
- **Animations**: Framer Motion for smooth transitions
- **State Management**: React Query for data management
- **Build Tool**: Vite

## Getting Started

### Prerequisites

- Node.js (v18 or later)
- npm or yarn or bun

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/PratyushKumar43/Simple-video-gallery-
   cd Simple-video-gallery
   ```

2. Install dependencies
   ```bash
   npm install
   # or if you use yarn
   yarn install
   # or if you use bun
   bun install
   ```

3. Start the development server
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   bun dev
   ```

4. Open [http://localhost:5173](http://localhost:5173) in your browser to see the application

### Building for Production

```bash
npm run build
# or
yarn build
# or
bun build
```

## Project Structure

```
├── public/              # Static assets
├── src/
│   ├── components/      # UI components
│   ├── hooks/           # Custom React hooks
│   ├── lib/             # Utility functions and shared code
│   ├── pages/           # Page components
│   │   ├── HomePage.tsx
│   │   ├── BrowsePage.tsx
│   │   ├── CategoriesPage.tsx
│   │   ├── VideoPage.tsx
│   │   └── LivePage.tsx
│   ├── App.tsx          # Main app component
│   └── main.tsx         # Entry point
├── index.html           # HTML template
├── package.json         # Dependencies and scripts
├── tailwind.config.ts   # TailwindCSS configuration
└── vite.config.ts       # Vite configuration
```

## Usage

### Browsing Videos

Navigate to the main page to see a grid of featured videos. Click on any video to open its detailed view with description, comments, and related videos.

### Filtering by Categories

Use the Categories page to filter videos by specific tags or categories. The application supports multiple filtering options to help you find the content you're looking for.

### Live Streaming

Check out the Live page to see currently streaming content with real-time viewer counts and interactive features.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Design inspiration from modern streaming platforms
- All video content is used for demonstration purposes only