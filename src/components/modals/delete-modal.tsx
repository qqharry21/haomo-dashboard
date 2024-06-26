import { TrashIcon } from 'lucide-react';

import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog';
import { useMount } from '@/hooks/use-mount';

import { Button } from '../ui/button';
import { Loader } from '../ui/loader';

interface DeleteModalProps {
  title: string;
  description: string;
  loading: boolean;
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}
export const DeleteModal = ({
  title,
  description,
  loading,
  isOpen,
  onClose,
  onConfirm,
}: DeleteModalProps) => {
  const isMount = useMount();

  const onChange = (open: boolean) => {
    if (!open) onClose();
  };

  if (!isMount) return null;

  return (
    <AlertDialog
      open={isOpen}
      onOpenChange={onChange}
    >
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>{title}</AlertDialogTitle>
          <AlertDialogDescription className='text-balance'>{description}</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel disabled={loading}>取消</AlertDialogCancel>
          <Button
            variant='destructive'
            disabled={loading}
            onClick={onConfirm}
          >
            {loading ? <Loader className='mr-2 size-4' /> : <TrashIcon className='mr-2 size-4' />}
            確定
          </Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
