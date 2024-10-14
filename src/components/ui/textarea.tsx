import * as React from "react"

import { cn } from "@/lib/utils"

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> { }

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps & { hasBorder?: boolean }>(
  ({ className, hasBorder = true, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          "flex min-h-[120px] w-full  bg-transparent px-3 py-2 text-sm  placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
          hasBorder ? "rounded-sm border border-input border-[#A1A1A1] shadow-sm" : 'min-h-[40px]',
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Textarea.displayName = "Textarea"

export { Textarea }
