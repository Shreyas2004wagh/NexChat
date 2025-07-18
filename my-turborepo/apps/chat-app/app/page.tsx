// apps/chat-app/app/page.tsx
export default function Home() {
  return (
    <div className="flex flex-col h-screen">
      <header className="bg-blue-600 text-white p-4">
        <h1 className="text-xl font-bold">Chat App</h1>
      </header>
      
      <main className="flex-1 flex flex-col">
        {/* Messages area */}
        <div className="flex-1 overflow-y-auto p-4 bg-gray-50">
          <div className="space-y-2">
            {/* Message bubbles will go here */}
          </div>
        </div>
        
        {/* Message input */}
        <div className="p-4 border-t">
          <div className="flex gap-2">
            <input 
              type="text" 
              placeholder="Type a message..."
              className="flex-1 px-3 py-2 border rounded-lg"
            />
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg">
              Send
            </button>
          </div>
        </div>
      </main>
    </div>
  )
}