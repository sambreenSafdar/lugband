import React from 'react';
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
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';
import { Separator } from '../ui/separator';

const formSchema = z.object({
  channel: z.string().min(2, {
    message: 'Channel name is required.',
  }),
  type: z.string().min(2, {
    message: 'Type is required.',
  }),
  phone: z.string().min(2, {
    message: 'Mobile no is required.',
  }),
});

const NewChannel = ({ onChange }) => {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      channel: '',
      phone: '',
      type: '',
    },
  });

  function onSubmit(values) {
    console.log(values);
  }

  const handleCancel = (e) => {
    e.preventDefault();
    onChange();
  };
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12">
            <FormField
              name="channel"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <Label>
                    Channel Name <span className="text-destructive">*</span>
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
              control={form.control}
              name="type"
              render={({ field }) => (
                <FormItem>
                  <Label>
                    Type <span className="text-destructive">*</span>
                  </Label>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a type" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="bag-tracking">Bag Tracking</SelectItem>
                    </SelectContent>
                  </Select>
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
          <div className="col-span-12 mt-3">
            <Separator />
          </div>
          <div className="col-span-12">
            <div className="flex gap-4 justify-end w-full">
              <Button
                type="submit"
                className="bg-gradient-to-r from-green-600 rounded-full to-green-500"
              >
                Create
              </Button>
              <Button
                className="rounded-full bg-white"
                variant="outline"
                onClick={handleCancel}
              >
                Cancel
              </Button>
            </div>
          </div>
        </div>
      </form>
    </Form>
  );
};

export default NewChannel;
