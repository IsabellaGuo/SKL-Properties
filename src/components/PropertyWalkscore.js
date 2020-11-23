import React, { useEffect } from 'react';

const useScript = url => {
    useEffect(() => {
      const script = document.createElement('script');
  
      script.src = url;
      script.async = true;
  
      document.body.appendChild(script);
  
      return () => {
        document.body.removeChild(script);
      }
    }, [url]);
  };

  const MyComponent = props => {
    useScript('/pp.walk.sc/badge/bike/1678-Freeman-Avenue-Saanich--CA.dash.BC-V8P-1P7.png');
  
    
  }

export default PropertyWalkscore
