export const mockFeedData = [
  {
    id: "1",
    title: "E-commerce Dashboard",
    description:
      "A beautiful and modern e-commerce dashboard built with React and Tailwind CSS. Features include real-time analytics, order management, inventory tracking, and customer insights. The dashboard is fully responsive and includes dark mode support. Perfect for managing your online store with ease and efficiency.",
    media: {
      type: "image",
      url: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
      alt: "E-commerce Dashboard Preview",
    },
    user: {
      username: "johndoe",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=John",
    },
    createdAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
    likes: 42,
    comments: 8,
  },
  {
    id: "2",
    title: "Music Player App",
    description:
      "A sleek music player application with a focus on user experience. Includes playlist management, equalizer controls, and seamless playback. Built with modern web technologies.",
    media: {
      type: "video",
      url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
      thumbnail:
        "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&h=600&fit=crop",
    },
    user: {
      username: "musiclover",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Music",
    },
    createdAt: new Date(Date.now() - 5 * 60 * 60 * 1000).toISOString(),
    likes: 128,
    comments: 23,
  },
  {
    id: "3",
    title: "Project Documentation",
    description:
      "Comprehensive documentation for the new API system. Includes setup guides, API reference, authentication methods, and best practices. This document covers everything you need to get started with the platform.",
    media: {
      type: "document",
      url: "#",
      alt: "API Documentation PDF",
    },
    user: {
      username: "techwriter",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Tech",
    },
    createdAt: new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString(),
    likes: 67,
    comments: 12,
  },
  {
    id: "4",
    title: "Mobile Banking UI",
    description:
      "A modern mobile banking interface designed with security and usability in mind. Features include account overview, transaction history, bill payments, and money transfers. The design follows iOS and Material Design guidelines for a native feel.",
    media: {
      type: "image",
      url: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop",
      alt: "Mobile Banking App Preview",
    },
    user: {
      username: "designerpro",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Designer",
    },
    createdAt: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString(),
    likes: 234,
    comments: 45,
  },
  {
    id: "5",
    title: "Fitness Tracker",
    description:
      "A comprehensive fitness tracking application that helps users monitor their workouts, track progress, and achieve their fitness goals. Includes features like workout logging, progress charts, and social sharing capabilities.",
    media: {
      type: "image",
      url: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop",
      alt: "Fitness Tracker App",
    },
    user: {
      username: "fitnessguru",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Fitness",
    },
    createdAt: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString(),
    likes: 189,
    comments: 34,
  },
];
