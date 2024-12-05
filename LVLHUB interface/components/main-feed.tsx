import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ThumbsUp, MessageSquare, Share2 } from 'lucide-react'

export function MainFeed() {
  const posts = [
    {
      id: 1,
      author: "Jane Doe",
      avatar: "/placeholder.svg?height=40&width=40",
      content: "Just finished a great meeting with the team. We've got some exciting new projects coming up!",
      likes: 15,
      comments: 3,
      shares: 2,
    },
    {
      id: 2,
      author: "John Smith",
      avatar: "/placeholder.svg?height=40&width=40",
      content: "Our Q2 results are in, and they're looking fantastic! Great job everyone!",
      likes: 32,
      comments: 8,
      shares: 5,
    },
  ]

  return (
    <div className="space-y-6 max-w-2xl mx-auto">
      <Card>
        <CardContent className="p-4">
          <div className="flex items-center space-x-4">
            <Avatar>
              <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Your avatar" />
              <AvatarFallback>YA</AvatarFallback>
            </Avatar>
            <Textarea placeholder="What's on your mind?" className="flex-1" />
          </div>
          <div className="flex justify-end mt-4">
            <Button>Post</Button>
          </div>
        </CardContent>
      </Card>

      {posts.map((post) => (
        <Card key={post.id}>
          <CardHeader>
            <div className="flex items-center space-x-4">
              <Avatar>
                <AvatarImage src={post.avatar} alt={`${post.author}'s avatar`} />
                <AvatarFallback>{post.author[0]}</AvatarFallback>
              </Avatar>
              <div>
                <CardTitle className="text-lg">{post.author}</CardTitle>
                <p className="text-sm text-gray-500">2 hours ago</p>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <p>{post.content}</p>
            <div className="flex items-center space-x-4 mt-4">
              <Button variant="ghost" size="sm">
                <ThumbsUp className="h-4 w-4 mr-2" />
                {post.likes}
              </Button>
              <Button variant="ghost" size="sm">
                <MessageSquare className="h-4 w-4 mr-2" />
                {post.comments}
              </Button>
              <Button variant="ghost" size="sm">
                <Share2 className="h-4 w-4 mr-2" />
                {post.shares}
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

