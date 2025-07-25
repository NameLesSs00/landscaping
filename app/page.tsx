import HeroPage from '@/app/(Hero)/HeroPage';
import backgroundImage from "@/public/image1.png"

export default function Home() {
  return (
    <div
      className="relative min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url('/image1.png')` }}
    >
      <HeroPage />

    </div>
  );
}
