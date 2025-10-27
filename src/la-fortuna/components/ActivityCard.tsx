import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, ChevronUp, Camera, ThumbsUp, ThumbsDown, Meh } from 'lucide-react';
import type { Activity, ActivityFeedback } from '../types/itinerary';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface ActivityCardProps {
  activity: Activity;
  index: number;
}

export default function ActivityCard({ activity, index }: ActivityCardProps) {
  const [showGuidelines, setShowGuidelines] = useState(false);
  const [showPhotos, setShowPhotos] = useState(false);
  const [selectedFeedback, setSelectedFeedback] = useState<ActivityFeedback['type'] | null>(null);
  const [showCommentBox, setShowCommentBox] = useState(false);
  const [comment, setComment] = useState('');

  const handleFeedbackSelect = (type: ActivityFeedback['type']) => {
    setSelectedFeedback(type);
    setShowCommentBox(true);
  };

  const handleSubmitFeedback = () => {
    if (selectedFeedback && comment.trim()) {
      // Here you would send the feedback to your backend
      console.log('Feedback submitted:', {
        activityId: activity.id,
        type: selectedFeedback,
        comment,
      });
      alert(`Thank you for your ${selectedFeedback} feedback!`);
      setComment('');
      setShowCommentBox(false);
      setSelectedFeedback(null);
    } else {
      alert('Please select a rating and provide a comment.');
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
    >
      <Card className="border border-gray-200 overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5">
        {/* Activity Header */}
        <div className="p-5 bg-gradient-to-br from-gray-50 to-gray-100 border-b border-gray-200">
          <div className="flex items-center gap-4 mb-2.5">
            <span className="bg-yellow-600 text-white px-3 py-1.5 rounded-full text-xs font-semibold">
              {activity.time}
            </span>
            <span className="bg-gray-200 text-gray-600 px-2.5 py-1 rounded-full text-[11px] font-medium">
              {activity.duration}
            </span>
          </div>

          <h3 className="text-xl font-bold text-gray-900 mb-2">
            {activity.title}
          </h3>
          <p className="text-gray-600 text-sm mb-4">{activity.subtitle}</p>

          {/* Meta Information */}
          {activity.meta.length > 0 && (
            <div className="flex gap-5 text-[13px] text-gray-600 flex-wrap">
              {activity.meta.map((meta, idx) => (
                <div key={idx} className="flex items-center gap-1.5">
                  <span>{meta.icon}</span>
                  <span>{meta.text}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Activity Content */}
        <CardContent className="p-5">
          <p className="text-gray-700 leading-relaxed mb-5">
            {activity.description}
          </p>

          {/* Activity Tags */}
          {activity.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-5">
              {activity.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="bg-yellow-50 text-yellow-900 px-2.5 py-1 rounded-full text-[11px] font-medium border border-yellow-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          {/* Pickup Details */}
          {activity.pickupDetails && (
            <div className="bg-blue-50 border-l-4 border-blue-600 rounded-lg p-4 mb-5">
              <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                📞 Pickup Contact Details
              </h4>
              <div className="space-y-2 text-sm text-gray-700">
                <div>
                  <strong>Driver:</strong> {activity.pickupDetails.driver}
                </div>
                <div>
                  <strong>Phone:</strong> {activity.pickupDetails.phone}
                </div>
                <div>
                  <strong>Vehicle:</strong> {activity.pickupDetails.vehicle}
                </div>
                <div>
                  <strong>Pickup Location:</strong> {activity.pickupDetails.location}
                </div>
                <div>
                  <strong>Backup Contact:</strong> {activity.pickupDetails.backupContact}
                </div>
              </div>
            </div>
          )}

          {/* Nearby Breakfast Spots */}
          {activity.nearbyBreakfastSpots && activity.nearbyBreakfastSpots.length > 0 && (
            <div className="bg-gray-50 rounded-lg p-4 mb-5">
              <h4 className="font-semibold text-gray-900 text-sm mb-2.5">
                ☕ Nearby Breakfast Spots
              </h4>
              <ul className="space-y-2">
                {activity.nearbyBreakfastSpots.map((spot, idx) => (
                  <li key={idx} className="text-sm text-gray-700">
                    <strong>{spot.name}</strong> – {spot.distance}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex gap-4 items-center flex-wrap mb-6 pt-4 border-t border-gray-100">
            {activity.photos && (
              <Button
                onClick={() => setShowPhotos(!showPhotos)}
                className="bg-gradient-to-r from-yellow-600 to-yellow-400 hover:from-yellow-700 hover:to-yellow-500"
              >
                <Camera className="w-4 h-4 mr-2" />
                View Photos
                <span className="ml-2 bg-white/30 px-2 py-0.5 rounded-full text-xs">
                  {activity.photos}
                </span>
              </Button>
            )}

            {activity.guidelines && (
              <Button
                variant="outline"
                onClick={() => setShowGuidelines(!showGuidelines)}
              >
                {showGuidelines ? (
                  <ChevronUp className="w-4 h-4 mr-2" />
                ) : (
                  <ChevronDown className="w-4 h-4 mr-2" />
                )}
                {showGuidelines ? 'Hide' : 'View'} Guidelines
              </Button>
            )}
          </div>

          {/* Guidelines Section */}
          {activity.guidelines && showGuidelines && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="bg-gray-50 rounded-lg p-4 border-l-4 border-yellow-600 mb-5"
            >
              <div className="font-semibold mb-2.5 text-gray-900 flex items-center gap-2">
                <span>ℹ️</span>
                Important Guidelines
              </div>
              <ul className="space-y-2">
                {activity.guidelines.map((guideline, idx) => (
                  <li
                    key={idx}
                    className="pl-5 relative text-gray-700 text-[13px] leading-snug"
                  >
                    <span className="absolute left-0 text-yellow-600 font-bold">
                      •
                    </span>
                    {guideline}
                  </li>
                ))}
              </ul>
            </motion.div>
          )}

          {/* Photo Modal */}
          {showPhotos && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="mb-5 bg-white rounded-lg border border-gray-200 overflow-hidden"
            >
              <div className="bg-gray-100 px-4 py-3 flex justify-between items-center border-b">
                <h3 className="font-semibold text-gray-900">Photo Gallery</h3>
                <button
                  onClick={() => setShowPhotos(false)}
                  className="text-gray-600 hover:text-gray-900 text-xl leading-none"
                >
                  &times;
                </button>
              </div>
              <div className="p-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {Array.from({ length: activity.photos || 0 }).map((_, idx) => (
                  <div
                    key={idx}
                    className="aspect-[4/3] bg-gray-100 rounded-lg flex items-center justify-center text-gray-400 text-sm"
                  >
                    Photo {idx + 1}
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Activity Rating Section */}
          {activity.averageRating !== undefined && (
            <div className="bg-gray-50 rounded-xl p-5 border border-gray-200">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-base font-semibold text-gray-700">
                  Rate This Activity
                </h3>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <div className="flex items-center gap-1">
                    <span className="text-yellow-500 text-base">★</span>
                    <span className="font-semibold text-gray-700">
                      {activity.averageRating}
                    </span>
                  </div>
                  <span>({activity.totalReviews} reviews)</span>
                </div>
              </div>

              {/* Rating Buttons */}
              <div className="flex gap-3 mb-4 flex-wrap">
                <button
                  onClick={() => handleFeedbackSelect('like')}
                  className={cn(
                    'bg-white border-2 px-4 py-2.5 rounded-xl font-medium text-sm cursor-pointer transition-all duration-300 flex items-center gap-2 min-w-[100px] justify-center',
                    selectedFeedback === 'like'
                      ? 'border-green-600 bg-green-600 text-white'
                      : 'border-gray-200 hover:border-gray-300 hover:-translate-y-0.5'
                  )}
                >
                  <ThumbsUp className="w-4 h-4" />
                  Like
                </button>

                <button
                  onClick={() => handleFeedbackSelect('dislike')}
                  className={cn(
                    'bg-white border-2 px-4 py-2.5 rounded-xl font-medium text-sm cursor-pointer transition-all duration-300 flex items-center gap-2 min-w-[100px] justify-center',
                    selectedFeedback === 'dislike'
                      ? 'border-red-600 bg-red-600 text-white'
                      : 'border-gray-200 hover:border-gray-300 hover:-translate-y-0.5'
                  )}
                >
                  <ThumbsDown className="w-4 h-4" />
                  Dislike
                </button>

                <button
                  onClick={() => handleFeedbackSelect('neutral')}
                  className={cn(
                    'bg-white border-2 px-4 py-2.5 rounded-xl font-medium text-sm cursor-pointer transition-all duration-300 flex items-center gap-2 min-w-[100px] justify-center',
                    selectedFeedback === 'neutral'
                      ? 'border-purple-600 bg-gradient-to-r from-purple-600 to-purple-700 text-white'
                      : 'border-gray-200 hover:border-gray-300 hover:-translate-y-0.5'
                  )}
                >
                  <Meh className="w-4 h-4" />
                  Neutral
                </button>
              </div>

              {/* Comment Box */}
              {showCommentBox && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  className="mt-3"
                >
                  <textarea
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    placeholder="Share your thoughts about this activity..."
                    className="w-full min-h-[80px] p-3 border border-gray-200 rounded-lg text-sm resize-y bg-white focus:outline-none focus:border-purple-600 focus:ring-2 focus:ring-purple-100"
                  />
                  <Button
                    onClick={handleSubmitFeedback}
                    className="mt-2 bg-green-600 hover:bg-green-700"
                    size="sm"
                  >
                    Submit Feedback
                  </Button>
                </motion.div>
              )}

              {/* Recent Reviews */}
              {activity.reviews && activity.reviews.length > 0 && (
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <h4 className="text-sm font-semibold text-gray-700 mb-3">
                    Recent Reviews
                  </h4>
                  <div className="space-y-2">
                    {activity.reviews.map((review, idx) => (
                      <div
                        key={idx}
                        className="bg-white rounded-lg p-3 border-l-[3px] border-green-600"
                      >
                        <div className="font-semibold text-[13px] text-gray-700 mb-1">
                          {review.author}
                        </div>
                        <div className="text-[13px] text-gray-600 leading-snug">
                          {review.text}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
}
