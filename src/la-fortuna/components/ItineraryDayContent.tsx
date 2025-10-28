import { motion } from 'framer-motion';
import { Hotel, Utensils, ExternalLink, Map } from 'lucide-react';
import type { Day } from '../types/itinerary';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import ActivityTimeline from './ActivityTimeline';

interface ItineraryDayContentProps {
  day: Day;
  packageId: string;
}

export default function ItineraryDayContent({
  day,
}: ItineraryDayContentProps) {
  const [showMap, setShowMap] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 }}
      className="bg-white rounded-2xl p-8 shadow-md"
    >
      {/* Day Overview */}
      <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-6 mb-6 border border-gray-200">
        <div className="flex justify-between items-center mb-5 flex-wrap gap-4">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-1">
              Day {day.overview.dayNumber} - {day.overview.title}
            </h2>
            <span className="text-gray-600 text-lg font-medium">
              {day.overview.fullDate}
            </span>
          </div>
          {day.overview.weather && (
            <div className="flex items-center gap-2 bg-white px-4 py-2.5 rounded-full text-sm text-gray-700 border border-gray-300">
              <span>{day.overview.weather}</span>
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mb-5">
          {/* Meals Section */}
          <Card className="border shadow-sm">
            <CardContent className="p-5">
              <div className="flex items-center gap-2 font-bold mb-4 text-gray-900 text-base">
                <Utensils className="w-5 h-5 text-yellow-600" />
                Meals Planned
              </div>
              <div className="space-y-3">
                {day.overview.meals.map((meal, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center pb-2.5 border-b border-gray-100 last:border-0"
                  >
                    <span className="font-semibold text-gray-600 text-sm">
                      {meal.label}
                    </span>
                    <span className="text-gray-900 font-medium text-right text-sm">
                      {meal.value}
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Accommodation Section */}
          <Card className="border shadow-sm">
            <CardContent className="p-5">
              <div className="flex items-center gap-2 font-bold mb-4 text-gray-900 text-base">
                <Hotel className="w-5 h-5 text-yellow-600" />
                Accommodation
              </div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-yellow-600 to-yellow-400 rounded-lg flex items-center justify-center text-lg">
                  🏨
                </div>
                <div className="flex-1">
                  <div className="font-semibold text-gray-900">
                    {day.overview.accommodation.name}
                  </div>
                  <div className="text-gray-600 text-xs">
                    {day.overview.accommodation.rating}
                  </div>
                </div>
              </div>

              {/* Hotel Actions */}
              {day.overview.accommodation.website && (
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full mb-2"
                  onClick={() =>
                    window.open(day.overview.accommodation.website, '_blank')
                  }
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Visit Website
                </Button>
              )}

              {day.overview.accommodation.mapUrl && (
                <>
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full"
                    onClick={() => setShowMap(!showMap)}
                  >
                    <Map className="w-4 h-4 mr-2" />
                    {showMap ? 'Hide Map' : 'Show on Map'}
                  </Button>

                  {showMap && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="mt-5 rounded-lg overflow-hidden shadow-md"
                    >
                      <div className="bg-gray-800 text-white px-4 py-3 text-sm font-medium flex justify-between items-center">
                        <span>
                          📍 {day.overview.accommodation.name} Location
                        </span>
                        <button
                          onClick={() => setShowMap(false)}
                          className="hover:bg-white/10 px-2 py-1 rounded transition-colors"
                        >
                          ✕
                        </button>
                      </div>
                      <iframe
                        src={day.overview.accommodation.mapUrl}
                        className="w-full h-[300px] border-0"
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                      />
                    </motion.div>
                  )}
                </>
              )}

              {/* Nearby Breakfast Spots */}
              {day.overview.accommodation.nearbyBreakfastSpots &&
                day.overview.accommodation.nearbyBreakfastSpots.length > 0 && (
                  <div className="mt-5 bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900 text-sm mb-2.5">
                      ☕ Nearby Breakfast Spots
                    </h4>
                    <ul className="space-y-2">
                      {day.overview.accommodation.nearbyBreakfastSpots.map(
                        (spot, index) => (
                          <li key={index} className="text-sm text-gray-700">
                            <strong>{spot.name}</strong> – {spot.distance}
                          </li>
                        )
                      )}
                    </ul>
                  </div>
                )}
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Activity Timeline */}
      <ActivityTimeline activities={day.activities} />
    </motion.div>
  );
}
