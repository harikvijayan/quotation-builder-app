import { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Star, AlertTriangle } from 'lucide-react';
import ItineraryHeader from '../components/ItineraryHeader';
import ItinerarySidebar from '../components/ItinerarySidebar';
import ItineraryDayContent from '../components/ItineraryDayContent';
import ItineraryFeedbackTab from '../components/ItineraryFeedbackTab';
import ItineraryIssuesTab from '../components/ItineraryIssuesTab';
import type { ItineraryPackage } from '../types/itinerary';
import { cn } from '@/lib/utils';
import img1 from '@/assets/img1.png';
import img2 from '@/assets/img2.jpeg';
import img3 from '@/assets/img3.jpeg';
import img4 from '@/assets/img4.jpeg';
import img5 from '@/assets/img5.jpeg';
import img6 from '@/assets/img6.jpeg';

// Mock data - Replace with actual API call
const mockPackageData: ItineraryPackage = {
  id: 'LF-MUN-2025-001',
  title: 'Munnar Hill Station Experience',
  subtitle: 'Tea Gardens & Mountain Serenity',
  userName: 'Chitra',
  duration: 'Sep 15 - Sep 21, 2025',
  stats: {
    days: 7,
    nights: 6,
    destinations: 12,
    rating: 4.9,
  },
  travelers: {
    adults: 2,
    children: 1,
    infants: 1,
  },
  days: [
    {
      overview: {
        dayNumber: 1,
        title: 'Arrival & Local Sightseeing',
        date: 'Mon, Sep 15',
        fullDate: 'Monday, September 15, 2025',
        meals: [
          { type: 'breakfast', label: '🌅 Breakfast', value: 'Hotel Continental (7:30 AM)' },
          { type: 'lunch', label: '🍽️ Lunch', value: 'Saravana Bhavan, Munnar' },
          { type: 'dinner', label: '🌃 Dinner', value: 'Resort Restaurant - Kerala Specialties' },
        ],
        accommodation: {
          name: 'Spice Tree Munnar Resort',
          rating: '⭐⭐⭐⭐ Heritage Hill Resort',
          website: 'https://www.spicetreemunnar.com',
          mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3...SpiceTree%20Munnar',
          nearbyBreakfastSpots: [
            { name: 'Hotel Appunu\'s', distance: '~15 min drive' },
            { name: 'Bar Room', distance: '~35 min drive' },
            { name: 'Flavours', distance: '~40 min drive' },
          ],
        },
      },
      activities: [
        {
          id: 'pickup-1',
          time: '05:30 AM',
          duration: 'Pickup',
          title: 'Airport Pickup & Way to Munnar',
          subtitle: 'Cochin International Airport to Munnar Resort (130 km, 4 hours)',
          description: 'Our representative will meet you at Cochin International Airport arrival hall with a name board. Enjoy a comfortable drive through Kerala\'s scenic landscapes, including tea plantations, spice gardens, and mountain views.',
          tags: ['Airport Transfer', 'Meet & Greet', 'Scenic Drive', 'Breakfast Stop'],
          meta: [
            { icon: '🚗', text: 'AC Vehicle Provided' },
            { icon: '📱', text: 'Driver Contact Available' },
            { icon: '🛣️', text: 'Scenic Mountain Route' },
          ],
          pickupDetails: {
            driver: 'Suresh Kumar',
            phone: '+91-94475-56789',
            vehicle: 'Toyota Innova (White) - KL-07-AB-1234',
            location: 'Outside Arrival Hall, Gate 3',
            backupContact: 'Travel Desk +91-484-234-5678',
          },
          guidelines: [
            'Driver will wait at Gate 3 with name board "La Fortuna - [Your Name]"',
            'Call driver 30 minutes before flight landing for coordination',
            'Keep backup contact handy in case of any issues',
            'Carry light snacks and water for the journey',
            'Vehicle has charging points for mobile devices',
            'Inform driver of any special requirements (AC, music, stops)',
          ],
          nearbyBreakfastSpots: [
            { name: 'Hotel Appunu\'s', distance: '~15 min drive' },
            { name: 'Bar Room', distance: '~35 min drive' },
            { name: 'Flavours', distance: '~40 min drive' },
          ],
        },
        {
          id: 'breakfast-1',
          time: '07:30 AM',
          duration: '45 mins',
          title: 'Traditional Kerala Breakfast',
          subtitle: 'Resort Restaurant - Authentic South Indian',
          description: 'Start your day with authentic Kerala breakfast featuring appam with stew, puttu with kadala curry, fresh coconut chutney, banana fritters, and aromatic cardamom tea. The resort\'s specialty breakfast showcases traditional cooking methods.',
          tags: ['Vegetarian Options', 'Fresh Juices', 'Live Cooking'],
          meta: [
            { icon: '🍳', text: 'Included in Package' },
            { icon: '🥐', text: 'International & Local Options' },
          ],
        },
        {
          id: 'tea-museum-1',
          time: '09:00 AM',
          duration: '2.5 hours',
          title: 'Tata Tea Museum',
          subtitle: 'Working Tea Processing Unit - Learn Tea Making Process',
          description: 'Discover the fascinating journey of tea from leaf to cup at this operational tea processing facility. Watch the withering, rolling, fermentation, and drying processes. Enjoy complimentary tea tasting sessions and learn about different tea grades.',
          tags: ['Tea Gardens', 'Mountain Views', 'Nature Photography'],
          meta: [
            { icon: '🌿', text: 'Tea Plantation Access' },
            { icon: '📸', text: 'Photography Allowed' },
            { icon: '📸', text: 'Scenic Photography' },
          ],
          photos: 6,
          photoUrls: [img1, img2, img3, img4, img5, img6],
          averageRating: 4.6,
          totalReviews: 24,
          reviews: [
            {
              author: 'Sarah M.',
              text: 'Amazing variety of food! The live cooking station was a highlight. Staff was very accommodating for dietary restrictions.',
            },
            {
              author: 'John D.',
              text: 'Good breakfast spread but could use more fresh fruit options. Overall satisfied with the quality.',
            },
          ],
          guidelines: [
            'Wear comfortable walking shoes with good grip',
            'Carry water bottle and sun hat (available for purchase)',
            'Photography fee: ₹25 for camera, ₹25 for video camera',
            'Security check mandatory at entrance - avoid large bags',
            'Best photo spots: Diwan-i-Khas and gardens',
            'Stay close to the group and follow guide instructions',
          ],
        },
        {
          id: 'lunch-1',
          time: '12:30 PM',
          duration: '1 hour',
          title: 'Authentic Kerala Lunch',
          subtitle: 'Saravana Bhavan, Munnar - Established 1981',
          description: 'Experience authentic South Indian vegetarian cuisine served on banana leaves. Enjoy specialties like sambar rice, rasam, avial, thoran, and payasam dessert. This renowned restaurant chain maintains traditional cooking methods.',
          tags: ['Historic Restaurant', 'Authentic Flavors', 'Cultural Experience'],
          meta: [
            { icon: '🍽️', text: 'Traditional Cuisine' },
            { icon: '💳', text: 'Included in Package' },
          ],
        },
        {
          id: 'rose-garden-1',
          time: '02:00 PM',
          duration: '1.5 hours',
          title: 'Rose Garden & Spice Plantation',
          subtitle: 'Munnar\'s Fragrant Gardens - Local Flora Experience',
          description: 'Stroll through terraced gardens featuring roses, exotic flowers, and spice plants. Learn about cardamom, pepper, cinnamon cultivation. Perfect for photography with mountain backdrop and fresh mountain air.',
          tags: ['Architectural Marvel', 'Panoramic Views', 'Religious Heritage', 'Photography'],
          meta: [
            { icon: '🕌', text: 'Religious Site' },
            { icon: '👗', text: 'Dress Code Required' },
            { icon: '📸', text: 'Photography Fee' },
          ],
          guidelines: [
            'Dress modestly: covered arms, legs, and head (scarves provided)',
            'Remove shoes before entering the main courtyard',
            'Photography fees: ₹300 for camera, ₹500 for video',
            'Maintain respectful behavior and low voices',
            'Friday prayers: 12:00-2:00 PM (visiting may be restricted)',
            'Minaret climb: Additional ₹100 (subject to availability)',
          ],
        },
        {
          id: 'town-walk-1',
          time: '04:00 PM',
          duration: '1 hour',
          title: 'Munnar Town Walk',
          subtitle: 'Local Markets & Tea Shops',
          description: 'Explore the charming hill station town with colonial architecture remnants. Visit local tea shops, spice markets, and handicraft stores. Purchase fresh tea varieties, cardamom, and handmade souvenirs.',
          tags: ['Cultural Immersion', 'Local Shopping', 'Street Photography', 'Traditional Crafts'],
          meta: [
            { icon: '🛍️', text: 'Shopping Experience' },
            { icon: '🍪', text: 'Street Food (Optional)' },
            { icon: '🚲', text: 'Rickshaw Ride Available' },
          ],
        },
        {
          id: 'rest-1',
          time: '05:30 PM',
          duration: '45 mins',
          title: 'Return to Hotel & Refresh',
          subtitle: 'Rest and Preparation for Dinner',
          description: 'Return to your hotel for some relaxation time. Freshen up, review the day\'s experiences, and prepare for a delightful dinner. Use this time to rest your feet and enjoy the hotel\'s amenities.',
          tags: [],
          meta: [],
        },
        {
          id: 'dinner-1',
          time: '07:30 PM',
          duration: '1.5 hours',
          title: 'Welcome Dinner',
          subtitle: 'Resort Restaurant - Kerala Specialties',
          description: 'Enjoy a buffet dinner featuring Kerala fish curry, appam, beef fry, vegetable stew, and traditional desserts like ada pradhaman. Experience live Kathakali performance (selected evenings) while dining.',
          tags: ['Welcome Dinner', 'Group Dining', 'Cultural Entertainment'],
          meta: [
            { icon: '🍽️', text: 'Included in Package' },
            { icon: '🌍', text: 'Multi-cuisine' },
            { icon: '🎵', text: 'Live Music (Weekends)' },
          ],
        },
        {
          id: 'evening-1',
          time: '09:30 PM',
          duration: 'Free Time',
          title: 'Evening at Leisure',
          subtitle: 'Rest and Prepare for Tomorrow\'s Journey to Agra',
          description: 'Free time to relax in your room, explore the hotel facilities, or take an evening stroll in the hotel gardens. Early rest recommended as tomorrow involves travel to Agra and the magnificent Taj Mahal visit.',
          tags: ['Personal Time', 'Hotel Amenities', 'Early Rest'],
          meta: [],
        },
      ],
    },
  ],
  contacts: {
    emergency: {
      name: 'Emergency Contact',
      role: 'Emergency',
      phone: '+1-800-TRAVEL-NOW',
      email: 'emergency@lafortuna.com',
    },
    guide: {
      name: 'Ravi Menon',
      role: 'Tour Guide',
      phone: '+91-98765-43210',
      whatsapp: true,
      details: {
        languages: 'English, Hindi, French',
        experience: '15+ Years',
        specialty: 'Heritage & Culture',
      },
    },
    manager: {
      name: 'Priya Menon',
      role: 'Package Manager',
      phone: '+91-11-4567-8900',
      email: 'priya.m@lafortuna.com',
    },
  },
};

