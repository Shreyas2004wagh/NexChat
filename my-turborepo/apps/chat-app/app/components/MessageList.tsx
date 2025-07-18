import { Message } from './ChatRoom'

interface MessageListProps {
  messages: Message[]
  currentUser: string
}

export default function MessageList({ messages, currentUser }: MessageListProps) {
  return (
    <div className="flex-1 overflow-y-auto p-4 bg-gray-50">
      <div className="space-y-4">
        {messages.length === 0 ? (
          <div className="text-center text-gray-500 mt-8">
            No messages yet. Start the conversation!
          </div>
        ) : (
          messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${
                message.username === currentUser ? 'justify-end' : 'justify-start'
              }`}
            >
              <div
                className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                  message.username === currentUser
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-800 border'
                }`}
              >
                {message.username !== currentUser && (
                  <div className="text-xs text-gray-500 mb-1">
                    {message.username}
                  </div>
                )}
                <div className="text-sm">{message.text}</div>
                <div className="text-xs opacity-75 mt-1">
                  {message.timestamp.toLocaleTimeString()}
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  )
}