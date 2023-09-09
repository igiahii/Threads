import * as z from "zod"


export type FormData ={
    profile_photo : string ,
    name : string ,
    username : string ,
    bio : string
}

export const userValidation : z.ZodType<FormData> = z.object({
    profile_photo : z.string().url().nonempty() ,
    name : z.string().min(3).max(30),
    username: z.string().min(3).max(30),
    bio: z.string().min(3).max(1000),

})