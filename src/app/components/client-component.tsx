'use client';

import React from 'react';
import ServerComponentCopy from '@/app/components/server-component-copy';

export interface ClientComponentProps {
  children: React.ReactNode;
}

const ClientComponent = ({ children }: ClientComponentProps) => {
  console.log('Client Component');
  return (
    <div>
      <span>Client Component</span>
      <ServerComponentCopy />
      {children}
    </div>
  );
};

export default ClientComponent;
