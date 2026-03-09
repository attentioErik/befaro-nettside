"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Må jeg være teknisk for å bruke appen?",
    answer:
      "Nei, Befaro er designet for å være enkel. Hvis du kan bruke en smarttelefon, kan du bruke Befaro.",
  },
  {
    question: "Følger rapportene NS 3600?",
    answer:
      "Ja, alle tilstandsgrader og seksjoner er i henhold til Norsk Standard 3600.",
  },
  {
    question: "Kan jeg bruke mine egne maler?",
    answer:
      "Foreløpig bruker appen vår standardmal, men vi jobber med støtte for egendefinerte maler.",
  },
  {
    question: "Hvordan fungerer AI-assistenten?",
    answer:
      "Du skriver stikkord eller korte notater, og AI-en utvider dette til profesjonelle beskrivelser. Du har alltid full kontroll og kan redigere teksten.",
  },
  {
    question: "Er dataene mine trygge?",
    answer:
      "Ja, all data lagres sikkert i skyen med kryptering. Vi deler aldri data med tredjeparter.",
  },
];

function FAQItem({
  question,
  answer,
  index,
}: {
  question: string;
  answer: string;
  index: number;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      className="border-b border-gray-200"
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between py-5 text-left"
      >
        <span className="text-base font-medium text-foreground">
          {question}
        </span>
        <ChevronDown
          className={`h-5 w-5 shrink-0 text-muted-foreground transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-sm leading-relaxed text-muted-foreground">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  return (
    <section id="faq" className="bg-muted px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-2xl">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Vanlige spørsmål
          </h2>
        </motion.div>

        <div className="mt-12">
          {faqs.map((faq, index) => (
            <FAQItem
              key={faq.question}
              question={faq.question}
              answer={faq.answer}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
