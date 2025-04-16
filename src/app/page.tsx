import { ArrowRight, Copy, FileInputIcon, Mail } from 'lucide-react'
import { Button } from "@/components/button";
import { IconButton } from '@/components/icon-button';
import { InputField, InputIcon, InputRoot } from '@/components/input';
import Input_ from 'postcss/lib/input';

export default function Home() {
  return (
    <main>
      <Button type='submit'>
        Enviar
        <ArrowRight />
      </Button>

      <IconButton>
        <Copy />
      </IconButton>

      <div>
        <InputRoot>
          <InputIcon>
            <Mail className='size-5' />
          </InputIcon>

          <InputField />
        </InputRoot>
      </div>
    </main>
  );
}
