"use client";
import Link from "next/link";
// Form handling imports
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
// Shadcn imports
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { ArrowLeftIcon } from "lucide-react";

// Zod schema to define form parameters

const formSchema = z.object({
  email: z.string().email("Not a valid email"),
});

function onSubmit(values: z.infer<typeof formSchema>) {
  console.log(values);
}

export default function Page() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  return (
    <>
      <Link href="/pages/authentication/login">
        <ArrowLeftIcon className="absolute -mt-16 ml-16" size={42} />
      </Link>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <div className="mx-auto w-1/3 shadow-xl border-inherit border p-10 mt-32">
            <div className="">
              <h2 className="text-3xl font-semibold text-primary-text-color mb-4">
                Forgot Password
              </h2>
              <h1 className="mb-4">
                Please enter the email associated with your account to receive a
                reset link.
              </h1>
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-primary-text-color font-medium text-lg">
                      Email
                    </FormLabel>
                    <FormControl>
                      <Input className="h-14" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button
                className="h-14 w-full mt-7 bg-primary-color text-lg"
                type="submit"
              >
                Send
              </Button>
            </div>
          </div>
        </form>
      </Form>
    </>
  );
}
