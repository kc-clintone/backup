import { useState } from "react";
import MainLayout from "@/components/layouts/MainLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import {
  UserPlus,
  Check,
  Users,
  FolderOpen,
  Clock,
  MessageSquare,
} from "lucide-react";
import { mockFollowing, mockRecentActivity } from "@/data/mockFollowingData";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime);

export default function FollowingPage() {
  const [activeTab, setActiveTab] = useState("following");

  return (
    <MainLayout>
      <div className="space-y-6 max-w-7xl mx-auto">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Following</h1>
          <p className="text-muted-foreground">
            People and more you're following
          </p>
        </div>

        <div className="flex gap-2 border-b">
          <Button
            variant={activeTab === "following" ? "default" : "ghost"}
            onClick={() => setActiveTab("following")}
            className="rounded-b-none"
          >
            Following ({mockFollowing.length})
          </Button>
          <Button
            variant={activeTab === "activity" ? "default" : "ghost"}
            onClick={() => setActiveTab("activity")}
            className="rounded-b-none"
          >
            Recent Activity
          </Button>
        </div>

        {activeTab === "following" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {mockFollowing.map((user) => (
              <Card key={user.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <Avatar className="h-16 w-16">
                      <AvatarImage src={user.avatar} alt={user.username} />
                      <AvatarFallback>
                        {user.username[0].toUpperCase()}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <CardTitle className="text-lg">
                          {user.username}
                        </CardTitle>
                        {user.verified && (
                          <span className="text-primary" title="Verified">
                            ✓
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground mt-1">
                        {user.category}
                      </p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {user.bio}
                  </p>
                  <Separator />
                  <div className="grid grid-cols-3 gap-2 text-center text-sm">
                    <div>
                      <div className="font-semibold">
                        {user.followers.toLocaleString()}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        Followers
                      </div>
                    </div>
                    <div>
                      <div className="font-semibold">
                        {user.following.toLocaleString()}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        Following
                      </div>
                    </div>
                    <div>
                      <div className="font-semibold">{user.projects}</div>
                      <div className="text-xs text-muted-foreground">
                        Projects
                      </div>
                    </div>
                  </div>
                  {user.mutualFollowers > 0 && (
                    <p className="text-xs text-muted-foreground">
                      {user.mutualFollowers} mutual follower
                      {user.mutualFollowers !== 1 ? "s" : ""}
                    </p>
                  )}
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Clock className="h-3 w-3" />
                    <span>Active {dayjs(user.lastActive).fromNow()}</span>
                  </div>
                  <Button variant="outline" className="w-full">
                    <Check className="mr-2 h-4 w-4" />
                    Following
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {activeTab === "activity" && (
          <div className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {mockRecentActivity.map((activity) => (
                  <div key={activity.id} className="flex items-start gap-4">
                    <Avatar className="h-10 w-10">
                      <AvatarImage
                        src={activity.user.avatar}
                        alt={activity.user.username}
                      />
                      <AvatarFallback>
                        {activity.user.username[0].toUpperCase()}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm">
                        <span className="font-semibold">
                          {activity.user.username}
                        </span>{" "}
                        {activity.action}{" "}
                        <span className="font-semibold">
                          {activity.project}
                        </span>
                      </p>
                      <p className="text-xs text-muted-foreground mt-1">
                        {dayjs(activity.time).fromNow()}
                      </p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </MainLayout>
  );
}
