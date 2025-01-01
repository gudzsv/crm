export interface PageProps {
  params: {
    id: string;
  };
}

export default function Page({ params }: PageProps) {
  return (
    <div className="py-6 px-10">
      <p>{`Information about company (${params && params.id})`}</p>
    </div>
  );
}
