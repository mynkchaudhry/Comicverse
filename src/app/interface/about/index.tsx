import { ReactNode, useState } from "react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTrigger } from "@/components/ui/dialog"

const APP_NAME = `ComicVerse`
const APP_VERSION = `1.5`
const APP_RELEASE_DATE = `May 2024`

export function About() {
  const [isOpen, setOpen] = useState(false)

  return (
    <Dialog open={isOpen} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline">About</Button>
      </DialogTrigger>
      <DialogContent className="w-full sm:max-w-[500px] md:max-w-[600px] overflow-y-scroll h-[100vh] sm:h-[550px]">
        <DialogHeader>
          <h2>{APP_NAME} {APP_VERSION} ({APP_RELEASE_DATE})</h2>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}
