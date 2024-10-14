import { z } from 'zod'
import parsePhoneNumber from 'libphonenumber-js'

export const stringSchema = z.string({
  required_error: 'Please Enter This Field',
  invalid_type_error: 'Please Enter This Field',
})

export const numberSchema = z.number({
  required_error: 'Please Enter This Field',
})

export const dateSchema = z.date({
  required_error: 'Please Enter This Field',
})

export const booleanSchema = z.boolean({
  required_error: 'Please Enter This Field',
})

export const emailSchema = z
  .string({ required_error: 'Please Enter Email' })
  .min(1, 'Please Enter Email')
  .email('Email is not valid')

export const phoneSchema = z
  .string({ required_error: 'Please Enter Phone Number' })
  .min(1, 'Please Enter Phone Number')
  .transform((arg, ctx) => {
    const phone = parsePhoneNumber(arg, {
      // set this to use a default country when the phone number omits country code
      defaultCountry: 'VN',

      // set to false to require that the whole string is exactly a phone number,
      // otherwise, it will search for a phone number anywhere within the string
      extract: false,
    })

    // when it's good
    if (phone && phone.isValid()) {
      return phone.number.replace('+84', '0')
    }

    // when it's not
    ctx.addIssue({
      code: z.ZodIssueCode.custom,
      message: 'Phone Number is not valid',
    })
    return z.NEVER
  })


export const userSchema = z.object({
  name: stringSchema,
  email: emailSchema,
  phoneNumber: phoneSchema,
  note: stringSchema
})

export type UserSchema = z.infer<typeof userSchema>