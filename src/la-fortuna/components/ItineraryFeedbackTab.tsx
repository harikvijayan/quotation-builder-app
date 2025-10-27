import { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, CheckCircle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface ItineraryFeedbackTabProps {
  packageId: string;
}

export default function ItineraryFeedbackTab({
  packageId,
}: ItineraryFeedbackTabProps) {
  const [feedback, setFeedback] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!feedback.trim()) {
      alert('Please provide your feedback before submitting.');
      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      console.log('Feedback submitted:', { packageId, feedback });
      setIsSubmitted(true);
      setIsSubmitting(false);

      // Reset after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
        setFeedback('');
      }, 3000);
    }, 1500);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-[700px] mx-auto"
    >
      <Card className="shadow-xl border-0">
        <CardContent className="p-10 text-center">
          {/* Header */}
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-9 h-9 flex items-center justify-center">
              <Star className="w-9 h-9 text-yellow-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">
              Share Your Feedback
            </h2>
          </div>

          <p className="text-gray-600 mb-8 leading-relaxed text-base">
            We'd love to hear about your travel experience! Your feedback helps
            us improve our services.
          </p>

          {/* Form */}
          <form onSubmit={handleSubmit}>
            <div className="text-left mb-5">
              <label
                htmlFor="feedbackText"
                className="block mb-2 font-semibold text-gray-700"
              >
                How was your experience?
              </label>
              <textarea
                id="feedbackText"
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
                placeholder="Tell us about your trip, the destinations, accommodations, guide service, and overall experience..."
                className="w-full h-[100px] p-3 border-2 border-gray-200 rounded-xl text-base resize-y transition-all duration-300 bg-gray-50 focus:outline-none focus:border-yellow-600 focus:ring-4 focus:ring-yellow-100 focus:bg-white"
                required
              />
            </div>

            <Button
              type="submit"
              disabled={isSubmitting || isSubmitted}
              className="w-full bg-gradient-to-r from-yellow-600 to-yellow-400 hover:from-yellow-700 hover:to-yellow-500 text-base font-semibold py-6 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {isSubmitting && (
                <span className="inline-block w-5 h-5 border-2 border-gray-900 border-t-transparent rounded-full animate-spin mr-2" />
              )}
              {isSubmitted ? (
                <span className="flex items-center justify-center gap-2 text-green-700">
                  <CheckCircle className="w-5 h-5" />
                  Feedback Submitted!
                </span>
              ) : (
                <span>📤 Submit Feedback</span>
              )}
            </Button>
          </form>
        </CardContent>
      </Card>
    </motion.div>
  );
}
