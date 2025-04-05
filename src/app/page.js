import { redirect } from 'next/navigation';

export default function Home() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Dashboard Home</h1>
      <p>Welcome to the Pharma Dashboard</p>
    </div>
  );
}
