"use client";

import { motion } from "framer-motion";

export default function FinalCTA() {
  return (
    <section className="bg-gradient-to-br from-primary to-blue-700 px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-3xl text-center">
        <motion.h2
          className="text-3xl font-bold tracking-tight text-white sm:text-4xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Klar til å spare tid på rapportskriving?
        </motion.h2>
        <motion.p
          className="mt-4 text-lg text-blue-100"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Bli med over 100+ takstmenn som allerede har byttet ut Word.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <a
            href="#"
            className="mt-8 inline-flex h-14 items-center justify-center rounded-lg bg-white px-10 text-base font-semibold text-primary shadow-lg transition-all hover:bg-blue-50 hover:shadow-xl"
          >
            Start gratis prøveperiode
          </a>
        </motion.div>
      </div>
    </section>
  );
}
