const unsplashLink = (id, width, height) =>
  `https://source.unsplash.com/${id}/${width}x${height}`;

const unsplashPhotos = [
  { id: "GqbU78bdJFM", width: 1080, height: 720 },
  { id: "JIUjvqe2ZHg", width: 1080, height: 720 },
  { id: "gREquCUXQLI", width: 1080, height: 720 },
];

export const slides = unsplashPhotos.map((photo) => {
  const width = photo.width;
  const height = photo.height;

  return {
    src: unsplashLink(photo.id, width, height),
    width,
    height,
  };
});

export default slides;
