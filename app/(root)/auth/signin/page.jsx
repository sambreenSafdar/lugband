'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';
import Link from 'next/link';
import Image from 'next/image';

const formSchema = z.object({
  password: z.string().min(2, {
    message: 'Password is required.',
  }),
  email: z.string().email(z.string().min(1, { message: 'Email is required.' })),
});

const Signin = () => {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  function onSubmit(values) {
    console.log(values);
  }
  return (
    <div className="min-h-screen flex justify-center items-center mx-auto">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-8 w-[400px]"
        >
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-12 text-center flex items-center flex-col">
              <Image src="/logo.png" alt="logo" width={200} height={40} />
              <h3 className="text-semibold text-lg text-gray-500 mt-10 mb-5">
                Account Sign in
              </h3>
            </div>
            <div className="col-span-12">
              <FormField
                name="email"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <Label>Email Address</Label>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage className="font-light text-sm" />
                  </FormItem>
                )}
              />
            </div>
            <div className="col-span-12">
              <FormField
                name="password"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <Label>Password</Label>
                    <FormControl>
                      <Input type="password" {...field} />
                    </FormControl>
                    <FormMessage className="font-light text-sm" />
                  </FormItem>
                )}
              />
            </div>
          </div>
          <div className="text-center">
            <Button type="submit" className="w-full rounded-full h-12">
              Sign up
            </Button>
            <p className="text-sm mt-8 text-gray-500 bg-gray-100/50 py-5 rounded-md">
              Don&apos;t have an account?
              <Link
                className="underline ml-2 text-green-400"
                href="/auth/signup"
              >
                Create New
              </Link>
            </p>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default Signin;
