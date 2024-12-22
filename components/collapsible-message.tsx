'use client'

import React, { useEffect, useState } from 'react'
import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent
} from '@radix-ui/react-collapsible'
import { Button } from './ui/button'
import { ChevronDown } from 'lucide-react'
import { StreamableValue, useStreamableValue } from 'ai/rsc'
import { cn } from '@/lib/utils'
import { Separator } from './ui/separator'

interface CollapsibleMessageProps {
  message: {
    id: string
    isCollapsed?: StreamableValue<boolean>
    components: React.ReactNode[]
  }
  isLastMessage?: boolean
}

export const CollapsibleMessage: React.FC<CollapsibleMessageProps> = ({
  message,
  isLastMessage = false
}) => {
  const [data] = useStreamableValue(message.isCollapsed)
  const isCollapsed = data ?? false
  const [open, setOpen] = useState(isLastMessage)

  useEffect(() => {
    if (isLastMessage && !open) {
      setOpen(true)
    }
  }, [isLastMessage, open])

  if (!isCollapsed || !message.components?.length) {
    return <>{message.components}</>
  }

  return (
    <Collapsible
      open={open}
      onOpenChange={setOpen}
    >
      <CollapsibleTrigger asChild>
        <div className={cn('w-full flex justify-end', !open && 'mb-4')}>
          <Button
            variant="ghost"
            size="sm"
            className="h-auto p-0 hover:bg-transparent"
          >
            <ChevronDown
              className={cn(
                'ml-2 h-4 w-4 text-zinc-400 transition-transform',
                open && 'rotate-180'
              )}
            />
            <span className="sr-only">Toggle message</span>
          </Button>
        </div>
      </CollapsibleTrigger>
      <CollapsibleContent>
        <div className="pb-4">
          {message.components}
        </div>
      </CollapsibleContent>
      {!isLastMessage && <Separator className="my-4" />}
    </Collapsible>
  )
}
