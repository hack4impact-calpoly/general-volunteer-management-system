"use client";
import Link from "next/link";
import { PasswordInput } from "@components/password-input";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
// Form handling imports
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

export default function Page() {
  const formSchema = z.object({
    email: z.string().email("Not a valid email"),
    password: z.string(),
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="flex items-center justify-center h-screen">
          <div className="w-5/12 h-4/6 border border-primary-color shadow-[0_10px_24px_0px_rgb(49,77,137,0.15)]">
            <div className="m-auto left-1/2 right-1/2 text-left w-8/12 text-primary-text-color">
              <h1 className="font-medium text-4xl mt-16 mb-10">Login</h1>
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-primary-text-color font-medium text-lg leading-5 mb-2 block">
                      Email
                    </FormLabel>
                    <FormControl>
                      <Input
                        className="block focus-visible:ring-offset-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring px-3 py-2 h-14 w-full border border-primary-color"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-primary-text-color font-medium text-lg leading-5 mb-2 mt-6 block">
                      Password
                    </FormLabel>
                    <FormControl>
                      <PasswordInput
                        className="focus-visible:ring-offset-0 h-14 w-full border border-primary-color"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <p className="hover:text-primary-link-hover-color font-medium text-sm leading-5 text-right mt-2.5 mb-3.5">
                <Link href="/pages/authentication/password/forgot-password">
                  Forgot password?
                </Link>
              </p>
              <Button
                className="block hover:shadow-[0_10px_24px_0px_rgb(49,77,137,0.15)] w-full h-14 bg-primary-color text-lg text-white font-medium"
                type="submit"
              >
                Log in
              </Button>
              <p className="text-sm leading-5 text-center mt-10">
                Don&apos;t have an account?{" "}
                <Link
                  className="hover:text-primary-link-hover-color font-medium"
                  href="/pages/authentication/create-account"
                >
                  Create Account
                </Link>
              </p>
            </div>
          </div>
        </div>
      </form>
    </Form>
  );
}
