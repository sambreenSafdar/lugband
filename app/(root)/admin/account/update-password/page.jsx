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
  oldpassword: z.string().min(2, {
    message: 'Old password is required.',
  }),
  newpassword: z.string().min(2, {
    message: 'New password is required.',
  }),
  confirmpassword: z.string().min(2, {
    message: 'Confirm password is required.',
  }),
});

const UpdatePassword = () => {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      oldpassword: '',
      newpassword: '',
      confirmpassword: '',
    },
  });

  function onSubmit(values) {
    console.log(values);
  }
  return (
    <div>
      <h2 className="text-lg font-semibold text-gray-400 mb-4">
        Update Password
      </h2>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-12 md:col-span-10">
              <Separator />
            </div>
            <div className="col-span-12 md:col-span-5">
              <FormField
                name="oldpassword"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <Label>
                      Old Password <span className="text-destructive">*</span>
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
                name="newpassword"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <Label>
                      New Password <span className="text-destructive">*</span>
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
                name="confirmpassword"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <Label>
                      Confirm New Password
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
            <div className="col-span-12 md:col-span-10 mt-4">
              <Separator />
            </div>
          </div>
          <div className="">
            <Button type="submit" variant="outline" className="rounded-full">
              Update Password
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default UpdatePassword;
