import Banner from '@/components/player/Banner';

export default function CoachLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="min-h-screen bg-black">
        {' '}
        <div className="pt-20">
          <Banner />
        </div>
        {children}
      </div>
    </>
  );
}
