const SectionHeader: React.FC<{
  title: string;
  description: string;
}> = ({ title, description }) => {
  return (
    <div className="flex flex-col gap-2 items-center group">
      <h1 className="font-extrabold text-center text-2xl sm:text-3xl text-neutral-700">
        {title}
      </h1>
      <div className="flex flex-col items-center gap-2">
        <hr className="max-w-full w-64 border-red-700" />
        <hr className="max-w-[80%] w-32 border-red-700" />
      </div>
      <h2 className="w-full md:w-2/3 2xl:w-2/5 text-xs sm:text-sm md:text-base text-center text-neutral-600">
        {description}
      </h2>
    </div>
  );
};

export default SectionHeader;
