'use client';

import { Dialog, DialogTrigger } from '@radix-ui/react-dialog';
import Image from 'next/image';
import { FaPlay } from 'react-icons/fa6';

import ModalYT from '../ModalYT';

const Video: React.FC<{
  title: string;
  id: string;
}> = ({ title, id }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="relative aspect-video h-auto flex justify-center items-center cursor-pointer transition-[filter] duration-500 hover:brightness-125 active:brightness-90">
          <Image
            src={`https://i3.ytimg.com/vi/${id}/maxresdefault.jpg`}
            alt="Guy image"
            className="w-full select-none pointer-events-none object-cover rounded-lg border-2 border-neutral-800 brightness-50"
            fill
          />
          <FaPlay className="relative z-10" color="#fff" size={32} />
        </div>
      </DialogTrigger>

      <ModalYT id={id} title={title} />
    </Dialog>
  );
};

export default Video;
