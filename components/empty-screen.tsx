'use client'

import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

const exampleMessages = [
  {
    heading: 'Looking for IT-related jobs in Sydney',
    message: 'Looking for IT-related jobs in Sydney'
  },
  {
    heading: 'Renting a whole house in Box Hill, Melbourne',
    message: 'Renting a whole house in Box Hill, Melbourne'
  },
  {
    heading: 'Finding an apartment near UNSW in Sydney',
    message: 'Finding an apartment near UNSW in Sydney'
  },
  {
    heading: 'Looking for a quantity surveying job in Melbourne',
    message: 'Looking for a quantity surveying job in Melbourne'
  }
]

export function EmptyScreen({
  submitMessage,
  className
}: {
  submitMessage: (message: string) => void
  className?: string
}) {
  return (
    <div className={`mx-auto w-full transition-all ${className}`}>
      <div className="bg-background p-2">
        <div className="mt-4 flex flex-col items-start space-y-2 mb-4">
          {exampleMessages.map((message, index) => (
            <Button
              key={index}
              variant="link"
              className="h-auto p-0 text-base"
              name={message.message}
              onClick={async () => {
                submitMessage(message.message)
              }}
            >
              <ArrowRight size={16} className="mr-2 text-muted-foreground" />
              {message.heading}
            </Button>
          ))}
        </div>
      </div>
    </div>
  )
}
