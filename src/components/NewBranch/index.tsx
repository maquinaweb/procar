'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import InputPhone from '../PhoneInput';
import SectionHeader from '../SectionHeader';
import SelectState from '../SelectState';
import { Form } from '../ui/form';

const FormSchema = z.object({
  language: z.string({
    required_error: 'Please select a language.'
  })
});

const NewBranch: React.FC = () => {
  const form = useForm({
    resolver: zodResolver(FormSchema)
  });

  return (
    <section className="container mx-auto flex flex-col gap-8 px-3 py-14 lg:py-28 text-neutral-800">
      <SectionHeader
        title="Tenha a sua própria Procar!"
        description="Preencha o Formulário Abaixo para Receber Informações Detalhadas e seja parte da Procar."
      />

      <Form {...form}>
        <form className="max-w-xl w-full mx-auto flex flex-col gap-2">
          <input
            type="text"
            className="w-full py-2 px-4 rounded-lg text-sm placeholder:text-neutral-500 outline-none border bg-neutral-100 border-neutral-200 transition-all focus:brightness-105"
            placeholder="Nome"
          />
          <div className="grid grid-cols-2 gap-2">
            <input
              type="text"
              className="w-full py-2 px-4 rounded-lg text-sm placeholder:text-neutral-500 outline-none border bg-neutral-100 border-neutral-200 transition-all focus:brightness-105"
              placeholder="E-mail"
            />
            <InputPhone
              type="text"
              className="w-full py-2 px-4 rounded-lg text-sm placeholder:text-neutral-500 outline-none border bg-neutral-100 border-neutral-200 transition-all focus:brightness-105"
              placeholder="Telefone"
            />
          </div>
          <div className="grid grid-cols-4 gap-2">
            <input
              type="text"
              className="col-span-3 w-full py-2 px-4 rounded-lg text-sm placeholder:text-neutral-500 outline-none border bg-neutral-100 border-neutral-200 transition-all focus:brightness-105"
              placeholder="Cidade"
            />
            <SelectState form={form} />
            {/* <input
            type="text"
            className="w-full py-2 px-4 rounded-lg text-sm placeholder:text-neutral-500 outline-none border bg-neutral-100 border-neutral-200 transition-all focus:brightness-105"
            placeholder="Estado"
          /> */}
          </div>

          <button className="flex mt-2 self-center h-fit w-fit rounded-md gap-3 items-center px-5 py-2 text-neutral-50 bg-red-900 text-sm font-semibold transition-all hover:brightness-90 active:brightness-110">
            Enviar
          </button>
        </form>
      </Form>
    </section>
  );
};

export default NewBranch;
