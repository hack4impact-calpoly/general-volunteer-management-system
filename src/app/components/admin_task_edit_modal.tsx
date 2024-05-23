"use client";
import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
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
import {useState} from 'react';

const TimeInput: React.FC = () => {
      const [time, setTime] = useState<string>('');

      const handleTime = (event: React.ChangeEvent<HTMLInputElement>) => {
         setTime(event.target.value);
       }; 

       return (
         <>
         <Input
            type='time' value={time} onChange={handleTime}
            className="focus-visible:ring-offset-0 focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-ring px-3 py-2 h-14 w-30 text-lg"
         />
         </>
       )
};

const AdminTaskEditModal: React.FC<{visible?: boolean, onClose: () => void, event: string, location: string, address: string}> = ({
   visible = true,
   onClose,
   event,
   location,
   address
}) => {
   const formSchema = z.object({
      eventName: z.string(),
      locationName: z.string(),
      address: z.string(),
      time1: z.string(),
      time2: z.string(),
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

         <div className = "flex justify-center relative w-[800px] h-[800px] mt-28 mx-auto border border-primary-color shadow-[0_10px_24px_0px_rgb(49,77,137,0.15)]">
            <div className='text-center my-32 font-medium left-1/2 right-1/2 content-center w-[500px]'>

               <h1 className='text-4xl text-primary-color'>Edit Event Information</h1>
         
               <FormField
                  control={form.control}
                  name="eventName"
                  render={({ field }) => (
                     <FormItem>
                        <FormLabel className="text-primary-text-color font-medium text-lg leading-5 mb-2 block float-left mt-8">
                        Event Name
                        </FormLabel>
                        <Input
                           defaultValue={event}
                           className="block focus-visible:ring-offset-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring px-3 py-2 h-14 w-full border border-primary-color"
                           {...field}
                        />
                     <FormMessage/>
                     </FormItem>
                  )}
               />
               <FormField
                  control={form.control}
                  name="locationName"
                  render={({ field }) => (
                     <FormItem>
                        <FormLabel className="text-primary-text-color font-medium text-lg leading-5 mb-2 block float-left mt-7">
                        Location Name
                        </FormLabel>
                        <Input
                           defaultValue={location}
                           className="block focus-visible:ring-offset-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring px-3 py-2 h-14 w-full border border-primary-color"
                           {...field}
                        />
                     <FormMessage/>
                     </FormItem>
                  )}
               />
               <FormField
                  control={form.control}
                  name="address"
                  render={({ field }) => (
                     <FormItem>
                        <FormLabel className="text-primary-text-color font-medium text-lg leading-5 mb-2 block float-left mt-7">
                        Address
                        </FormLabel>
                        <Input
                           defaultValue={address}
                           className="block focus-visible:ring-offset-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring px-3 py-2 h-14 w-full border border-primary-color"
                           {...field}
                        />
                     <FormMessage/>
                     </FormItem>
                  )}
               />
               <FormLabel className="text-primary-text-color font-medium text-lg leading-5 mb-2 block float-left mt-7">
                     Time
                  </FormLabel>
               <div 
               className="flex w-full justify-center"
               >
                  <FormField
                     control={form.control}
                     name="time1"
                     render={({ field }) => (
                        <FormItem>  
                              <TimeInput />
                        </FormItem>
                     )}
                  />

                  <FormLabel className="text-primary-text-color font-medium text-lg leading-5 m-4">
                     to
                  </FormLabel>

                  <FormField
                     control={form.control}
                     name="time2"
                     render={({ field }) => (
                        <FormItem>
                           <TimeInput />
                        </FormItem>
                     )}
                  />
               
               </div>
                     
               <Button 
               className='hover:text-white w-52 text-primary-text-color bg-white border-2 border-primary-color h-14 rounded-none mr-4 mt-24'
               onClick={onClose}
               >
               Cancel
               </Button>
               <Button className='hover:text-primary-link-hover-color hover:text-white w-52 text-white bg-primary-color border-2 border-primary-color h-14 rounded-none ml-4'>
               Save Changes
               </Button>
         
            </div>
         </div>
      </form>
   </Form>
  );
};

export default AdminTaskEditModal;