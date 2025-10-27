import { motion } from 'framer-motion';
import { Users, Baby, User } from 'lucide-react';
import type { ItineraryPackage } from '../types/itinerary';

interface ItineraryHeaderProps {
  packageData: ItineraryPackage;
}

export default function ItineraryHeader({ packageData }: ItineraryHeaderProps) {
  const totalTravelers =
    packageData.travelers.adults +
    packageData.travelers.children +
    packageData.travelers.infants;

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-gradient-to-r from-gray-800 to-gray-700 rounded-[20px] mb-5 shadow-xl text-white relative overflow-hidden"
    >
      {/* Decorative Background Circle */}
      <div className="absolute top-0 right-0 w-[200px] h-[200px] bg-gradient-radial from-yellow-600/10 to-transparent rounded-full translate-x-12 -translate-y-12" />

      <div className="relative z-10 p-8">
        {/* Top Section */}
        <div className="flex justify-between items-start flex-wrap gap-5 mb-5">
          <div className="flex items-center gap-10">
            {/* Logo */}
            <img
              src="/src/assets/logo.png"
              alt="La Fortuna Logo"
              className="max-h-20 w-auto bg-gradient-to-br from-green-800 to-green-950 rounded-2xl block"
            />

            {/* Title */}
            <div>
              <h1 className="text-[32px] font-bold mb-1.5 bg-gradient-to-r from-yellow-600 to-yellow-300 bg-clip-text text-transparent">
                {packageData.title}
              </h1>
              <p className="text-gray-300 text-base">
                {packageData.subtitle} • Package ID: {packageData.id}
              </p>
            </div>
          </div>

          {/* Right Side - User & Dates */}
          <div className="text-right">
            <div className="text-yellow-400 text-xl font-semibold mb-2">
              Hi, {packageData.userName}
            </div>
            <div className="text-sm text-gray-400 mb-1.5">Travel Duration</div>
            <div className="text-yellow-400 text-lg font-semibold">
              {packageData.duration}
            </div>
          </div>
        </div>

        {/* Traveler Info Section */}
        <div className="bg-gradient-to-r from-gray-900/50 to-gray-800/50 rounded-xl p-5 backdrop-blur-sm mb-5">
          <div className="flex justify-between items-center mb-4">
            <div className="text-base font-semibold text-yellow-400">
              Traveler Details
            </div>
            <div className="bg-gradient-to-r from-purple-600 to-purple-700 text-white px-4 py-1.5 rounded-full text-sm font-semibold">
              {totalTravelers} Travelers
            </div>
          </div>

          <div className="flex gap-6 flex-wrap">
            {/* Adults */}
            <div className="flex items-center gap-3 px-4 py-3 bg-white rounded-xl border border-gray-200 min-w-[140px]">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-green-600 to-green-700 text-white flex items-center justify-center">
                <Users className="w-4 h-4" />
              </div>
              <div>
                <div className="text-lg font-bold text-gray-900">
                  {packageData.travelers.adults}
                </div>
                <div className="text-xs text-gray-600 font-medium">Adults</div>
              </div>
            </div>

            {/* Children */}
            <div className="flex items-center gap-3 px-4 py-3 bg-white rounded-xl border border-gray-200 min-w-[140px]">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-orange-500 to-orange-600 text-white flex items-center justify-center">
                <User className="w-4 h-4" />
              </div>
              <div>
                <div className="text-lg font-bold text-gray-900">
                  {packageData.travelers.children}
                </div>
                <div className="text-xs text-gray-600 font-medium">Children</div>
              </div>
            </div>

            {/* Infants */}
            <div className="flex items-center gap-3 px-4 py-3 bg-white rounded-xl border border-gray-200 min-w-[140px]">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-pink-500 to-pink-600 text-white flex items-center justify-center">
                <Baby className="w-4 h-4" />
              </div>
              <div>
                <div className="text-lg font-bold text-gray-900">
                  {packageData.travelers.infants}
                </div>
                <div className="text-xs text-gray-600 font-medium">Infants</div>
              </div>
            </div>
          </div>
        </div>

        {/* Package Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div className="text-center p-4 bg-white/10 rounded-xl backdrop-blur-md">
            <div className="text-2xl font-bold text-yellow-400 mb-1">
              {packageData.stats.days}
            </div>
            <div className="text-xs text-gray-300 uppercase tracking-wider">
              Days
            </div>
          </div>

          <div className="text-center p-4 bg-white/10 rounded-xl backdrop-blur-md">
            <div className="text-2xl font-bold text-yellow-400 mb-1">
              {packageData.stats.nights}
            </div>
            <div className="text-xs text-gray-300 uppercase tracking-wider">
              Nights
            </div>
          </div>

          <div className="text-center p-4 bg-white/10 rounded-xl backdrop-blur-md">
            <div className="text-2xl font-bold text-yellow-400 mb-1">
              {packageData.stats.destinations}
            </div>
            <div className="text-xs text-gray-300 uppercase tracking-wider">
              Destinations
            </div>
          </div>

          <div className="text-center p-4 bg-white/10 rounded-xl backdrop-blur-md">
            <div className="text-2xl font-bold text-yellow-400 mb-1">
              {packageData.stats.rating}★
            </div>
            <div className="text-xs text-gray-300 uppercase tracking-wider">
              Rating
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
