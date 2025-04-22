import { useEffect } from 'react';

const useTawkTo = () => {
  useEffect(() => {
    // Prevent duplicate script injection
    if (window.Tawk_API) return;

    // Create script element
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://embed.tawk.to/67ff53523c99ab190c27f5ec/default';
    script.charset = 'UTF-8';
    script.setAttribute('crossorigin', '*');

    // Initialize Tawk_API
    window.Tawk_API = window.Tawk_API || {};
    window.Tawk_LoadStart = new Date();

    // Insert script into DOM
    const firstScript = document.getElementsByTagName('script')[0];
    firstScript.parentNode.insertBefore(script, firstScript);

    // Cleanup function
    return () => {
      // Remove the script if component unmounts
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);
};

export default useTawkTo; 