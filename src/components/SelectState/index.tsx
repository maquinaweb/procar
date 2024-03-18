'use client';

import Image from 'next/image';
import { UseFormReturn } from 'react-hook-form';
import { RxCaretSort, RxCheck } from 'react-icons/rx';

import { Button } from '@/components/ui/button';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem
} from '@/components/ui/command';
import {
  FormControl,
  FormField,
  FormItem,
  FormMessage
} from '@/components/ui/form';
import {
  Popover,
  PopoverContent,
  PopoverTrigger
} from '@/components/ui/popover';
import { cn } from '@/lib/utils';
import { ScrollArea } from '../ui/scroll-area';

const languages = [
  { value: 'AC', label: 'Acre', slug: 'acre' },
  { value: 'AL', label: 'Alagoas', slug: 'alagoas' },
  { value: 'AP', label: 'Amapá', slug: 'amapa' },
  { value: 'AM', label: 'Amazonas', slug: 'amazonas' },
  { value: 'BA', label: 'Bahia', slug: 'bahia' },
  { value: 'CE', label: 'Ceará', slug: 'ceara' },
  {
    value: 'DF',
    label: 'Distrito Federal',
    slug: 'distrito-federal'
  },
  { value: 'ES', label: 'Espirito Santo', slug: 'espirito-santo' },
  { value: 'GO', label: 'Goiás', slug: 'goias' },
  { value: 'MA', label: 'Maranhão', slug: 'maranhao' },
  {
    value: 'MS',
    label: 'Mato Grosso do Sul',
    slug: 'mato-grosso-do-sul'
  },
  { value: 'MT', label: 'Mato Grosso', slug: 'mato-grosso' },
  { value: 'MG', label: 'Minas Gerais', slug: 'minas-gerais' },
  { value: 'PA', label: 'Pará', slug: 'para' },
  { value: 'PB', label: 'Paraíba', slug: 'paraiba' },
  { value: 'PR', label: 'Paraná', slug: 'parana' },
  { value: 'PE', label: 'Pernambuco', slug: 'pernambuco' },
  { value: 'PI', label: 'Piauí', slug: 'piaui' },
  { value: 'RJ', label: 'Rio de Janeiro', slug: 'rio-de-janeiro' },
  {
    value: 'RN',
    label: 'Rio Grande do Norte',
    slug: 'rio-grande-do-norte'
  },
  {
    value: 'RS',
    label: 'Rio Grande do Sul',
    slug: 'rio-grande-do-sul'
  },
  { value: 'RO', label: 'Rondônia', slug: 'rondonia' },
  { value: 'RR', label: 'Roraima', slug: 'roraima' },
  { value: 'SC', label: 'Santa Catarina', slug: 'santa-catarina' },
  { value: 'SP', label: 'São Paulo', slug: 'sao-paulo' },
  { value: 'SE', label: 'Sergipe', slug: 'sergipe' },
  { value: 'TO', label: 'Tocantins', slug: 'tocantins' }
] as const;

const SelectState: React.FC<{
  form: UseFormReturn<any>;
}> = ({ form }) => {
  return (
    <FormField
      control={form.control}
      name="language"
      render={({ field }) => (
        <FormItem className="flex flex-col">
          <Popover>
            <PopoverTrigger asChild>
              <FormControl>
                <Button
                  variant="outline"
                  role="combobox"
                  className={cn(
                    'w-full bg-neutral-100 justify-between',
                    !field.value && 'text-muted-foreground'
                  )}
                >
                  {field.value
                    ? languages.find(
                        (language) => language.value === field.value
                      )?.label
                    : 'SP'}
                  <RxCaretSort className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>
              </FormControl>
            </PopoverTrigger>
            <PopoverContent className="w-[220px] p-0">
              <Command>
                <CommandInput
                  placeholder="Procure seu estado..."
                  className="h-9"
                />
                <CommandEmpty className="text-center p-3 text-neutral-400 text-sm">
                  Estado não encontrado.
                </CommandEmpty>
                <CommandGroup>
                  <ScrollArea className="h-52 overflow-y-auto">
                    {languages.map((language) => (
                      <CommandItem
                        value={language.label}
                        key={language.value}
                        onSelect={() => {
                          form.setValue('language', language.value);
                        }}
                        className="flex items-center gap-2"
                      >
                        {language.slug && (
                          <Image
                            src={`https://raw.githubusercontent.com/MwPersonal/flags/master/svg/${language.slug}.svg`}
                            alt="Icon"
                            width={26}
                            height={17.5}
                            className="rounded-sm"
                            unoptimized
                          />
                        )}
                        {language.label}
                        <RxCheck
                          className={cn(
                            'ml-auto h-4 w-4',
                            language.value === field.value
                              ? 'opacity-100'
                              : 'opacity-0'
                          )}
                        />
                      </CommandItem>
                    ))}
                  </ScrollArea>
                </CommandGroup>
              </Command>
            </PopoverContent>
          </Popover>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default SelectState;
