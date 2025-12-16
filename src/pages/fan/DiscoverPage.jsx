import { useState } from "react";
import MainLayout from "@/components/layouts/MainLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Search, UserPlus, Check, Eye, Heart, TrendingUp } from "lucide-react";
import {
  mockCreators,
  mockTrendingProjects,
  categories,
} from "@/data/mockDiscoverData";

export default function DiscoverPage() {
  const [category, setCategory] = useState("All");
  const [search, setSearch] = useState("");
  const [following, setFollowing] = useState(new Set());

  const filtered =
    category === "All"
      ? mockCreators
      : mockCreators.filter((c) => c.category === category);

  const creators = filtered.filter(
    (c) =>
      c.username.toLowerCase().includes(search.toLowerCase()) ||
      c.bio.toLowerCase().includes(search.toLowerCase())
  );

  const toggleFollow = (id) => {
    setFollowing((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  };

  return (
    <MainLayout>
      <div className="space-y-6 max-w-7xl mx-auto">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Discover</h1>
          <p className="text-muted-foreground">
            Discover creators, content, and more
          </p>
        </div>

        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search creators..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-10"
          />
        </div>

        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <Button
              key={cat}
              variant={category === cat ? "default" : "outline"}
              size="sm"
              onClick={() => setCategory(cat)}
            >
              {cat}
            </Button>
          ))}
        </div>
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <TrendingUp className="h-5 w-5 text-primary" />
            <h2 className="text-2xl font-semibold">Trending Projects</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {mockTrendingProjects.map((project) => (
              <Card
                key={project.id}
                className="overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="relative h-32 w-full overflow-hidden">
                  <img
                    src={project.thumbnail}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader className="p-4">
                  <CardTitle className="text-sm line-clamp-1">
                    {project.title}
                  </CardTitle>
                  <div className="flex items-center gap-2 mt-2">
                    <Avatar className="h-5 w-5">
                      <AvatarImage
                        src={project.creator.avatar}
                        alt={project.creator.username}
                      />
                      <AvatarFallback className="text-xs">
                        {project.creator.username[0].toUpperCase()}
                      </AvatarFallback>
                    </Avatar>
                    <span className="text-xs text-muted-foreground">
                      {project.creator.username}
                    </span>
                  </div>
                </CardHeader>
                <CardContent className="p-4 pt-0">
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <div className="flex items-center gap-3">
                      <span className="flex items-center gap-1">
                        <Heart className="h-3 w-3" />
                        {project.likes}
                      </span>
                      <span className="flex items-center gap-1">
                        <Eye className="h-3 w-3" />
                        {project.views}
                      </span>
                    </div>
                    <span className="text-xs bg-muted px-2 py-0.5 rounded">
                      {project.category}
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Creators</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {creators.map((creator) => (
              <Card
                key={creator.id}
                className="hover:shadow-lg transition-shadow"
              >
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <Avatar className="h-16 w-16">
                      <AvatarImage
                        src={creator.avatar}
                        alt={creator.username}
                      />
                      <AvatarFallback>
                        {creator.username[0].toUpperCase()}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <CardTitle className="text-lg">
                          {creator.username}
                        </CardTitle>
                        {creator.verified && (
                          <span className="text-primary" title="Verified">
                            ✓
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground mt-1">
                        {creator.category}
                      </p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {creator.bio}
                  </p>
                  <div className="flex items-center gap-4 text-sm">
                    <div>
                      <span className="font-semibold">
                        {creator.followers.toLocaleString()}
                      </span>
                      <span className="text-muted-foreground ml-1">
                        followers
                      </span>
                    </div>
                    <div>
                      <span className="font-semibold">{creator.projects}</span>
                      <span className="text-muted-foreground ml-1">
                        projects
                      </span>
                    </div>
                  </div>
                  <Button
                    variant={following.has(creator.id) ? "outline" : "default"}
                    className="w-full"
                    onClick={() => toggleFollow(creator.id)}
                  >
                    {following.has(creator.id) ? (
                      <>
                        <Check className="mr-2 h-4 w-4" />
                        Following
                      </>
                    ) : (
                      <>
                        <UserPlus className="mr-2 h-4 w-4" />
                        Follow
                      </>
                    )}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {creators.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No creators found</p>
          </div>
        )}
      </div>
    </MainLayout>
  );
}
