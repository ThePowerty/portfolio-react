import { z } from "zod";
import "./ContactForm.css";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import React from "react";
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
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
  });

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data);
  };

  return (
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
  );
};
