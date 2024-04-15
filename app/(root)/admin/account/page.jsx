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
import { Separator } from '@/components/ui/separator';

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

const ProfileInformation = () => {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: 'admin',
      surName: 'admin',
      email: 'admin@example.com',
      phone: '+1 234 567 8901',
      company: 'abc',
    },
  });

  function onSubmit(values) {
    console.log(values);
  }
  return (
    <div>
      <h2 className="text-lg font-semibold text-gray-400 mb-4">
        Profile Information
      </h2>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-12 md:col-span-10">
              <Separator />
            </div>
            <div className="col-span-12 md:col-span-5">
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
            <div className="col-span-12 md:col-span-5">
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
            <div className="col-span-12 md:col-span-5">
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
            <div className="col-span-12 md:col-span-5">
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
            <div className="col-span-12 md:col-span-5">
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
            <div className="col-span-12 md:col-span-10 mt-4">
              <Separator />
            </div>
          </div>
          <div className="">
            <Button type="submit" variant="outline" className="rounded-full">
              Save Changes
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default ProfileInformation;
