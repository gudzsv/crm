import React from 'react';

import AddCompanyButton from '@/app/components/add-company-button';

export default function Home() {
  return (
    <>
      <main>
        <h1 className="text-xl">Home Page {new Date().toTimeString()}</h1>

        <hr />

        <AddCompanyButton />
      </main>
      <footer>
        <p>footer</p>
      </footer>
    </>
  );
}
