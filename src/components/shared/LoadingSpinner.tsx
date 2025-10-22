// src/components/shared/LoadingSpinner.tsx
import { motion } from 'framer-motion';
// import logo from '@/assets/logo.png';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  showLogo?: boolean;
  text?: string;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  size = 'md',
  showLogo = true,
  text
}) => {
  // Size mappings
  const sizes = {
    sm: {
      container: 'w-12 h-12',
      spinner: 'w-12 h-12',
      logo: 'w-6 h-6',
      text: 'text-sm'
    },
    md: {
      container: 'w-20 h-20',
      spinner: 'w-20 h-20',
      logo: 'w-10 h-10',
      text: 'text-base'
    },
    lg: {
      container: 'w-32 h-32',
      spinner: 'w-32 h-32',
      logo: 'w-16 h-16',
      text: 'text-lg'
    }
  };
  
  const currentSize = sizes[size];
  
  return (
    <div className="flex flex-col items-center justify-center">
      <div className={`relative ${currentSize.container}`}>
        {/* Spinner */}
        <motion.div
          className={`${currentSize.spinner} rounded-full border-t-4 border-b-4 border-primary`}
          animate={{ rotate: 360 }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "linear"
          }}
          aria-hidden="true"
        />
        
        {/* Secondary spinner */}
        <motion.div
          className={`absolute inset-0 ${currentSize.spinner} rounded-full border-r-4 border-l-4 border-amber-400/70`}
          animate={{ rotate: -360 }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "linear"
          }}
          aria-hidden="true"
        />
        
        {/* Logo */}
        {showLogo && (
          <div className="absolute inset-0 flex items-center justify-center">
            <img 
            //   src={logo} 
              alt="Paadamudra logo" 
              className={`${currentSize.logo} object-contain`}
            />
          </div>
        )}
      </div>
      
      {/* Loading text */}
      {text && (
        <p className={`mt-4 text-gray-600 ${currentSize.text}`}>{text}</p>
      )}
      
      {/* Screen reader text */}
      <span className="sr-only">Loading...</span>
    </div>
  );
};

export default LoadingSpinner;