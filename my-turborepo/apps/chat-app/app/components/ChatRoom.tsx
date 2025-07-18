'use client'

import { useState, useEffect, useRef } from 'react'
import MessageList from './MessageList'
import MessageInput from './MessageInput'

export interface Message {
  id: string
  text: string
  username: string
  timestamp: Date
}

export default function ChatRoom() {
  const [messages, setMessages] = useState<Message[]>([])
  const [username, setUsername] = useState('')
  const [isConnected, setIsConnected] = useState(false)

  // Add a new message
  const addMessage = (text: string) => {
    if (!text.trim() || !username) return

    const newMessage: Message = {
      id: Date.now().toString(),
      text,
      username,
      timestamp: new Date()
    }

    setMessages(prev => [...prev, newMessage])
  }

  // Simple username setup (we'll replace this with real auth later)
  const handleUsernameSubmit = (name: string) => {
    if (name.trim()) {
      setUsername(name.trim())
      setIsConnected(true)
    }
  }

  if (!isConnected) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-md w-96">
          <h2 className="text-2xl font-bold mb-4 text-center">Join Chat</h2>
          <form onSubmit={(e) => {
            e.preventDefault()
            const formData = new FormData(e.target as HTMLFormElement)
            const name = formData.get('username') as string
            handleUsernameSubmit(name)
          }}>
            <input
              name="username"
              type="text"
              placeholder="Enter your username"
              className="w-full px-3 py-2 border rounded-lg mb-4"
              required
            />
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
            >
              Join Chat
            </button>
          </form>
        </div>
      </div>
    )
  }

  return (
    <div className="flex flex-col h-screen">
      <header className="bg-blue-600 text-white p-4">
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-bold">Chat App</h1>
          <span className="text-sm">Welcome, {username}!</span>
        </div>
      </header>
      
      <main className="flex-1 flex flex-col">
        <MessageList messages={messages} currentUser={username} />
        <MessageInput onSendMessage={addMessage} />
      </main>
    </div>
  )
}