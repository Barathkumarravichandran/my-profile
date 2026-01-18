import { Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 px-4 bg-slate-100 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 transition-colors duration-500">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center justify-center gap-4">
          <p className="text-slate-600 dark:text-slate-400 text-center flex items-center gap-2">
            Built with <Heart size={16} className="text-red-500 fill-current" /> by Barathkumar R Ravichandran
          </p>
          <p className="text-slate-500 dark:text-slate-500 text-sm">
            © {currentYear} All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
