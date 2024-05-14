// Inside your Bubble component

import React, { ReactNode, useRef } from "react"
import ContentEditable, { ContentEditableEvent } from "react-contenteditable"
import { useStore } from "@/app/store"
import { cn } from "@/lib/utils"

export function Bubble({ children, onChange }: {
  children: ReactNode;
  onChange: (newCaption: string) => void
}) {
  const ref = useRef<HTMLDivElement>(null)
  const zoomLevel = useStore(s => s.zoomLevel)
  const showCaptions = useStore(s => s.showCaptions)

  const text = useRef(`${children || ''}`)

  const handleChange = (evt: ContentEditableEvent) => {
    text.current = `${ref.current?.innerText || ''}`
  };

  const handleBlur = () => {
    onChange(text.current)
  };

  return (
    <div className={cn(
      `bottom-0`,
      `absolute flex w-full items-center justify-center`,
      zoomLevel > 200 ? `p-4 md:p-8` :
      zoomLevel > 180 ? `p-[14px] md:p-8` :
      zoomLevel > 160 ? `p-[12px] md:p-[28px]` :
      zoomLevel > 140 ? `p-[10px] md:p-[26px]` :
      zoomLevel > 120 ? `p-2 md:p-6` :
      zoomLevel > 100 ? `p-1.5 md:p-[20px]` :
      zoomLevel > 90 ? `p-1.5 md:p-4` :
      zoomLevel > 40 ? `p-1 md:p-2` :
      `p-0.5 md:p-2`,
      `print:p-2`
    )}>
      <div
        ref={ref}
        className={cn(
          `bg-stone-50`,
          `border-stone-800`,
          `transition-all duration-200 ease-in-out`,
          `border-[1.5px] md:border-[1px]`, // Adjust border size if needed

          // Adjust font size here
          `text-base md:text-large`, // Increase font size for larger
          `print:text-15xs`, // Font size for print view

          // Add other Tailwind classes as needed
        )}
      >
        <ContentEditable
          html={text.current}
          className="line-clamp-3"
          onBlur={handleBlur}
          onChange={handleChange} 
        />
      </div>
    </div>
  )
}
