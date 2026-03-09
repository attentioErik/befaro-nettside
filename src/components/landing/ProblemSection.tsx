"use client";

import { motion } from "framer-motion";
import { FileWarning, Clock, RefreshCw, Frown } from "lucide-react";

const problems = [
  {
    icon: FileWarning,
    title: "Word-kaos",
    description:
      "Maler som ødelegges, formatering som hopper, bilder som forsvinner",
  },
  {
    icon: Clock,
    title: "Tidkrevende",
    description:
      "Timer på kontoret etter hver befaring for å skrive rapport",
  },
  {
    icon: RefreshCw,
    title: "Gjentagende arbeid",
    description:
      "Kopier-lim fra gamle rapporter, samme tekst om og om igjen",
  },
  {
    icon: Frown,
    title: "Frustrerende",
    description:
      "Teknisk klønete løsninger som burde vært enklere",
  },
];

export default function ProblemSection() {
  return (
    <section className="bg-muted px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Kjenner du deg igjen?
          </h2>
        </motion.div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {problems.map((problem, index) => (
            <motion.div
              key={problem.title}
              className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-red-50">
                  <problem.icon className="h-5 w-5 text-red-500" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">
                    {problem.title}
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {problem.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          className="mt-12 text-center text-xl font-semibold text-foreground"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Det finnes en bedre måte.
        </motion.p>
      </div>
    </section>
  );
}
