'use client';
import Button from '@/app/components/button'

export interface ErrorComponentProps {
  error: Error;
  reset: () => void;
}

const ErrorComponent = ({ error ,reset}: ErrorComponentProps) => {
  return (
    <div>
      <p>{`Something went wrong. ${error.message}`}</p>
      <Button onClick={() => reset()}>Try again</Button>
    </div>
  );
};

export default ErrorComponent;
