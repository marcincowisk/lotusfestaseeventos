"use client";

import { useRef, useState, useTransition } from "react";
import { submitContactForm } from "@/app/contato/actions";
import { formatPhoneBR } from "@/lib/utils";
import type { ContactFormState, InterestService } from "@/types";
import { Button } from "@/components/ui/Button";

const EVENT_TYPES = ["Casamento", "Festa", "Aniversário", "Corporativo", "Outro"];
const SERVICES: InterestService[] = [
  "Estruturas",
  "Som",
  "Iluminação",
  "Energia",
  "Experiências / Efeitos especiais",
  "Não sei ainda",
];

const initialState: ContactFormState = { status: "idle" };

/**
 * Formulário controlado que chama a Server Action diretamente (não usa os
 * hooks experimentais useFormState/useFormStatus do react-dom, para não
 * depender de uma versão canary do React) — mantém loading/success/error
 * previsíveis com useState + useTransition, ambos estáveis.
 */
export function ContactForm() {
  const [state, setState] = useState<ContactFormState>(initialState);
  const [isPending, startTransition] = useTransition();
  const [whatsapp, setWhatsapp] = useState("");
  const startedRef = useRef(false);
  const formRef = useRef<HTMLFormElement>(null);

  function trackStart() {
    if (startedRef.current) return;
    startedRef.current = true;
    if (typeof window !== "undefined" && "dataLayer" in window) {
      // @ts-expect-error -- dataLayer é injetado externamente pelo GTM quando configurado
      window.dataLayer?.push({ event: "quote_started" });
    }
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    startTransition(async () => {
      const result = await submitContactForm(state, formData);
      setState(result);
      if (result.status === "success") {
        formRef.current?.reset();
        setWhatsapp("");
        startedRef.current = false;
        if (typeof window !== "undefined" && "dataLayer" in window) {
          // @ts-expect-error -- dataLayer é injetado externamente pelo GTM quando configurado
          window.dataLayer?.push({ event: "quote_submitted" });
        }
      }
    });
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit} onFocus={trackStart} noValidate className="grid gap-6 sm:grid-cols-2">
      {/* Honeypot — invisível para pessoas, não conta como campo real do formulário */}
      <div className="absolute -left-[9999px]" aria-hidden="true">
        <label htmlFor="website">Não preencher</label>
        <input type="text" id="website" name="website" tabIndex={-1} autoComplete="off" />
      </div>

      <Field label="Nome completo" htmlFor="name" error={state.fieldErrors?.name} required>
        <input id="name" name="name" type="text" autoComplete="name" required className={inputClass} />
      </Field>

      <Field label="WhatsApp" htmlFor="whatsapp" error={state.fieldErrors?.whatsapp} required>
        <input
          id="whatsapp"
          name="whatsapp"
          type="tel"
          inputMode="tel"
          autoComplete="tel"
          placeholder="(12) 99999-9999"
          required
          value={whatsapp}
          onChange={(event) => setWhatsapp(formatPhoneBR(event.target.value))}
          className={inputClass}
        />
      </Field>

      <Field label="E-mail" htmlFor="email" error={state.fieldErrors?.email} required>
        <input id="email" name="email" type="email" autoComplete="email" required className={inputClass} />
      </Field>

      <Field label="Tipo de evento" htmlFor="eventType" error={state.fieldErrors?.eventType} required>
        <select id="eventType" name="eventType" required defaultValue="" className={inputClass}>
          <option value="" disabled>
            Selecione
          </option>
          {EVENT_TYPES.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </Field>

      <Field label="Data do evento" htmlFor="eventDate" error={state.fieldErrors?.eventDate}>
        <input id="eventDate" name="eventDate" type="date" className={inputClass} />
      </Field>

      <Field label="Cidade" htmlFor="city" error={state.fieldErrors?.city} required>
        <input id="city" name="city" type="text" required className={inputClass} />
      </Field>

      <Field label="Local do evento" htmlFor="venue" error={state.fieldErrors?.venue}>
        <input id="venue" name="venue" type="text" className={inputClass} />
      </Field>

      <Field label="Número aproximado de convidados" htmlFor="guestCount" error={state.fieldErrors?.guestCount}>
        <input id="guestCount" name="guestCount" type="number" min={0} inputMode="numeric" className={inputClass} />
      </Field>

      <fieldset className="sm:col-span-2">
        <legend className="mb-3 text-small font-medium text-text">
          Serviços de interesse <span className="text-primary">*</span>
        </legend>
        <div className="flex flex-wrap gap-3">
          {SERVICES.map((service) => (
            <label
              key={service}
              className="flex cursor-pointer items-center gap-2 border border-border/40 px-4 py-2.5 text-small text-text/90 transition-colors has-[:checked]:border-primary has-[:checked]:text-primary"
            >
              <input type="checkbox" name="services" value={service} className="accent-[rgb(var(--color-primary))]" />
              {service}
            </label>
          ))}
        </div>
        {state.fieldErrors?.services ? (
          <p className="mt-2 text-small text-error">{state.fieldErrors.services}</p>
        ) : null}
      </fieldset>

      <Field label="Mensagem" htmlFor="message" error={state.fieldErrors?.message} className="sm:col-span-2">
        <textarea id="message" name="message" rows={4} className={inputClass} />
      </Field>

      <div className="sm:col-span-2" aria-live="polite">
        {state.status === "success" ? (
          <p className="mb-4 border border-success/40 bg-success/10 px-4 py-3 text-small text-text">
            {state.message}
          </p>
        ) : null}
        {state.status === "error" && state.message ? (
          <p className="mb-4 border border-error/40 bg-error/10 px-4 py-3 text-small text-text">{state.message}</p>
        ) : null}

        <Button type="submit" disabled={isPending} className="w-full sm:w-auto">
          {isPending ? "Enviando…" : "Solicitar orçamento"}
        </Button>
      </div>
    </form>
  );
}

const inputClass =
  "w-full border border-border/40 bg-transparent px-4 py-3 text-body text-text placeholder:text-muted focus-visible:border-primary";

function Field({
  label,
  htmlFor,
  error,
  required,
  className,
  children,
}: {
  label: string;
  htmlFor: string;
  error?: string;
  required?: boolean;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={className}>
      <label htmlFor={htmlFor} className="mb-2 block text-small font-medium text-text">
        {label} {required ? <span className="text-primary">*</span> : null}
      </label>
      {children}
      {error ? (
        <p className="mt-2 text-small text-error" role="alert">
          {error}
        </p>
      ) : null}
    </div>
  );
}
