"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { site } from "@/lib/site";

// Form "estetico": per ora apre il client email con il messaggio precompilato.
// In futuro: collegare Supabase o un servizio come Formspree/Resend.
export default function ContactForm() {
  const [form, setForm] = useState({ nome: "", email: "", tipo: "Ritratto", messaggio: "" });
  const [sent, setSent] = useState(false);

  const update = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const submit = (e) => {
    e.preventDefault();
    const body = encodeURIComponent(
      `Nome: ${form.nome}\nEmail: ${form.email}\nTipo di progetto: ${form.tipo}\n\n${form.messaggio}`
    );
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(
      `Human Circus — richiesta: ${form.tipo}`
    )}&body=${body}`;
    setSent(true);
  };

  const field =
    "w-full bg-transparent border-b border-bone/20 py-4 text-bone placeholder:text-smoke/60 focus:outline-none focus:border-gold transition-colors";

  return (
    <form onSubmit={submit} className="space-y-8 max-w-2xl">
      <div className="grid md:grid-cols-2 gap-8">
        <input required placeholder="Il tuo nome" value={form.nome} onChange={update("nome")} className={field} />
        <input required type="email" placeholder="La tua email" value={form.email} onChange={update("email")} className={field} />
      </div>
      <div>
        <label className="font-mono text-[10px] tracking-[0.25em] uppercase text-smoke block mb-3">
          Tipo di progetto
        </label>
        <select value={form.tipo} onChange={update("tipo")} className={`${field} cursor-pointer [&>option]:bg-ink`}>
          <option>Ritratto</option>
          <option>Reportage / evento</option>
          <option>Video</option>
          <option>Progetto su misura</option>
        </select>
      </div>
      <textarea
        required
        rows={5}
        placeholder="Raccontami l'idea. Anche in due righe."
        value={form.messaggio}
        onChange={update("messaggio")}
        className={`${field} resize-none`}
      />
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        type="submit"
        className="font-mono text-[11px] tracking-[0.3em] uppercase bg-bone text-ink px-12 py-5 hover:bg-gold transition-colors duration-300"
      >
        Invia il messaggio
      </motion.button>
      {sent && (
        <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-gold">
          Si è aperto il tuo programma di posta — premi invia da lì. ✓
        </p>
      )}
    </form>
  );
}
