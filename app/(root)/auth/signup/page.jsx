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
  firstName: z.string().min(2, {
    message: 'First Name is required.',
  }),
  surName: z.string().min(2, {
    message: 'Surname must be at least 2 characters.',
  }),
  company: z.string().min(2, {
    message: 'Company/Organization name is required.',
  }),
  phone: z.string().min(2, {
    message: 'Mobile no is required.',
  }),
  email: z.string().email(z.string().min(1, { message: 'Email is required.' })),
});

const Signup = () => {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: '',
      surName: '',
      email: '',
      phone: '',
      company: '',
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
                Account Sign up
              </h3>
            </div>
            <div className="col-span-12 md:col-span-6">
              <FormField
                name="firstName"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <Label>
                      First Name <span className="text-destructive">*</span>
                    </Label>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage className="font-light text-sm" />
                  </FormItem>
                )}
              />
            </div>
            <div className="col-span-12 md:col-span-6">
              <FormField
                name="surName"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <Label>
                      Surname <span className="text-destructive">*</span>
                    </Label>
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
                name="company"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <Label>
                      Company/Organization{' '}
                      <span className="text-destructive">*</span>
                    </Label>
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
                name="phone"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <Label>
                      Mobile no. <span className="text-destructive">*</span>
                    </Label>
                    <FormControl>
                      <PhoneInput
                        className="border h-[42px] rounded-md pl-3 bg-white"
                        placeholder="(000) 000-00000"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="font-light text-sm" />
                  </FormItem>
                )}
              />
            </div>
            <div className="col-span-12">
              <FormField
                name="email"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <Label>
                      Email <span className="text-destructive">*</span>
                    </Label>
                    <FormControl>
                      <Input {...field} />
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
            <p className="text-xs mt-3 text-gray-500">
              By singning up, you are agree to the{' '}
              <Link className="underline" href="/terms">
                Terms
              </Link>{' '}
              and{' '}
              <Link className="underline" href="privacy-policy">
                Privacy Policy
              </Link>
            </p>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default Signup;
