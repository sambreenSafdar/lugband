import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Separator } from '../ui/separator';
import NewChannel from '../customer/new-channel-form';

export function ChannelModal({ isOpen, onClose, title }) {
  const onChange = (isOpen) => {
    if (!isOpen) {
      onClose();
    }
  };
  return (
    <Dialog open={isOpen} onOpenChange={onChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="mb-3">{title}</DialogTitle>
          <Separator />
          <NewChannel onChange={onChange} />
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
