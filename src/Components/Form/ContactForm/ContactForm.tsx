import { z } from "zod";
import "./ContactForm.css";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
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
  const { control, handleSubmit, formState: { errors } } = useForm({ resolver: zodResolver(schema) });
  const [result, setResult] = useState("");

  const onSubmit = async (data) => {
    setResult("Enviando....");
    const formData = new FormData();
    
    formData.append("name", data.name);
    formData.append("email", data.email);
    formData.append("message", data.message);
    formData.append("access_key", "c470ee7c-3eae-48e1-ba6f-6bebbf180580");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const resultData = await response.json();

      if (resultData.success) {
        alert("Mensaje enviado correctamente");
      } else {
        alert(resultData.message || "Error al enviar el mensaje");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Error al enviar el mensaje");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <InputField
          name="name"
          control={control}
          label="Nombre"
          placeholder="Nombre Completo"
          error={errors.name}
        />
        <InputField
          name="email"
          control={control}
          label="Email"
          type="email"
          placeholder="Introduce el email"
          error={errors.email}
        />
        <TextAreaField
          name="message"
          control={control}
          label="Mensaje"
          placeholder="Introduce el mensaje"
          rows={8}
          error={errors.message}
        />
        <button className="contact-submit" type="submit">Enviar</button>
      </form>
    </div>
  );
};
