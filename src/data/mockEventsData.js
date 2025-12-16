export const mockEvents = [
  {
    id: "1",
    title: "Tech Innovation Summit 2024",
    description:
      "Join us for the biggest tech event of the year featuring industry leaders, cutting-edge innovations, and networking opportunities. Explore the future of technology with hands-on workshops and inspiring keynotes.",
    banner:
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=400&fit=crop",
    creator: {
      username: "techsummit",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=TechSummit",
    },
    date: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString(),
    location: "San Francisco, CA",
    attendees: 1250,
    category: "Technology",
    tags: ["Tech", "Innovation", "Networking"],
  },
  {
    id: "2",
    title: "Design Conference 2024",
    description:
      "Explore the latest trends in UI/UX design and connect with creative professionals from around the world. Learn from industry experts and discover new design tools and techniques.",
    banner:
      "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800&h=400&fit=crop",
    creator: {
      username: "designpro",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=DesignPro",
    },
    date: new Date(Date.now() + 14 * 24 * 60 * 60 * 1000).toISOString(),
    location: "New York, NY",
    attendees: 890,
    category: "Design",
    tags: ["Design", "UI/UX", "Creative"],
  },
  {
    id: "3",
    title: "Web Development Bootcamp",
    description:
      "Intensive 3-day bootcamp covering modern web development practices. From React to Node.js, learn everything you need to build scalable web applications.",
    banner:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=400&fit=crop",
    creator: {
      username: "webdevmaster",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=WebDev",
    },
    date: new Date(Date.now() + 21 * 24 * 60 * 60 * 1000).toISOString(),
    location: "Online",
    attendees: 2100,
    category: "Education",
    tags: ["Web Dev", "React", "Bootcamp"],
  },
  {
    id: "4",
    title: "Startup Pitch Night",
    description:
      "Watch innovative startups pitch their ideas to investors. Network with entrepreneurs and discover the next big thing in tech.",
    banner:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=400&fit=crop",
    creator: {
      username: "startupfounder",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Startup",
    },
    date: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000).toISOString(),
    location: "Austin, TX",
    attendees: 450,
    category: "Business",
    tags: ["Startups", "Pitch", "Investors"],
  },
  {
    id: "5",
    title: "AI & Machine Learning Workshop",
    description:
      "Deep dive into AI and ML with hands-on workshops. Learn from data scientists and build your own ML models.",
    banner:
      "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=400&fit=crop",
    creator: {
      username: "datascientist",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Data",
    },
    date: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString(),
    location: "Seattle, WA",
    attendees: 680,
    category: "Technology",
    tags: ["AI", "ML", "Data Science"],
  },
  {
    id: "6",
    title: "Creative Coding Meetup",
    description:
      "Monthly meetup for creative coders. Share projects, learn new techniques, and collaborate on creative coding challenges.",
    banner:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=400&fit=crop",
    creator: {
      username: "creativecoder",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Creative",
    },
    date: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000).toISOString(),
    location: "Portland, OR",
    attendees: 120,
    category: "Community",
    tags: ["Coding", "Creative", "Meetup"],
  },
];
