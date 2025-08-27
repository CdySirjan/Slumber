import Guest from '@/components/Guest';
import { currentUser } from '@clerk/nextjs/server';

export default async function HomePage() {
  const user = await currentUser();

  if (!user) {
    return <Guest />;
  }

  return (
    <div>
      <h1 className="text-3xl font-bold">Slumber</h1>
      <div className="text-red-600">HomePage</div>
    </div>
  );
}
