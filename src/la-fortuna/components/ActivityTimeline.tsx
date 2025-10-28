import type { Activity } from '../types/itinerary';
import ActivityCard from './ActivityCard';

interface ActivityTimelineProps {
  activities: Activity[];
}

export default function ActivityTimeline({ activities }: ActivityTimelineProps) {
  return (
    <div className="relative pl-8">
      {/* Timeline Line */}
      <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-yellow-600 to-yellow-300" />

      {/* Activities */}
      <div className="space-y-6">
        {activities.map((activity, index) => (
          <div key={activity.id} className="relative">
            {/* Timeline Dot */}
            <div className="absolute -left-[22px] top-5 w-3 h-3 bg-yellow-600 rounded-full border-[3px] border-white shadow-[0_0_0_2px_rgb(202,138,4)]" />

            {/* Activity Card */}
            <ActivityCard activity={activity} index={index} />
          </div>
        ))}
      </div>
    </div>
  );
}
