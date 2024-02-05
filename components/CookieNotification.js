// components/CookieNotification.js

import { useState, useEffect } from 'react';
import Cookies from 'js-cookie';

const CookieNotification = () => {
  const [showNotification, setShowNotification] = useState(false);

  useEffect(() => {
    const hasSeenNotification = Cookies.get('cookieNotification');

    if (!hasSeenNotification) {
      // Se o usuário ainda não viu a notificação, exibe-a.
      setShowNotification(true);
    }
  }, []);

  const handleAccept = () => {
    
    // Define um cookie para rastrear que o usuário aceitou os termos de uso de cookies.
    Cookies.set('cookieNotification', 'accepted', { expires: 365 });
    setShowNotification(false);
  };

  return (
    <div className={`fixed bottom-0 left-0 w-full bg-gray-800 text-white p-4 ${showNotification ? 'block' : 'hidden'}`}>
      <p>Este site utiliza cookies para melhorar a sua experiência. Ao continuar, você concorda com os nossos{' '}
        <a href="/termos-de-uso" className='text-[rgb(165,253,241)] font-semibold'>
          Termos de Uso
        </a>{' '}
        de cookies.</p>
      <button onClick={handleAccept} className="mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Aceitar
      </button>
      </div>
  )   
};

export default CookieNotification;
