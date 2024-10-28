import StatusLabel, { Status } from '@/app/components/satatus-label';
import { headers } from 'next/headers.js';

export default function Home() {
  console.log(headers());
  return (
    <>
      <main>
        <h1 className="text-xl">Home Page {new Date().toTimeString()}</h1>
        <StatusLabel status={Status.Active}>Active</StatusLabel>
        <StatusLabel status={Status.NotActive}>NotActive</StatusLabel>
        <StatusLabel status={Status.Pending}>Pending</StatusLabel>
        <StatusLabel status={Status.Suspended}>Suspended</StatusLabel>
        <hr />
      </main>
      <footer>
        <p>footer</p>
      </footer>
    </>
  );
}
