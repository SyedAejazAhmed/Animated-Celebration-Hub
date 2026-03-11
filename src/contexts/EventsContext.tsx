
import React, { createContext, useContext, useState } from 'react';

interface Event {
  id: string;
  title: string;
  description: string;
  image: string;
  category: 'wedding' | 'corporate' | 'birthday' | 'custom';
  date: string;
}

interface EventsContextType {
  events: Event[];
  addEvent: (event: Event) => void;
  updateEvent: (event: Event) => void;
  deleteEvent: (id: string) => void;
}

const EventsContext = createContext<EventsContextType>({
  events: [],
  addEvent: () => {},
  updateEvent: () => {},
  deleteEvent: () => {}
});

export const useEvents = () => {
  return useContext(EventsContext);
};

// Enhanced mock data with famous events
const initialEvents: Event[] = [
  // Wedding Events
  {
    id: '1',
    title: 'Royal Wedding Inspiration',
    description: 'A grand wedding ceremony inspired by Prince William and Catherine Middleton\'s royal wedding. Features elegant floral arrangements, a cathedral-style venue, and a reception for 300 guests with classical music and fine dining.',
    image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    category: 'wedding',
    date: 'June 15, 2024'
  },
  {
    id: '2',
    title: 'Celebrity Garden Wedding',
    description: 'An intimate outdoor wedding inspired by celebrity garden ceremonies. Beautiful botanical setting with string lights, organic floral designs, and farm-to-table catering for 150 guests.',
    image: 'https://images.unsplash.com/photo-1465495976277-4387d4b0e4a6?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    category: 'wedding',
    date: 'May 20, 2024'
  },
  {
    id: '3',
    title: 'Destination Beach Wedding',
    description: 'A romantic beachfront wedding ceremony with barefoot elegance. Features sunset timing, tropical florals, steel drum music, and a seafood reception for 100 guests overlooking the ocean.',
    image: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80',
    category: 'wedding',
    date: 'July 8, 2024'
  },
  {
    id: '4',
    title: 'Vintage Hollywood Glamour Wedding',
    description: 'An elegant 1920s-inspired wedding with art deco elements, vintage cars, jazz band, and glamorous reception. Gold and black color scheme with feathers and pearls for 200 guests.',
    image: 'https://images.unsplash.com/photo-1606216794074-735e91aa2c92?ixlib=rb-4.0.3&auto=format&fit=crop&w=2127&q=80',
    category: 'wedding',
    date: 'September 12, 2024'
  },
  {
    id: '5',
    title: 'Rustic Barn Wedding',
    description: 'A charming countryside wedding in a restored barn venue. Features mason jar centerpieces, string lights, country music, and BBQ-style reception for 180 guests with dancing under the stars.',
    image: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?ixlib=rb-4.0.3&auto=format&fit=crop&w=2127&q=80',
    category: 'wedding',
    date: 'August 25, 2024'
  },

  // Corporate Events
  {
    id: '6',
    title: 'Apple-Style Product Launch',
    description: 'A high-tech product launch event inspired by Apple\'s keynote presentations. Features minimalist stage design, LED screens, live streaming, and hands-on demo stations for 500 attendees.',
    image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80',
    category: 'corporate',
    date: 'March 15, 2024'
  },
  {
    id: '7',
    title: 'TED Talk Conference',
    description: 'An inspiring conference featuring thought leaders and innovators. Multiple stages, interactive workshops, networking lounges, and live broadcasting for 1000+ global attendees.',
    image: 'https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    category: 'corporate',
    date: 'April 22, 2024'
  },
  {
    id: '8',
    title: 'Google I/O Developer Summit',
    description: 'A tech developer conference with coding workshops, product demonstrations, startup pitches, and networking sessions. Features interactive displays and VR experiences for 800 developers.',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    category: 'corporate',
    date: 'May 10, 2024'
  },
  {
    id: '9',
    title: 'Fortune 500 Annual Gala',
    description: 'An elegant black-tie corporate gala with award ceremonies, keynote speakers, fine dining, and entertainment. Premium venue with sophisticated decor for 600 executives and stakeholders.',
    image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    category: 'corporate',
    date: 'November 18, 2024'
  },
  {
    id: '10',
    title: 'Startup Pitch Competition',
    description: 'A dynamic startup competition event with investor panels, pitch presentations, networking mixers, and award ceremonies. Modern venue with interactive technology for 400 entrepreneurs and investors.',
    image: 'https://images.unsplash.com/photo-1559223607-a43c990c692c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    category: 'corporate',
    date: 'February 28, 2024'
  },

  // Birthday Events
  {
    id: '11',
    title: 'Hollywood Celebrity Sweet 16',
    description: 'A glamorous sweet sixteen party inspired by celebrity celebrations. Red carpet entrance, paparazzi photos, DJ entertainment, custom cake, and VIP lounge for 120 teenage guests.',
    image: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    category: 'birthday',
    date: 'June 5, 2024'
  },
  {
    id: '12',
    title: 'Superhero Theme Party',
    description: 'An action-packed superhero birthday party with costume contests, obstacle courses, comic book decorations, and superhero character appearances for 50 kids and families.',
    image: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80',
    category: 'birthday',
    date: 'July 20, 2024'
  },
  {
    id: '13',
    title: 'Milestone 50th Birthday Bash',
    description: 'An elegant 50th birthday celebration with live jazz band, cocktail hour, gourmet dinner, and dancing. Sophisticated decor with gold accents for 80 adult guests in an upscale venue.',
    image: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    category: 'birthday',
    date: 'August 15, 2024'
  },
  {
    id: '14',
    title: 'Princess Castle Birthday',
    description: 'A magical princess-themed birthday party with castle decorations, fairy tale characters, crown-making activities, and royal feast for 40 children in a enchanted garden setting.',
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    category: 'birthday',
    date: 'September 8, 2024'
  },
  {
    id: '15',
    title: 'Retro 80s Birthday Party',
    description: 'A nostalgic 80s-themed birthday celebration with neon decorations, disco lights, retro music, arcade games, and themed cocktails for 60 guests reliving the decade.',
    image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    category: 'birthday',
    date: 'October 12, 2024'
  },

  // Custom Events
  {
    id: '16',
    title: 'Coachella-Style Music Festival',
    description: 'A multi-day music festival with multiple stages, food trucks, art installations, camping areas, and performances by top artists. Bohemian decor and festival vibes for 5000+ attendees.',
    image: 'https://images.unsplash.com/photo-1459749187778-9d4971936161?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    category: 'custom',
    date: 'April 15-17, 2024'
  },
  {
    id: '17',
    title: 'Charity Auction Gala',
    description: 'An upscale charity fundraising event with silent auctions, live entertainment, fine dining, and celebrity appearances. Elegant ballroom setting raising funds for local causes with 300 donors.',
    image: 'https://images.unsplash.com/photo-1566737236500-c8ac43014a8e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    category: 'custom',
    date: 'December 10, 2024'
  },
  {
    id: '18',
    title: 'Cultural Heritage Festival',
    description: 'A vibrant cultural celebration featuring traditional music, dance performances, authentic cuisine, craft demonstrations, and cultural exhibits for 2000 community members.',
    image: 'https://images.unsplash.com/photo-1574391884720-bbc0d1eeba47?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    category: 'custom',
    date: 'May 25, 2024'
  },
  {
    id: '19',
    title: 'Wine Tasting & Harvest Festival',
    description: 'An exclusive wine tasting event in vineyard settings with sommelier-led tastings, gourmet food pairings, live acoustic music, and harvest activities for 150 wine enthusiasts.',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    category: 'custom',
    date: 'September 30, 2024'
  },
  {
    id: '20',
    title: 'Alumni Reunion Celebration',
    description: 'A memorable 25-year class reunion with nostalgic decorations, memory displays, live band playing hits from graduation year, dinner, and dancing for 200 alumni and guests.',
    image: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    category: 'custom',
    date: 'June 30, 2024'
  }
];

export const EventsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [events, setEvents] = useState<Event[]>(initialEvents);

  const addEvent = (event: Event) => {
    setEvents(prev => [...prev, event]);
  };

  const updateEvent = (updatedEvent: Event) => {
    setEvents(prev => prev.map(event => 
      event.id === updatedEvent.id ? updatedEvent : event
    ));
  };

  const deleteEvent = (id: string) => {
    setEvents(prev => prev.filter(event => event.id !== id));
  };

  const value = {
    events,
    addEvent,
    updateEvent,
    deleteEvent
  };

  return (
    <EventsContext.Provider value={value}>
      {children}
    </EventsContext.Provider>
  );
};
