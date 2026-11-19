import { z } from "zod";
import "./ContactForm.css";
import { zodResolver } from "@hookform/resolvers/zod";
import { FieldErrors, SubmitHandler, useForm } from "react-hook-form";
import React, { useState } from "react";
import { InputField } from "../Components/InputField";
import { TextAreaField } from "../Components";

const schema = z.object({
  name: z.string().min(1, "El nombre es obligatorio"),
  email: z.string().email("Correo inválido").min(1, "El correo es obligatorio"),
  message: z.string().min(1, "El mensaje es obligatorio"),
});

type FormValues = z.infer<typeof schema>;

export const ContactForm = () => {
  const {
    control,
    handleSubmit,
    reset,
    setFocus,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { name: "", email: "", message: "" },
  });
  const [result, setResult] = useState<{ tone: "success" | "error"; message: string } | null>(null);

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    setResult(null);
    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

    if (!accessKey) {
      setResult({
        tone: "error",
        message: "El formulario no está disponible ahora. Escríbeme directamente por email.",
      });
      return;
    }

    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("email", data.email);
    formData.append("message", data.message);
    formData.append("access_key", accessKey);
    formData.append("subject", "Nuevo contacto desde el portfolio");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const resultData = await response.json();

      if (!response.ok || !resultData.success) {
        throw new Error("Submission failed");
      }

      reset();
      setResult({ tone: "success", message: "Mensaje enviado. Te responderé lo antes posible." });
    } catch {
      setResult({
        tone: "error",
        message: "No se pudo enviar el mensaje. Puedes escribirme directamente por email.",
      });
    }
  };

  const onInvalid = (fieldErrors: FieldErrors<FormValues>) => {
    const firstError = Object.keys(fieldErrors)[0] as keyof FormValues | undefined;
    if (firstError) setFocus(firstError);
  };

  return (
    <div className="contact-form-wrap">
      <form onSubmit={handleSubmit(onSubmit, onInvalid)} noValidate aria-busy={isSubmitting}>
        <InputField
          name="name"
          control={control}
          label="Nombre"
          placeholder="Tu nombre"
          autoComplete="name"
          error={errors.name}
        />
        <InputField
          name="email"
          control={control}
          label="Email"
          type="email"
          placeholder="tu@email.com"
          autoComplete="email"
          error={errors.email}
        />
        <TextAreaField
          name="message"
          control={control}
          label="¿En qué puedo ayudarte?"
          placeholder="Cuéntame brevemente el contexto, el equipo o el proyecto."
          rows={6}
          error={errors.message}
        />
        <button className="contact-submit button button-primary" type="submit" disabled={isSubmitting}>
          <span>{isSubmitting ? "Enviando…" : "Enviar mensaje"}</span>
          <span aria-hidden="true">{isSubmitting ? "·" : "↗"}</span>
        </button>
        <div className="form-status" aria-live="polite" aria-atomic="true">
          {result && <p className={`form-status-${result.tone}`}>{result.message}</p>}
        </div>
      </form>
    </div>
  );
};
