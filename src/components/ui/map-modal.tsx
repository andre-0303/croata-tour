function CloseIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <line x1="18" y1="6" x2="6" y2="18"></line>
      <line x1="6" y1="6" x2="18" y2="18"></line>
    </svg>
  );
}

interface MapModalProps {
  mapUrl: string;
  title: string;
  isOpen: boolean;
  onClose: () => void;
}

export function MapModal({ mapUrl, title, isOpen, onClose }: MapModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
      <div className="bg-surface rounded-2xl p-6 max-w-4xl max-h-[90vh] w-full flex flex-col shadow-2xl border border-border">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-text">
            📍 {title} no Google Maps
          </h3>

          <button
            onClick={onClose}
            className="p-1 hover:bg-muted rounded-lg transition-colors"
            aria-label="Fechar"
          >
            <CloseIcon />
          </button>
        </div>

        <iframe
          src={mapUrl}
          width="100%"
          height="500"
          style={{ border: 0 }}
          allowFullScreen={false}
          referrerPolicy="no-referrer-when-downgrade"
          className="rounded-xl w-full flex-1"
        />

        <div className="mt-4 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-muted text-muted-foreground rounded-xl hover:bg-border transition-colors text-sm"
          >
            Fechar
          </button>
        </div>
      </div>
    </div>
  );
}
