"use client";

import { Button, Input, Textarea } from "@nextui-org/react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { userValidation, FormData } from "@/lib/validations/user";
import { ChangeEvent, useState } from "react";
import profile from "@/public/assets/profile.svg";
import Image from "next/image";

interface IProps {
  user: {
    id: string;
    objectId: string;
    username: string;
    name: string;
    bio: string;
    image: string;
  };
  btnTitle: string;
}
const submitData = (data: FormData) => {
  console.log("submitted", data);
};

const AccountDemo = ({ user, btnTitle }: IProps) => {
  // const [accountValues, setAccountValues] = useState<IProps>({
  //   user: {
  //     id: "",
  //     objectId: "",
  //     username: "",
  //     name: "",
  //     bio: "",
  //     image: "",
  //   },
  //   btnTitle: "Continue",
  // });

  const handleImage = (e: ChangeEvent) => {
    e.preventDefault();
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(userValidation),
    defaultValues: {
      profile_photo: user?.image || "",
      name: user?.name || "",
      username: user?.username || "",
      bio: user?.bio || "",
    },
  });

  return (
    <div className="space-y-8 ">
      <form onSubmit={handleSubmit(submitData)} className="space-y-8 ">
        <div className="upload flex items-center gap-4 ">
          <label htmlFor="photofile_input" className="account-form_image-label">
            {user.image ? (
              <Image
                src={user.image}
                priority
                alt="profile_photo"
                width={96}
                height={96}
                className="rounded-full object-contain"
                {...register("profile_photo")}
              />
            ) : (
              <Image
                className="object-contain"
                src={profile}
                alt="profile_photo"
                width={24}
                height={24}
              />
            )}
          </label>

          <input
            type="file"
            id="photofile_input"
            accept="image/*"
            placeholder="Upload a Photo"
            className="account-form_image-input"
            onChange={(e) => handleImage(e)}
          />
        </div>
        <Input
          validationState={errors.name ? "invalid" : "valid"}
          errorMessage={errors.name?.message}
          variant={errors.name ? "bordered" : "flat"}
          isRequired
          type="text"
          label="Name"
          labelPlacement={"outside"}
          placeholder="Enter your Name"
          {...register("name")}
        />
        <Input
          validationState={errors.username ? "invalid" : "valid"}
          errorMessage={errors.username?.message}
          variant={errors.username ? "bordered" : "flat"}
          type="text"
          label="Username"
          labelPlacement={"outside"}
          placeholder="Enter your username"
          {...register("name")}
        />
        <Textarea
          validationState={errors.bio ? "invalid" : "valid"}
          errorMessage={errors.bio?.message}
          variant={errors.bio ? "bordered" : "flat"}
          label="Bio"
          labelPlacement={"outside"}
          placeholder="Enter your bio"
          {...register("bio")}
        />
        <Button
          variant="shadow"
          type="submit"
          className="bg-primary-500 w-full hover:opacity-80"
        >
          {btnTitle}
        </Button>
      </form>
    </div>
  );
};

export default AccountDemo;
