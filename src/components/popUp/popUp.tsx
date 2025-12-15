//import './popUp.scss';

interface PopupProps {
    open: boolean;
    className?: string;
    onClose: () => void;
    children?: React.ReactNode;
}

function PopUp({ open, onClose, children }: PopupProps) {
  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 backdrop-blur-sm bg-black/10"
      onClick={onClose}
    >
      <div
        className="w-full max-w-2xl p-6 mt-20 overflow-y-auto transform scale-95 bg-gray-700 border border-teal-800 rounded-2xl shadow-2xl shadow-sky-400/30 transition-transform duration-300 ease-out animate-popOpen max-h-[80vh]"
        onClick={(e) => e.stopPropagation()}
        style={{ animation: 'popOpen 0.3s ease-out forwards' }}
      >
        {children}
      </div>
    </div>
  );
}

export default PopUp;