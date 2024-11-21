import { Lexend, Lora } from 'next/font/google'
 
export const lexend = Lexend({
    subsets: ['latin'],
    display: 'swap',
    weight: ['400', '700','300','100'],
    style: ['normal'], 
  });
 
export const lora = Lora({
    subsets: ['latin'],
    display: 'swap',
  });