import { motion } from 'framer-motion';
import { Home, Settings, User } from 'lucide-react';
import { cn } from '@/lib/utils';

export function Example() {
  return (
    <div className="p-8 space-y-4">
      {/* Tailwind CSS styling */}
      <div className="bg-primary text-primary-foreground p-4 rounded-lg">
        <h1 className="text-2xl font-bold">Tailwind CSS is working!</h1>
      </div>

      {/* Lucide Icons */}
      <div className="flex gap-4">
        <Home className="w-6 h-6" />
        <Settings className="w-6 h-6" />
        <User className="w-6 h-6" />
      </div>

      {/* Framer Motion */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-secondary p-4 rounded-lg"
      >
        <p>Framer Motion animation works!</p>
      </motion.div>

      {/* shadcn/ui utility (cn function) */}
      <div className={cn("p-4 rounded-lg", "bg-accent text-accent-foreground")}>
        <p>shadcn/ui utilities are ready!</p>
      </div>
    </div>
  );
}
