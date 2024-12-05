import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Bot, Send } from 'lucide-react'

export function AIAssistant() {
  const [input, setInput] = useState("")
  const [messages, setMessages] = useState<{ role: "user" | "assistant"; content: string }[]>([])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (input.trim()) {
      setMessages([...messages, { role: "user", content: input }])
      // Here you would typically call an API to get the AI response
      // For now, we'll just echo the user's input
      setTimeout(() => {
        setMessages(prev => [...prev, { role: "assistant", content: `Echo: ${input}` }])
      }, 500)
      setInput("")
    }
  }

  return (
    <Card className="bg-[#333333]/50 border-[#4D4D4D]">
      <CardHeader>
        <CardTitle className="text-lg font-semibold flex items-center text-white">
          <Bot className="h-5 w-5 mr-2 text-blue-400" />
          AI Assistant
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="h-[200px] overflow-y-auto space-y-2">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`p-2 rounded-lg ${
                message.role === "user" ? "bg-blue-500 ml-4" : "bg-gray-600 mr-4"
              }`}
            >
              {message.content}
            </div>
          ))}
        </div>
        <form onSubmit={handleSubmit} className="flex space-x-2">
          <Input
            type="text"
            placeholder="Ask me anything..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-grow bg-[#4D4D4D] border-[#666666] text-white"
          />
          <Button type="submit" size="icon" className="bg-blue-500 hover:bg-blue-600">
            <Send className="h-4 w-4" />
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}

