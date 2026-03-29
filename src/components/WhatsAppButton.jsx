import React from 'react';
import './WhatsAppButton.css';

const WhatsAppButton = () => {
  const phoneNumber = '919111116114';
  const text = 'Hello, I would like to consult BIZMUNIM regarding your professional services.';
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;

  return (
    <a
      href={whatsappUrl}
      className="whatsapp-float"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="white"
        width="30px"
        height="30px"
      >
        <path d="M12.031 0A12.032 12.032 0 000 12.031c0 2.227.61 4.39 1.765 6.287L.027 24l5.885-1.543a12.039 12.039 0 006.119 1.666h.005A12.03 12.03 0 0024 12.03 12.029 12.029 0 0012.031 0zm0 22.043h-.005a9.98 9.98 0 01-5.1-1.39l-.367-.217-3.793.993 1.01-3.696-.239-.379A9.972 9.972 0 011.96 12.031a9.96 9.96 0 019.98-9.982 9.96 9.96 0 019.982 9.982 9.96 9.96 0 01-9.89 9.992zm5.45-7.443c-.297-.15-1.77-.874-2.046-.974-.275-.1-.475-.15-.675.15-.2.3-.775.974-.95 1.173-.175.2-.35.225-.65.075-1.332-.662-2.42-1.393-3.418-2.915-.2-.301-.02-.464.129-.611.134-.132.3-.348.45-.522.15-.173.2-.3.3-.499.1-.201.05-.375-.025-.525-.075-.15-.675-1.625-.925-2.225-.246-.583-.497-.504-.675-.512-.175-.01-.375-.01-.575-.01s-.525.075-.8.375c-.275.3-1.05 1.025-1.05 2.5s1.075 2.898 1.225 3.1c.15.2 2.115 3.225 5.122 4.524.717.31 1.275.495 1.71.633.72.23 1.375.197 1.892.119.58-.088 1.77-.723 2.02-1.423.25-.7.25-1.3.175-1.423-.075-.125-.275-.2-.575-.35z" />
      </svg>
    </a>
  );
};

export default WhatsAppButton;
