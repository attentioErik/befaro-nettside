"use client";

import { motion } from "framer-motion";
import { X, Check } from "lucide-react";

const comparisons = [
  { before: "2-3 timer per rapport", after: "30-45 minutter" },
  { before: "Maler som kræsjer", after: "Alltid riktig format" },
  { before: "Manuell formatering", after: "Automatisk layout" },
  {
    before: "Kopier-lim fra gamle rapporter",
    after: "AI genererer ny tekst",
  },
  { before: "Bildeplassering fra helvete", after: "Drag & drop, ferdig" },
];

export default function ComparisonTable() {
  return (
    <section className="bg-white px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Før vs. Etter
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Se forskjellen selv
          </p>
        </motion.div>

        <motion.div
          className="mt-12 overflow-hidden rounded-2xl border border-gray-200 shadow-sm"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="grid grid-cols-2">
            <div className="bg-gray-50 px-6 py-4 text-center font-semibold text-muted-foreground">
              Før (Word)
            </div>
            <div className="bg-blue-50 px-6 py-4 text-center font-semibold text-primary">
              Etter (Befaro)
            </div>
          </div>
          {comparisons.map((item, index) => (
            <div
              key={index}
              className="grid grid-cols-2 border-t border-gray-100"
            >
              <div className="flex items-center gap-2 px-6 py-4 text-sm text-muted-foreground">
                <X className="h-4 w-4 shrink-0 text-red-400" />
                {item.before}
              </div>
              <div className="flex items-center gap-2 bg-blue-50/30 px-6 py-4 text-sm font-medium text-foreground">
                <Check className="h-4 w-4 shrink-0 text-accent" />
                {item.after}
              </div>
            </div>
          ))}
        </motion.div>

        <motion.div
          className="mt-8 rounded-xl bg-gradient-to-r from-primary to-blue-700 p-6 text-center text-white shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <p className="text-xl font-bold">
            Spar 5+ timer i uken. Det er over 250 timer i året.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
