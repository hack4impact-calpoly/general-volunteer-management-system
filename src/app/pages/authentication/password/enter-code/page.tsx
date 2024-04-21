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
import { LockIcon } from "lucide-react";

// Zod schema to define form parameters

const formSchema = z.object({
  code: z.string(),
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
          <div className="mx-auto w-1/2 shadow-xl border-inherit border p-10 mt-32">
            <div>
              <div className="flex items-center justify-center">
                <LockIcon className="text-primary-color mb-4" size={42} />
              </div>
              <div className="flex items-center justify-center">
                <h2 className="text-3xl font-semibold text-primary-text-color mb-4">
                  Enter Reset Code
                </h2>
              </div>
              <div className="flex items-center justify-center">
                <h1 className="mb-4">
                  Please enter the authentication code sent to your email
                </h1>
              </div>
              <FormField
                control={form.control}
                name="code"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input className="h-14" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <p className="text-right">Resend code</p>
              <Link href="pages/authentication/password/confirm-reset">
                <Button
                  className="h-14 w-full mt-7 bg-primary-color text-lg"
                  type="submit"
                >
                  Verify
                </Button>
              </Link>
            </div>
          </div>
        </form>
      </Form>
    </>
  );
}
