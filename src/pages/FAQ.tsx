
import React from 'react';
import FAQ from '@/components/FAQ';

const FAQPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-800 to-slate-900">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:24px_24px]" />
      
      <div className="relative">
        <FAQ />
      </div>
    </div>
  );
};

export default FAQPage;
