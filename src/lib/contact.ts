import { supabase } from './supabase'

export interface ContactForm {
  name: string
  email: string
  phone?: string
  subject?: string
  message: string
}

export async function submitContact(form: ContactForm) {
  const { error } = await supabase.from('contact_messages').insert(form)
  if (error) {
    throw new Error(error.message)
  }
  return { success: true }
}
