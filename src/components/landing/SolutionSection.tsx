"use client";

import { motion } from "framer-motion";
import { ClipboardList, Sparkles, Download } from "lucide-react";

const steps = [
  {
    number: "1",
    icon: ClipboardList,
    title: "Ute på befaring",
    items: [
      "Ta notater via tale eller tekst",
      "Organiser per seksjon (tak, bad, fasade...)",
      "Last opp bilder direkte",
    ],
  },
  {
    number: "2",
    icon: Sparkles,
    title: "AI strukturerer rapporten",
    items: [
      "Notatene dine blir til profesjonell tekst",
      "NS 3600-kompatible tilstandsgrader",
      "Konsistent språk og format",
    ],
  },
  {
    number: "3",
    icon: Download,
    title: "Eksporter og lever",
    items: [
      "Last ned som PDF",
      "Profesjonelt design hver gang",
      "Klar til å sende til kunde",
    ],
  },
];

export default function SolutionSection() {
  return (
    <section id="demo" className="bg-white px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Slik fungerer Takstappen
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Fra befaring til ferdig rapport i tre enkle steg
          </p>
        </motion.div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              className="relative rounded-2xl border border-gray-200 bg-white p-8 shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-lg font-bold text-primary-foreground">
                  {step.number}
                </div>
                <step.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">
                {step.title}
              </h3>
              <ul className="mt-4 space-y-2">
                {step.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-sm text-muted-foreground"
                  >
                    <span className="mt-1 block h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    {item}
                  </li>
                ))}
              </ul>

              {index < steps.length - 1 && (
                <div className="absolute -right-5 top-1/2 hidden -translate-y-1/2 text-2xl text-gray-300 lg:block">
                  &rarr;
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
