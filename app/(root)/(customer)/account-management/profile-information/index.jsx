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
  accountName: z.string().min(2, {
    message: 'Account Name is required.',
  }),
  address: z.string().min(2, {
    message: 'Address is required.',
  }),
  city: z.string().min(2, {
    message: 'City is required.',
  }),
  state: z.string().min(2, {
    message: 'State is required.',
  }),
  zip: z.string().min(2, {
    message: 'Zip is required.',
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
      accountName: '',
      email: '',
      phone: '',
      address: '',
      city: '',
      zip: '',
    },
  });

  function onSubmit(values) {
    console.log(values);
  }
  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-semibold text-gray-400">
              Account Information
            </h2>
            <Button type="submit" className="rounded-full bg-green-500">
              Update
            </Button>
          </div>
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-12">
              <Separator />
            </div>
            <div className="col-span-1"></div>
            <div className="col-span-10">
              <div className="grid grid-cols-12 gap-4">
                <div className="col-span-12">
                  <FormField
                    name="accountName"
                    control={form.control}
                    render={({ field }) => (
                      <FormItem>
                        <Label>Account Name</Label>
                        <FormControl>
                          <Input {...field} className="rounded-full" />
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
                        <Label>Email</Label>
                        <FormControl>
                          <Input {...field} className="rounded-full" />
                        </FormControl>
                        <FormMessage className="font-light text-sm" />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="col-span-12">
                  <FormField
                    name="address"
                    control={form.control}
                    render={({ field }) => (
                      <FormItem>
                        <Label>Address</Label>
                        <FormControl>
                          <Input {...field} className="rounded-full" />
                        </FormControl>
                        <FormMessage className="font-light text-sm" />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="col-span-12">
                  <FormField
                    name="city"
                    control={form.control}
                    render={({ field }) => (
                      <FormItem>
                        <Label>City</Label>
                        <FormControl>
                          <Input {...field} className="rounded-full" />
                        </FormControl>
                        <FormMessage className="font-light text-sm" />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="col-span-12 md:col-span-6">
                  <FormField
                    name="state"
                    control={form.control}
                    render={({ field }) => (
                      <FormItem>
                        <Label>State</Label>
                        <FormControl>
                          <Input {...field} className="rounded-full" />
                        </FormControl>
                        <FormMessage className="font-light text-sm" />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="col-span-12 md:col-span-6">
                  <FormField
                    name="zip"
                    control={form.control}
                    render={({ field }) => (
                      <FormItem>
                        <Label>Zip</Label>
                        <FormControl>
                          <Input {...field} className="rounded-full" />
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
                            className="border h-[42px] rounded-full pl-3 bg-white"
                            placeholder="(000) 000-00000"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage className="font-light text-sm" />
                      </FormItem>
                    )}
                  />
                </div>
              </div>
            </div>
            <div className="col-span-1"></div>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default ProfileInformation;
