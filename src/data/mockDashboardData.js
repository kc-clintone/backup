export const mockStats = {
  totalProjects: 12,
  totalLikes: 3420,
  totalViews: 18900,
  totalFollowers: 1250,
  growth: {
    projects: 15,
    likes: 23,
    views: 18,
    followers: 12,
  },
};

export const mockRecentProjects = [
  {
    id: "1",
    title: "E-commerce Dashboard",
    status: "published",
    views: 890,
    likes: 124,
    createdAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
    thumbnail:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=200&h=150&fit=crop",
  },
  {
    id: "2",
    title: "Music Player App",
    status: "published",
    views: 560,
    likes: 89,
    createdAt: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(),
    thumbnail:
      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=200&h=150&fit=crop",
  },
  {
    id: "3",
    title: "Design System",
    status: "draft",
    views: 0,
    likes: 0,
    createdAt: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString(),
    thumbnail:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=200&h=150&fit=crop",
  },
];

export const mockNotifications = [
  {
    id: "1",
    type: "like",
    message: "webdevmaster liked your project 'E-commerce Dashboard'",
    time: new Date(Date.now() - 30 * 60 * 1000).toISOString(),
    read: false,
  },
  {
    id: "2",
    type: "comment",
    message: "uiuxdesigner commented on your project 'Music Player App'",
    time: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
    read: false,
  },
  {
    id: "3",
    type: "follow",
    message: "mobilecoder started following you",
    time: new Date(Date.now() - 5 * 60 * 60 * 1000).toISOString(),
    read: true,
  },
  {
    id: "4",
    type: "project",
    message: "Your project 'Design System' was featured",
    time: new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString(),
    read: true,
  },
];
