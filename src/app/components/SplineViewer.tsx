import React, { useEffect, useState } from 'react';
import Spline from '@splinetool/react-spline';
import useMediaQuery from '../utils/useMediaQuery';
import { Loader2 } from 'lucide-react';

const SplineViewer = () => {
  const [loading, setLoading] = useState(true);

  const isLargeScreen = useMediaQuery('(min-width: 1024px)');

  useEffect(() => {
    if (!isLargeScreen) {
      setLoading(false);
    }
  }, [isLargeScreen]);

  const handleLoad = () => {
    setLoading(false);
  };

  // if (!isLargeScreen) {
  //   return null;
  // }

  return loading ? (
    <div className='flex items-center justify-center h-full'>
      <Loader2 size={60} className='animate-spin text-gray-500' />
    </div>
  ) : ( 
    <Spline
      onLoad={handleLoad}
      scene="https://prod.spline.design/ZNUUDkDh9yJcH65u/scene.splinecode" />
  );
}

export default SplineViewer;