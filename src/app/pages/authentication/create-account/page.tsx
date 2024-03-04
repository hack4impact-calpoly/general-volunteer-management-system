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
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { PasswordInput } from "@components/password-input";

// Zod schema to define form parameters
const phoneRegex = new RegExp(
  /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/
);
const min_firstname_length = 1;
const min_lastname_length = 1;
const min_password_length = 8;

const formSchema = z.object({
  first_name: z.string().min(min_firstname_length),
  last_name: z.string().min(min_lastname_length),
  email: z.string().email("Not a valid email"),
  phone_number: z.string().regex(phoneRegex),
  password: z.string().min(min_password_length),
});

function onSubmit(values: z.infer<typeof formSchema>) {
  console.log(values);
}

export default function Page() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <div className="mx-auto w-1/3 shadow-xl border-inherit border p-10 mt-32">
          <div className="">
            <h2 className="text-3xl font-semibold text-primary-text-color">
              Create an Account
            </h2>
            <div className="flex">
              <FormField
                control={form.control}
                name="first_name"
                render={({ field }) => (
                  <FormItem className="w-1/2 mr-4">
                    <FormLabel className="text-primary-text-color">
                      First Name
                    </FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="last_name"
                render={({ field }) => (
                  <FormItem className="w-1/2">
                    <FormLabel className="text-primary-text-color">
                      Last Name
                    </FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-primary-text-color">
                    Email
                  </FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phone_number"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-primary-text-color">
                    Phone Number
                  </FormLabel>
                  <FormControl>
                    <Input {...field} />
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
                  <FormLabel className="text-primary-text-color">
                    Password
                  </FormLabel>
                  <FormControl>
                    <PasswordInput {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button className="w-full mt-7 bg-primary-color" type="submit">
              Send
            </Button>
            <div className="flex justify-end mt-1">
              <p className="text-sm">Already have an account?</p>
              <Link
                className="text-sm ml-1 hover:text-primary-link-hover-color"
                href="/pages/authentication/login"
              >
                Log In
              </Link>
            </div>
          </div>
        </div>
      </form>
    </Form>
  );
}
