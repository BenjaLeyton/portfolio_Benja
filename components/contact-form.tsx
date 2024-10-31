// contact-form.tsx
"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Form, FormControl, FormField, FormItem, FormMessage } from "./ui/form";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { useState } from "react";

const formSchema = z.object({
  username: z.string().min(2).max(50),
  email: z.string().email(),
  message: z.string(),
});

const ContactForm = () => {
  const [sucessForm, setSucessForm] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsLoading(true);
    const response = await fetch("/api/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    });
    if (response.status === 200) {
      setSucessForm(true);
    }
    setIsLoading(false);
  };

  if (sucessForm) {
    return <h4 className="text-2xl text-green-600">Formulario se ha enviado con éxito ✌🏽</h4>;
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-10">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  placeholder="Tu nombre"
                  {...field}
                  className="dark:bg-slate-800 text-lg px-4 py-3"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  placeholder="Tu email"
                  {...field}
                  className="dark:bg-slate-800 text-lg px-4 py-3"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Textarea
                  placeholder="Escribe tu mensaje..."
                  {...field}
                  className="dark:bg-slate-800 text-lg px-4 py-3"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button 
          type="submit" 
          disabled={isLoading} 
          className="text-lg px-6 py-3 bg-blue-500 text-white hover:bg-blue-600 dark:bg-blue-500 dark:hover:bg-blue-600 dark:text-white transition-colors"
        >
          {isLoading ? "Enviando..." : "Enviar"}
        </Button>
      </form>
    </Form>
  );
};

export default ContactForm;
