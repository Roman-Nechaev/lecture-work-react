import ContentLoader from 'react-content-loader';

export const DogSkeleton = () => {
  return (
    <ContentLoader
      speed={2}
      width={400}
      height={460}
      viewBox="0 0 400 460"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <rect x="224" y="27" rx="2" ry="2" width="140" height="10" />
      <rect x="224" y="53" rx="2" ry="2" width="140" height="10" />
      <rect x="4" y="4" rx="2" ry="2" width="212" height="212" />
      <rect x="227" y="87" rx="0" ry="0" width="83" height="0" />
      <rect x="225" y="76" rx="0" ry="0" width="145" height="11" />
    </ContentLoader>
  );
};
