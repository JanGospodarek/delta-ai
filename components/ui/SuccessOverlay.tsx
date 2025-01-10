import React, { useEffect, useState } from 'react';

interface Props {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const SuccessOverlay = ({ open, setOpen }: Props) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (open) {
      setIsVisible(true);
      const fadeOutTimeout = setTimeout(() => {
        setIsVisible(false);
        const closeTimeout = setTimeout(() => {
          setOpen(false);
        }, 200);
        return () => clearTimeout(closeTimeout);
      }, 2000);
      return () => clearTimeout(fadeOutTimeout);
    }
  }, [open, setOpen]);

  if (!open) return null;

  return (
    <div
      className="success-overlay"
      style={{
        opacity: isVisible ? 1 : 0,
      }}
    >
      <p className="text-2xl text-white  font-bold ">Klucz zapisany 😎</p>
    </div>
  );
};

export default SuccessOverlay;
