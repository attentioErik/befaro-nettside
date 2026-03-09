"use client";

import { motion } from "framer-motion";
import { Mic, Bot, Camera, BarChart3, Smartphone, FileDown } from "lucide-react";

const features = [
  {
    icon: Mic,
    title: "Talenotater",
    description: "Snakk inn observasjoner på befaring – AI transkriberer",
  },
  {
    icon: Bot,
    title: "AI-assistent",
    description: "Genererer profesjonelle beskrivelser fra stikkord",
  },
  {
    icon: Camera,
    title: "Bildehåndtering",
    description: "Last opp og organiser bilder per seksjon",
  },
  {
    icon: BarChart3,
    title: "NS 3600-grader",
    description: "Tilstandsgrader i henhold til norsk standard",
  },
  {
    icon: Smartphone,
    title: "Mobilvennlig",
    description: "Fungerer like godt på telefon som PC",
  },
  {
    icon: FileDown,
    title: "PDF-eksport",
    description: "Profesjonelle rapporter med ett klikk",
  },
];

export default function FeaturesGrid() {
  return (
    <section id="features" className="bg-muted px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Alt du trenger i en app
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Kraftige funksjoner designet for norske takstmenn
          </p>
        </motion.div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-50">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-foreground">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
