"use client";

import { motion } from "framer-motion";
import { FileText, Play } from "lucide-react";
import AppScreenshot from "./AppScreenshot";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white px-6 pt-16 pb-24 sm:pt-24 sm:pb-32 lg:px-8">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-blue-50/50 to-white" />
      <div className="mx-auto max-w-4xl text-center">
        <motion.div {...fadeInUp}>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-2 text-sm font-medium text-primary">
            <FileText className="h-4 w-4" />
            AI-drevet rapportverktøy for takstmenn
          </div>
        </motion.div>

        <motion.h1
          className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Slutt å knote med Word-maler.{" "}
          <span className="text-primary">
            Skriv takstrapporter på minutter.
          </span>
        </motion.h1>

        <motion.p
          className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-muted-foreground"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Befaro er bygget for norske takstmenn som vil bruke tiden sin på
          befaring – ikke formatering.
        </motion.p>

        <motion.div
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <a
            href="#pricing"
            className="inline-flex h-12 items-center justify-center rounded-lg bg-primary px-8 text-base font-semibold text-primary-foreground shadow-lg transition-all hover:bg-blue-700 hover:shadow-xl"
          >
            Prøv gratis
          </a>
          <a
            href="#demo"
            className="inline-flex h-12 items-center justify-center gap-2 rounded-lg border border-gray-200 bg-white px-8 text-base font-semibold text-foreground transition-all hover:bg-gray-50"
          >
            <Play className="h-4 w-4" />
            Se demo
          </a>
        </motion.div>
      </div>

      <motion.div
        className="mx-auto mt-16 max-w-6xl"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.4 }}
      >
        <AppScreenshot />
      </motion.div>
    </section>
  );
}
