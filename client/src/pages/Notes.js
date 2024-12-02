import React from 'react';
import { Construction } from 'lucide-react';

const NotesSection = () => {
  return (
    <div className="min-h-screen p-8">
      
      
        <div className="flex flex-col items-center justify-center text-center space-y-4 py-12">
          <Construction className="w-16 h-16 text-slate-400 animate-bounce" />
          <h2 className="text-2xl font-semibold text-slate-200">Under Construction</h2>
          <p className="text-slate-400 max-w-md">
            This section is currently being developed. Check back soon for updates and new content!
          </p>
        </div>
      </div>
    
  );
};

export default NotesSection;