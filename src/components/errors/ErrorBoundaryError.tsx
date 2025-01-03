import { FC } from 'react';

type TProps = {
  error: unknown;
};

const ErrorBoundaryError: FC<TProps> = (props) => {
  const { error } = props;
  const errorMessage =
    error instanceof Error ? error.message : typeof error === 'string' ? error : JSON.stringify(error);

  return (
    <div>
      <p>An unhandled error occurred:</p>
      <blockquote>
        <code>{errorMessage}</code>
      </blockquote>
    </div>
  );
};

export default ErrorBoundaryError;
