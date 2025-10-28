import { useState } from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, CheckCircle, Phone } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface ItineraryIssuesTabProps {
  packageId: string;
}

export default function ItineraryIssuesTab({
  packageId,
}: ItineraryIssuesTabProps) {
  const [issue, setIssue] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!issue.trim()) {
      alert('Please describe the issue before submitting.');
      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      console.log('Issue reported:', { packageId, issue });
      setIsSubmitted(true);
      setIsSubmitting(false);

      // Reset after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
        setIssue('');
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
              <AlertTriangle className="w-9 h-9 text-red-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">
              Report an Issue
            </h2>
          </div>

          <p className="text-gray-600 mb-6 leading-relaxed text-base">
            Experiencing any problems during your trip? Let us know immediately
            so we can assist you.
          </p>

          {/* Emergency Alert */}
          <div className="bg-red-50 border-2 border-red-200 rounded-xl p-5 mb-8 flex gap-4 text-left">
            <AlertTriangle className="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5" />
            <div>
              <div className="font-bold text-red-900 mb-1">
                For urgent issues:
              </div>
              <div className="text-red-800 text-sm">
                Call our emergency hotline:{' '}
                <a
                  href="tel:+18007TRAVEL"
                  className="font-bold underline flex items-center gap-1 mt-1"
                >
                  <Phone className="w-4 h-4" />
                  +1-800-TRAVEL-NOW
                </a>
              </div>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit}>
            <div className="text-left mb-5">
              <label
                htmlFor="issueText"
                className="block mb-2 font-semibold text-gray-700"
              >
                Describe the issue
              </label>
              <textarea
                id="issueText"
                value={issue}
                onChange={(e) => setIssue(e.target.value)}
                placeholder="Please provide details about the issue you're experiencing, including location, time, and any relevant information..."
                className="w-full h-[100px] p-3 border-2 border-gray-200 rounded-xl text-base resize-y transition-all duration-300 bg-gray-50 focus:outline-none focus:border-red-600 focus:ring-4 focus:ring-red-100 focus:bg-white"
                required
              />
            </div>

            <Button
              type="submit"
              disabled={isSubmitting || isSubmitted}
              className="w-full bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 text-base font-semibold py-6 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {isSubmitting && (
                <span className="inline-block w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
              )}
              {isSubmitted ? (
                <span className="flex items-center justify-center gap-2">
                  <CheckCircle className="w-5 h-5" />
                  Issue Reported!
                </span>
              ) : (
                <span>📤 Report Issue</span>
              )}
            </Button>
          </form>
        </CardContent>
      </Card>
    </motion.div>
  );
}
