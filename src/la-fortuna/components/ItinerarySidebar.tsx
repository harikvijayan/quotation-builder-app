import { motion } from 'framer-motion';
import { AlertCircle, Mail, Phone, MessageCircle } from 'lucide-react';
import type { Day, ItineraryPackage } from '../types/itinerary';
import { cn } from '@/lib/utils';

interface ItinerarySidebarProps {
  days: Day[];
  currentDay: number;
  onDayChange: (day: number) => void;
  contacts: ItineraryPackage['contacts'];
}

export default function ItinerarySidebar({
  days,
  currentDay,
  onDayChange,
  contacts,
}: ItinerarySidebarProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.3 }}
      className="bg-white rounded-2xl p-6 shadow-md h-fit sticky top-5"
    >
      {/* Journey Days */}
      <h3 className="font-bold mb-5 text-gray-900 text-lg">Journey Days</h3>
      <ul className="list-none">
        {days.map((day) => (
          <li
            key={day.overview.dayNumber}
            onClick={() => onDayChange(day.overview.dayNumber)}
            className={cn(
              'p-4 rounded-xl cursor-pointer mb-2.5 transition-all duration-300 border-2',
              currentDay === day.overview.dayNumber
                ? 'bg-gradient-to-br from-yellow-50 to-yellow-100 text-yellow-900 border-yellow-600'
                : 'border-transparent hover:bg-gray-50 hover:translate-x-0.5'
            )}
          >
            <div className="font-bold mb-1 text-base">
              Day {day.overview.dayNumber}
            </div>
            <div className="text-sm text-gray-600">{day.overview.date}</div>
          </li>
        ))}
      </ul>

      {/* Emergency Contact */}
      <div className="mt-8 pt-6 border-t-2 border-gray-100">
        <h4 className="font-bold mb-5 text-gray-900 text-lg flex items-center gap-2">
          <AlertCircle className="w-5 h-5 text-red-600" />
          Emergency Contact
        </h4>
        <div className="space-y-3">
          <div className="flex items-center gap-2.5 text-sm p-2 rounded-lg transition-colors hover:bg-gray-50">
            <Phone className="w-4 h-4 text-red-600" />
            <span className="text-gray-700">{contacts.emergency.phone}</span>
          </div>
          <div className="flex items-center gap-2.5 text-sm p-2 rounded-lg transition-colors hover:bg-gray-50">
            <Mail className="w-4 h-4 text-red-600" />
            <span className="text-gray-700">{contacts.emergency.email}</span>
          </div>
        </div>
      </div>

      {/* Tour Guide */}
      <div className="mt-6 pt-6 border-t-2 border-gray-100">
        <h4 className="font-bold mb-3 text-gray-900 text-lg">Tour Guide</h4>
        <div className="mb-3 font-bold text-gray-900">{contacts.guide.name}</div>
        <div className="space-y-3">
          <div className="flex items-center gap-2.5 text-sm p-2 rounded-lg transition-colors hover:bg-gray-50">
            <Phone className="w-4 h-4 text-green-600" />
            <span className="text-gray-700">{contacts.guide.phone}</span>
          </div>
          <div className="flex items-center gap-2.5 text-sm p-2 rounded-lg transition-colors hover:bg-gray-50">
            <MessageCircle className="w-4 h-4 text-green-600" />
            <span className="text-gray-700">WhatsApp Available</span>
          </div>
        </div>
        {contacts.guide.details && (
          <div className="text-xs text-gray-600 mt-2.5 p-2 bg-gray-50 rounded-lg">
            <div className="mb-1">
              <strong>Languages:</strong> {contacts.guide.details.languages}
            </div>
            <div className="mb-1">
              <strong>Experience:</strong> {contacts.guide.details.experience}
            </div>
            <div>
              <strong>Specialty:</strong> {contacts.guide.details.specialty}
            </div>
          </div>
        )}
      </div>

      {/* Package Manager */}
      <div className="mt-6 pt-6 border-t-2 border-gray-100">
        <h4 className="font-bold mb-3 text-gray-900 text-lg">Package Manager</h4>
        <div className="mb-2 font-semibold text-gray-900">
          {contacts.manager.name}
        </div>
        <div className="space-y-3">
          <div className="flex items-center gap-2.5 text-sm p-2 rounded-lg transition-colors hover:bg-gray-50">
            <Phone className="w-4 h-4 text-blue-600" />
            <span className="text-gray-700">{contacts.manager.phone}</span>
          </div>
          <div className="flex items-center gap-2.5 text-sm p-2 rounded-lg transition-colors hover:bg-gray-50">
            <Mail className="w-4 h-4 text-blue-600" />
            <span className="text-gray-700">{contacts.manager.email}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
