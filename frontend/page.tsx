"use client"

import { Upload } from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { UploadModal } from "./upload-modal"
import { MediSageAnimation } from "@/components/medisage-animation"

export default function Home() {
  const [uploadOpen, setUploadOpen] = useState(false)

  return (
    <div className="max-w-[1440px] mx-auto px-20">
      <div className="flex items-center justify-between min-h-[calc(100vh-180px)] gap-20">
        <div className="flex-1 space-y-10">
          <h1 className="text-6xl font-bold leading-tight tracking-tighter">
            <span className="text-medisage-blue">Decode.</span>
            <br />
            Understand.
            <br />
            <span className="text-medisage-green">Heal.</span>
          </h1>
          <p className="text-xl text-muted-foreground">
            MediSage transforms your prescriptions into clear, actionable insights. Upload your prescription and let our
            AI guide you to better health.
          </p>
          <Button
            className="gap-3 text-lg px-8 py-7 transition-all duration-200 hover:scale-105 bg-medisage-blue hover:bg-medisage-blue/90"
            onClick={() => setUploadOpen(true)}
          >
            <Upload className="w-5 h-5" />
            Upload Prescription
          </Button>
        </div>
        <div className="flex-1 flex justify-center items-center">
          <MediSageAnimation />
        </div>
      </div>
      <UploadModal open={uploadOpen} onOpenChange={setUploadOpen} />
    </div>
  )
}

