"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "Jeg brukte å sitte til sent på kvelden med rapporter. Nå er jeg ferdig før jeg drar hjem fra befaring.",
    name: "Einar Johnsen",
    title: "Takstingeniør",
  },
  {
    quote:
      "Endelig en app som forstår hvordan vi jobber. Word-maler er historie.",
    name: "Trygve Berg",
    title: "Autorisert takstmann",
  },
];

export default function Testimonials() {
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
            Hva takstmenn sier
          </h2>
        </motion.div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              <Quote className="h-8 w-8 text-primary/20" />
              <blockquote className="mt-4 text-lg leading-relaxed text-foreground">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>
              <div className="mt-6 border-t border-gray-100 pt-4">
                <p className="font-semibold text-foreground">
                  {testimonial.name}
                </p>
                <p className="text-sm text-muted-foreground">
                  {testimonial.title}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
