import Link from 'next/link.js';

const NotFound = () => {
  return (
    <div>
      <p>Company could not found</p>
      <Link href="/companies" className="text-blue-500">
        Back to companies
      </Link>
    </div>
  );
};

export default NotFound;
