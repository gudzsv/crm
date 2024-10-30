import React from 'react';

export interface ServerComponentCopyProps {
  children: React.ReactNode;
}

const ServerComponentCopy = ({ children }: ServerComponentCopyProps) => {
  console.log('Server Component Copy');
  return (
    <div>
      <span>Server Component Copy</span>
      {children}
    </div>
  );
};

export default ServerComponentCopy;
