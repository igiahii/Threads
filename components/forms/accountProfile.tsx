// 'use client'
// import { Button } from "@/components/ui/button";
// import {
//   Form,
//   FormControl,
//   FormDescription,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from "@/components/ui/form";
// import { Input } from "@/components/ui/input";
// import { useForm } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { userValidation } from "@/lib/validations/user";
// import * as z from "zod";

// interface Props {
//   user: {
//     id: string;
//     objectId: string;
//     username: string;
//     name: string;
//     bio: string;
//     image: string;
//   };
//   btnTitle: string;
// }

// function onSubmit(values: z.infer<typeof userValidation>) {
//   // Do something with the form values.
//   // ✅ This will be type-safe and validated.
//   console.log(values);
// }

// const AccountProfile = ({ user, btnTitle }: Props) => {
//   const form = useForm({
//     resolver: zodResolver(userValidation),
//     defaultValues: {
//       profile_photo: "",
//       name: "",
//       username: "",
//       bio: "",
//     },
//   });
    
//   return (
//     <Form {...form}>
//       <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
//         <FormField
//           control={form.control}
//           name="username"
//           render={({ field }: { field: any }) => (
//             <FormItem>
//               <FormLabel>Username</FormLabel>
//               <FormControl>
//                 <Input placeholder="shadcn" {...field} />
//               </FormControl>
//               <FormDescription>
//                 This is your public display name.
//               </FormDescription>
//               <FormMessage />
//             </FormItem>
//           )}
//         />
//         <Button type="submit">{btnTitle}</Button>
//       </form>
//     </Form>
//   );
// };

// export default AccountProfile;
