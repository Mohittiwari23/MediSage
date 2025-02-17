"use client"

import type React from "react"
import { useRouter } from "next/navigation"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { X, UploadIcon, FileIcon } from "lucide-react"
import { useState } from "react"

export function UploadModal({
  open,
  onOpenChange,
}: {
  open: boolean
  onOpenChange: (open: boolean) => void
}) {
  const [files, setFiles] = useState<File[]>([])
  const [isDragging, setIsDragging] = useState(false)
  const router = useRouter()

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(true)
  }

  const handleDragLeave = () => {
    setIsDragging(false)
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)
    const droppedFiles = Array.from(e.dataTransfer.files)
    setFiles([...files, ...droppedFiles])
  }

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const selectedFiles = Array.from(e.target.files)
      setFiles([...files, ...selectedFiles])
    }
  }

  const handleUpload = () => {
    // Here you would typically send the files to your server
    // For now, we'll just simulate the upload and redirect
    console.log("Uploading files:", files)
    onOpenChange(false)
    router.push("/prescription")
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Upload Prescription</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <div
            className={`border-2 border-dashed rounded-lg p-8 text-center ${
              isDragging ? "border-primary bg-primary/5" : "border-muted"
            }`}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
          >
            <div className="flex justify-center mb-4">
              <div className="flex -space-x-2">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full bg-muted flex items-center justify-center border-2 border-background"
                  />
                ))}
              </div>
            </div>
            <p className="text-sm text-muted-foreground mb-2">Drag prescription image here to upload</p>
            <p className="text-xs text-muted-foreground mb-4">or, click to browse (4 MB max)</p>
            <Input type="file" className="hidden" id="file-upload" onChange={handleFileSelect} accept="image/*" />
            <Button variant="outline" onClick={() => document.getElementById("file-upload")?.click()}>
              Select file
            </Button>
          </div>

          {files.length > 0 && (
            <div className="space-y-2">
              {files.map((file, i) => (
                <div key={i} className="flex items-center gap-2 text-sm">
                  <FileIcon className="w-4 h-4 text-primary" />
                  <span className="flex-1">{file.name}</span>
                  <span className="text-muted-foreground">{file.size} bytes</span>
                  <div className="w-24 h-1 bg-primary rounded-full" />
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8"
                    onClick={() => setFiles(files.filter((_, index) => index !== i))}
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              ))}
            </div>
          )}

          <div className="flex justify-end gap-2 pt-4">
            <Button variant="outline" onClick={() => onOpenChange(false)}>
              Cancel
            </Button>
            <Button
              className="bg-medisage-blue hover:bg-medisage-blue/90"
              disabled={files.length === 0}
              onClick={handleUpload}
            >
              <UploadIcon className="w-4 h-4 mr-2" />
              Upload Prescription
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

