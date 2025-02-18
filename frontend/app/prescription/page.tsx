"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, Loader2 } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"

// Mock data - replace with actual API call
const mockMedicineData = {
  Amoxicillin: {
    brand: "Amoxil",
    description: "Amoxicillin is a penicillin antibiotic that fights bacteria.",
    sideEffects: ["Diarrhea", "Rash", "Nausea", "Vomiting"],
    drugInteractions: ["Probenecid", "Allopurinol", "Oral contraceptives"],
    cost: "$10-15",
    activeIngredients: ["Amoxicillin trihydrate"],
  },
  Lisinopril: {
    brand: "Prinivil, Zestril",
    description: "Lisinopril is an ACE inhibitor that treats high blood pressure.",
    sideEffects: ["Dizziness", "Headache", "Dry cough", "Fatigue"],
    drugInteractions: ["NSAIDs", "Potassium supplements", "Lithium"],
    cost: "$8-12",
    activeIngredients: ["Lisinopril dihydrate"],
  },
}

export default function PrescriptionPage() {
  const [isDecoding, setIsDecoding] = useState(true)
  const [showMedicines, setShowMedicines] = useState(false)
  const [medicines] = useState(Object.keys(mockMedicineData))

  useEffect(() => {
    // Simulate prescription decoding
    const timer = setTimeout(() => {
      setIsDecoding(false)
      setShowMedicines(true)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="min-h-[calc(100vh-180px)] p-8">
      {isDecoding && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex flex-col items-center justify-center h-[60vh]"
        >
          <Loader2 className="w-16 h-16 text-medisage-blue animate-spin" />
          <p className="text-2xl mt-4 text-medisage-blue">Decoding Prescription...</p>
        </motion.div>
      )}

      <AnimatePresence>
        {showMedicines && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto space-y-4"
          >
            <h2 className="text-3xl font-bold text-center mb-8">Prescribed Medicines</h2>
            {medicines.map((medicine) => (
              <Collapsible key={medicine} className="w-full">
                <Card className="border-medisage-blue/20">
                  <CollapsibleTrigger className="w-full">
                    <div className="flex items-center justify-between p-4">
                      <h3 className="text-xl font-semibold text-medisage-blue">{medicine}</h3>
                      <ChevronDown className="h-5 w-5 text-medisage-blue transition-transform ui-open:rotate-180" />
                    </div>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <CardContent className="p-4 pt-0">
                      <div className="grid gap-4 text-muted-foreground">
                        <div>
                          <span className="font-semibold text-foreground">Brand: </span>
                          {mockMedicineData[medicine as keyof typeof mockMedicineData].brand}
                        </div>
                        <div>
                          <span className="font-semibold text-foreground">Description: </span>
                          {mockMedicineData[medicine as keyof typeof mockMedicineData].description}
                        </div>
                        <div>
                          <span className="font-semibold text-foreground">Side Effects: </span>
                          {mockMedicineData[medicine as keyof typeof mockMedicineData].sideEffects.join(", ")}
                        </div>
                        <div>
                          <span className="font-semibold text-foreground">Drug Interactions: </span>
                          {mockMedicineData[medicine as keyof typeof mockMedicineData].drugInteractions.join(", ")}
                        </div>
                        <div>
                          <span className="font-semibold text-foreground">Cost: </span>
                          {mockMedicineData[medicine as keyof typeof mockMedicineData].cost}
                        </div>
                        <div>
                          <span className="font-semibold text-foreground">Active Ingredients: </span>
                          {mockMedicineData[medicine as keyof typeof mockMedicineData].activeIngredients.join(", ")}
                        </div>
                      </div>
                    </CardContent>
                  </CollapsibleContent>
                </Card>
              </Collapsible>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