type TabType = 'itinerary' | 'feedback' | 'issues';

export default function ItineraryPlanPage() {
  const [activeTab, setActiveTab] = useState<TabType>('itinerary');
  const [currentDay, setCurrentDay] = useState(1);
  const [packageData] = useState<ItineraryPackage>(mockPackageData);

  const tabs = [
    { id: 'itinerary' as TabType, label: 'Detailed Itinerary', icon: Calendar },
    { id: 'feedback' as TabType, label: 'Share Feedback', icon: Star },
    { id: 'issues' as TabType, label: 'Report Issues', icon: AlertTriangle },
  ];

  return (
    <div className="min-h-screen bg-linear-to-br from-gray-50 to-gray-100">
      <div className="max-w-[1400px] mx-auto p-5">
        {/* Header */}
        <ItineraryHeader packageData={packageData} />

        {/* Navigation Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-2xl px-6 mb-5 shadow-md"
        >
          <ul className="flex gap-10 list-none">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <li
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={cn(
                    'py-5 border-b-[3px] cursor-pointer font-semibold transition-all duration-300 text-base flex items-center gap-2',
                    activeTab === tab.id
                      ? 'text-yellow-600 border-yellow-600'
                      : 'text-gray-600 border-transparent hover:text-gray-900'
                  )}
                >
                  <Icon className="w-4 h-4" />
                  {tab.label}
                </li>
              );
            })}
          </ul>
        </motion.div>

        {/* Tab Content */}
        {activeTab === 'itinerary' && (
          <motion.div
            key="itinerary-tab"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-6"
          >
            {/* Sidebar */}
            <ItinerarySidebar
              days={packageData.days}
              currentDay={currentDay}
              onDayChange={setCurrentDay}
              contacts={packageData.contacts}
            />

            {/* Main Content */}
            <ItineraryDayContent
              day={packageData.days[currentDay - 1]}
              packageId={packageData.id}
            />
          </motion.div>
        )}

        {activeTab === 'feedback' && (
          <motion.div
            key="feedback-tab"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <ItineraryFeedbackTab packageId={packageData.id} />
          </motion.div>
        )}

        {activeTab === 'issues' && (
          <motion.div
            key="issues-tab"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <ItineraryIssuesTab packageId={packageData.id} />
          </motion.div>
        )}
      </div>
    </div>
  );
}
