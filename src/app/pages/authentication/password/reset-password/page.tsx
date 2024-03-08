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
import { PasswordInput } from "@components/password-input";
import { ArrowLeftIcon } from "lucide-react";

// Zod schema to define form parameters
const min_password_length = 8;

const formSchema = z
  .object({
    new_password: z.string().min(min_password_length),
    confirm_new_password: z.string().min(min_password_length),
  })
  .refine((data) => data.new_password === data.confirm_new_password, {
    message: "Passwords do not match",
    path: ["confirm_new_password"],
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
        <ArrowLeftIcon className="absolute -mt-48 ml-16" size={42} />
      </Link>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <div className="mx-auto w-1/3 shadow-xl border-inherit border p-10 mt-64">
            <div>
              <h2 className="text-3xl font-semibold text-primary-text-color mb-8">
                Reset Password
              </h2>
              <FormField
                control={form.control}
                name="new_password"
                render={({ field }) => (
                  <FormItem className="mb-6">
                    <FormLabel className="text-primary-text-color">
                      New Password
                    </FormLabel>
                    <FormControl>
                      <PasswordInput {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="confirm_new_password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-primary-text-color">
                      Confirm New Password
                    </FormLabel>
                    <FormControl>
                      <PasswordInput {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button className="w-full mt-7 bg-primary-color" type="submit">
                Submit
              </Button>
            </div>
          </div>
        </form>
      </Form>
    </>
  );
}
