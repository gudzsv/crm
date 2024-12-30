'use client';

import Header from '@/app/components/header';
import { notFound } from 'next/navigation.js';
import { useEffect } from 'react';

export interface PageProps {
  params: { id: string };
}

const Page = ({ params }: PageProps) => {
  useEffect(() => {
    const id = Number.parseInt(params.id);
    if (Number.isNaN(id)) {
      notFound();
    }
  }, [params.id]);
  return <Header>Company ({String(params.id)})</Header>;
};

export default Page;
