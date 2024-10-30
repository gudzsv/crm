import React from 'react';

import AddCompanyButton from '@/app/components/add-company-button';
import ServerComponent from '@/app/components/server-component';
import ClientComponent from '@/app/components/client-component';

export default function Home() {
  return (
    <>
      <main>
        <h1 className="text-xl">Home Page {new Date().toTimeString()}</h1>

        <hr />

        <AddCompanyButton />
        <ServerComponent />
        <ClientComponent />
      </main>
      <footer>
        <p>footer</p>
      </footer>
    </>
  );
}
