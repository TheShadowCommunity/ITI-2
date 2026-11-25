import React, { useEffect } from 'react';
import { Studio } from 'sanity';
import config from '../../sanity.config';

export const StudioPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Sanity Studio | New Lucknow City Private ITI';
  }, []);

  return (
    <div id="sanity-studio-root" className="h-screen w-screen overflow-hidden">
      <Studio config={config} />
    </div>
  );
};

export default StudioPage;
