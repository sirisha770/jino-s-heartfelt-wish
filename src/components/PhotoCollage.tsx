interface Props {
  photos: string[];
}

const PhotoCollage = ({ photos }: Props) => {
  return (
    <div
      className="flex gap-4 justify-center p-4 rounded-3xl border-2 border-gold shadow-gold-glow"
      style={{ animation: "gentle-pulse 4s ease-in-out infinite" }}
    >
      {photos.map((photo, i) => (
        <img
          key={i}
          src={photo}
          alt={`Collage photo ${i + 1}`}
          className="w-1/2 rounded-2xl object-cover"
          style={{ aspectRatio: "3/4" }}
        />
      ))}
    </div>
  );
};

export default PhotoCollage;
