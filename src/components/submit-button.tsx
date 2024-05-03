import { CheckIcon, Loader2 } from 'lucide-react';

import { Button } from './ui/button';

export const SubmitButton = ({
  loading,
  children,
  ...props
}: React.ComponentPropsWithoutRef<typeof Button> & { loading?: boolean }) => {
  return (
    <Button
      type='submit'
      {...props}
    >
      {loading ? (
        <Loader2
          className='mr-2 animate-spin'
          size={16}
        />
      ) : (
        <CheckIcon
          className='mr-2'
          size={16}
        />
      )}
      {children}
    </Button>
  );
};
