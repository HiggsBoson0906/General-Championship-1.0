import './popUp.scss';

interface PopupProps {
  open: boolean;
  className?: string;
  onClose: () => void;
  children?: React.ReactNode;
}

export default function PopUp({ open, className, onClose, children }: PopupProps) {
  if (!open) return null;

  return (
    <section
      id="custom-popup-backdrop"
      style={{ display: open ? 'block' : 'none' }}
      className={`fixed inset-0 backdrop-blur-md bg-opacity-50 flex items-center justify-center z-50 ${className}`}
      onClick={onClose} // Close on backdrop click
    >
      {children}
    </section>
  );
}