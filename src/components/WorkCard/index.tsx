import Image from 'next/image';

const WorkCard: React.FC<{
  work: TWork;
}> = ({ work }) => {
  return (
    <li className="flex flex-col bg-neutral-100 rounded-md overflow-hidden shadow-lg transition-all hover:brightness-90 hover:rounded-lg">
      <div className="grid grid-cols-2">
        {work.images.slice(0, 4).map((image, index) => (
          <Image
            key={`image-${index}`}
            src={image}
            alt="Work"
            className="w-full aspect-video object-cover"
            width={135}
            height={100}
          />
        ))}
      </div>
      <p className="px-3 py-2 text-sm sm:text-base font-semibold md:font-bold text-neutral-700">
        {work.title}
      </p>
    </li>
  );
};

export default WorkCard;
