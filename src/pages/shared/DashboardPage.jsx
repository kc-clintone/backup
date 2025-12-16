import MainLayout from "@/components/layouts/MainLayout";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import {
  FolderOpen,
  Heart,
  Eye,
  Users,
  TrendingUp,
  TrendingDown,
  Bell,
  ExternalLink,
  Plus,
} from "lucide-react";
import {
  mockStats,
  mockRecentProjects,
  mockNotifications,
} from "@/data/mockDashboardData";
import dayjs from "dayjs";

const StatCard = ({ title, value, growth, icon: Icon, trend }) => {
  const IconComponent = Icon;
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        <IconComponent className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value.toLocaleString()}</div>
        <div className="flex items-center gap-1 text-xs text-muted-foreground mt-1">
          {trend === "up" ? (
            <TrendingUp className="h-3 w-3 text-green-600" />
          ) : (
            <TrendingDown className="h-3 w-3 text-red-600" />
          )}
          <span className={trend === "up" ? "text-green-600" : "text-red-600"}>
            {growth}% from last month
          </span>
        </div>
      </CardContent>
    </Card>
  );
};

export default function DashboardPage() {
  const unreadCount = mockNotifications.filter((n) => !n.read).length;

  return (
    <MainLayout>
      <div className="space-y-6 max-w-7xl mx-auto">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
            <p className="text-muted-foreground">
              Welcome to Sanaa dashboard! Here's your overview.
            </p>
          </div>
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            New Project
          </Button>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <StatCard
            title="Total Projects"
            value={mockStats.totalProjects}
            growth={mockStats.growth.projects}
            icon={FolderOpen}
            trend="up"
          />
          <StatCard
            title="Total Likes"
            value={mockStats.totalLikes}
            growth={mockStats.growth.likes}
            icon={Heart}
            trend="up"
          />
          <StatCard
            title="Total Views"
            value={mockStats.totalViews}
            growth={mockStats.growth.views}
            icon={Eye}
            trend="up"
          />
          <StatCard
            title="Followers"
            value={mockStats.totalFollowers}
            growth={mockStats.growth.followers}
            icon={Users}
            trend="up"
          />
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Recent Projects</CardTitle>
                <Button variant="ghost" size="sm">
                  View All
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </div>
              <CardDescription>Latest project activity</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {mockRecentProjects.map((project) => (
                <div key={project.id} className="flex items-start gap-4">
                  <div className="relative h-16 w-24 rounded-md overflow-hidden flex-shrink-0">
                    <img
                      src={project.thumbnail}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                    {project.status === "draft" && (
                      <div className="absolute inset-0 bg-background/60 flex items-center justify-center">
                        <span className="text-xs font-medium">Draft</span>
                      </div>
                    )}
                  </div>
                  <div className="flex-1 min-w-0 space-y-1">
                    <h4 className="font-semibold text-sm line-clamp-1">
                      {project.title}
                    </h4>
                    <div className="flex items-center gap-3 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Eye className="h-3 w-3" />
                        {project.views}
                      </span>
                      <span className="flex items-center gap-1">
                        <Heart className="h-3 w-3" />
                        {project.likes}
                      </span>
                      <span>{dayjs(project.createdAt).format("MMM D")}</span>
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center gap-2">
                  <Bell className="h-5 w-5" />
                  Notifications
                  {unreadCount > 0 && (
                    <span className="bg-primary text-primary-foreground text-xs px-2 py-0.5 rounded-full">
                      {unreadCount}
                    </span>
                  )}
                </CardTitle>
                <Button variant="ghost" size="sm">
                  Mark all read
                </Button>
              </div>
              <CardDescription>Recent updates</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {mockNotifications.map((notification) => (
                <div
                  key={notification.id}
                  className={`space-y-1 ${
                    !notification.read ? "bg-muted/50 p-3 rounded-lg" : ""
                  }`}
                >
                  <p className="text-sm">{notification.message}</p>
                  <p className="text-xs text-muted-foreground">
                    {dayjs(notification.time).fromNow()}
                  </p>
                  {notification.id !==
                    mockNotifications[mockNotifications.length - 1].id && (
                    <Separator className="mt-3" />
                  )}
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>Get started quickly</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Button variant="outline" className="h-20 flex-col">
                <Plus className="mb-2 h-5 w-5" />
                Create Project
              </Button>
              <Button variant="outline" className="h-20 flex-col">
                <FolderOpen className="mb-2 h-5 w-5" />
                Browse Projects
              </Button>
              <Button variant="outline" className="h-20 flex-col">
                <Users className="mb-2 h-5 w-5" />
                Find Creators
              </Button>
              <Button variant="outline" className="h-20 flex-col">
                <Bell className="mb-2 h-5 w-5" />
                View Settings
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </MainLayout>
  );
}
