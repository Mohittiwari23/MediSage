import { Check } from "lucide-react"

export default function AboutUsPage() {
  const benefits = [
    "Decode Your Prescription – Get easy-to-understand details about your medicines, including their purpose and usage.",
    "Follow the Right Dosage – Receive accurate instructions to take your medication safely and effectively.",
    "Be Aware of Side Effects – Stay informed about potential reactions and how to manage them.",
    "Find Safe Alternatives – If a prescribed medicine is unavailable, we suggest trusted alternatives sourced from reliable medical databases.",
  ]

  return (
    <div className="max-w-[1440px] mx-auto px-20 py-16">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-5xl font-bold text-center mb-8">Empowering Patients with Smarter Prescription Insights</h1>

        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-muted-foreground text-center mb-16 max-w-4xl mx-auto">
            At Medisage, we believe that understanding your prescription shouldn't be complicated. Our mission is to
            bridge the gap between medical prescriptions and patient awareness by providing clear, concise, and reliable
            information about medications.
          </p>

          <div className="bg-card rounded-xl p-12 shadow-sm mb-16">
            <h2 className="text-3xl font-semibold mb-8">With Medisage, you can:</h2>
            <div className="space-y-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-4">
                  <Check className="h-7 w-7 text-primary flex-shrink-0 mt-1" />
                  <p className="text-lg text-muted-foreground">{benefit}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center space-y-6 max-w-4xl mx-auto">
            <p className="text-xl">
              By enhancing medication safety and reducing errors, Medisage empowers individuals to make informed health
              decisions, ensuring a smoother and safer treatment journey.
            </p>

            <p className="text-2xl font-semibold text-primary">
              Join us in transforming healthcare accessibility—because knowledge is the first step to better health!
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

