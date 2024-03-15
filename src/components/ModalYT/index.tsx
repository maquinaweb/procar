import {
  DialogContent,
  DialogHeader,
  DialogTitle
} from '@/components/ui/dialog';

const ModalYT: React.FC<{
  title: string;
  id: string;
}> = ({ title, id }) => {
  return (
    <DialogContent className="sm:max-w-6xl">
      <DialogHeader>
        <DialogTitle>{title}</DialogTitle>
      </DialogHeader>
      <div className="flex items-center w-full aspect-video space-x-2">
        <iframe
          width="560"
          height="315"
          className="w-full h-full aspect-video rounded-xl"
          src={`https://www.youtube.com/embed/${id}`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          // frameBorder
          allowFullScreen
        ></iframe>
      </div>
    </DialogContent>
  );
};
export default ModalYT;
