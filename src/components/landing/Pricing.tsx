"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

const features = [
  "Ubegrenset antall rapporter",
  "AI-assistert skriving",
  "Talenotater på befaring",
  "PDF-eksport",
  "Bildehåndtering",
  "Prioritert support",
];

export default function Pricing() {
  return (
    <section id="pricing" className="bg-muted px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-xl">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Enkel og transparent pris
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Alt inkludert, ingen skjulte kostnader
          </p>
        </motion.div>

        <motion.div
          className="mt-12 overflow-hidden rounded-2xl border-2 border-primary bg-white shadow-xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="bg-primary px-8 py-6 text-center">
            <h3 className="text-2xl font-bold text-primary-foreground">
              Befaro Pro
            </h3>
          </div>
          <div className="p-8">
            <div className="text-center">
              <p className="text-sm text-muted-foreground">Etablering</p>
              <p className="text-2xl font-bold text-foreground">10 000,-</p>
              <div className="my-4 h-px bg-gray-200" />
              <p className="text-sm text-muted-foreground">Deretter</p>
              <p className="text-4xl font-bold text-foreground">
                kr 990,-
                <span className="text-lg font-normal text-muted-foreground">
                  /mnd
                </span>
              </p>
            </div>

            <ul className="mt-8 space-y-3">
              {features.map((feature) => (
                <li key={feature} className="flex items-center gap-3 text-sm">
                  <Check className="h-5 w-5 shrink-0 text-accent" />
                  <span className="text-foreground">{feature}</span>
                </li>
              ))}
            </ul>

            <a
              href="#"
              className="mt-8 block w-full rounded-lg bg-primary py-3 text-center text-base font-semibold text-primary-foreground shadow transition-all hover:bg-blue-700 hover:shadow-lg"
            >
              Start gratis prøveperiode
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
