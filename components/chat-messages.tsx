'use client'

import { StreamableValue } from 'ai/rsc'
import type { UIState } from '@/app/actions'
import { CollapsibleMessage } from './collapsible-message'

interface ChatMessagesProps {
  messages: UIState
}

type GroupedMessage = {
  id: string
  components: React.ReactNode[]
  isCollapsed?: StreamableValue<boolean>
}

export function ChatMessages({ messages }: ChatMessagesProps) {
  if (!messages.length) {
    return null
  }

  // Group messages based on ID
  const groupedMessages = messages.reduce(
    (acc: { [key: string]: GroupedMessage }, message) => {
      if (!acc[message.id]) {
        acc[message.id] = {
          id: message.id,
          components: [],
          isCollapsed: message.isCollapsed
        }
      }
      acc[message.id].components.push(message.component)
      return acc
    },
    {}
  )

  const groupedMessagesArray = Object.values(groupedMessages)

  return (
    <div className="space-y-4">
      {groupedMessagesArray.map((message, index) => (
        <CollapsibleMessage
          key={message.id}
          message={message}
          isLastMessage={index === groupedMessagesArray.length - 1}
        />
      ))}
    </div>
  )
}
