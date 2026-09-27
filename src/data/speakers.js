import bigBassImg from '../assets/images/big_bass_subwoofer_1790503779039.jpg';
import bassImg from '../assets/images/bass_speaker_1790503791364.jpg';
import midImg from '../assets/images/mid_range_speaker_1790503801613.jpg';
import comboImg from '../assets/images/combo_stack_system_1790503811983.jpg';
import heroImg from '../assets/images/hero_sound_system_1790503765525.jpg';

export const BUSINESS_INFO = {
  name: 'HYPER SOUNDS',
  phone: '0721748401',
  internationalPhone: '254721748401',
  tagline: 'Powerful Sound. Unforgettable Events.',
  supportingText: 'Quality bass and mid-range speakers available for hire for parties, weddings, concerts, corporate events and all types of events.',
  whatsAppBaseUrl: 'https://wa.me/254721748401',
};

export const HERO_ASSET = heroImg;

export const SPEAKER_PRODUCTS = [
  {
    id: 'big-bass',
    name: 'BIG BASS SPEAKER',
    tagline: 'High-Power Subwoofer for Heavy Low-End',
    description: 'Powerful subwoofer designed to deliver deep, heavy bass for large events and outdoor functions.',
    image: bigBassImg,
    category: 'subwoofer',
    specs: ['Deep low-frequency response', 'High acoustic output', 'Touring-grade enclosure', 'Outdoor coverage'],
    bestFor: 'Concerts, festivals, stadiums, big outdoor parties',
  },
  {
    id: 'bass',
    name: 'BASS SPEAKER',
    tagline: 'Punchy Low-Frequency Reinforcement',
    description: 'Strong bass speakers suitable for parties, weddings, birthdays and medium-sized events.',
    image: bassImg,
    category: 'bass',
    specs: ['Punchy bass response', 'Clean low-end reinforcement', 'Compact footprint', 'Club & party ready'],
    bestFor: 'Weddings, club parties, private celebrations',
  },
  {
    id: 'mid',
    name: 'MID SPEAKER',
    tagline: 'Crystal Clear Vocals & Instruments',
    description: 'Clear and powerful mid-range speakers designed for vocals, music and balanced event sound.',
    image: midImg,
    category: 'mid',
    specs: ['High vocal intelligibility', 'Wide horizontal dispersion', 'Crisp highs & rich mids', 'Pole & stand mountable'],
    bestFor: 'Speeches, live vocals, church sound, indoor acoustics',
  },
  {
    id: 'mid-bass-combo',
    name: 'MID + BASS COMBINATION',
    tagline: 'Full-Spectrum Acoustic System',
    description: 'A balanced combination of bass and mid speakers for a complete event sound experience.',
    image: comboImg,
    category: 'combo',
    specs: ['Full range sound coverage', 'Matched acoustic crossover', 'Complete stage audio', 'Plug & play reinforcement'],
    bestFor: 'Complete event coverage, corporate galas, live bands',
  },
];

export const POPULAR_PACKAGES = [
  {
    id: 'small-event',
    name: 'SMALL EVENT PACKAGE',
    subtitle: 'Crisp sound clarity for intimate venues & private parties',
    suitableFor: ['Birthday parties', 'Small gatherings', 'Small indoor events'],
    equipment: {
      bigBass: 0,
      bass: 1,
      mid: 2,
    },
    features: [
      '1 Bass Speaker',
      '2 Mid Speakers',
      'Balanced vocal and music audio',
      'Ideal for up to 80-120 guests',
    ],
  },
  {
    id: 'party-package',
    name: 'PARTY PACKAGE',
    subtitle: 'Punchy bass and high energy for medium celebrations',
    suitableFor: ['Parties', 'Weddings', 'Birthdays', 'Medium events'],
    equipment: {
      bigBass: 0,
      bass: 2,
      mid: 2,
    },
    features: [
      '2 Bass Speakers',
      '2 Mid Speakers',
      'Enhanced bass punch for dancing',
      'Ideal for up to 250-400 guests',
    ],
    badge: 'Most Popular',
  },
  {
    id: 'large-event',
    name: 'LARGE EVENT PACKAGE',
    subtitle: 'Massive acoustic power and deep bass throw for crowds',
    suitableFor: ['Large parties', 'Outdoor events', 'Concerts', 'Corporate events'],
    equipment: {
      bigBass: 2,
      bass: 2,
      mid: 4,
    },
    features: [
      '2 Big Bass Speakers',
      '2 Bass Speakers',
      '4 Mid Speakers',
      'Heavy bass penetration & wide dispersion',
      'Ideal for 500+ guests & open fields',
    ],
  },
];

export const EVENT_TYPES = [
  {
    id: 'parties',
    title: 'Parties',
    description: 'Energetic sound systems with heavy bass that keep the dancefloor alive all night long.',
    recommendedSetup: '2 Bass Speakers + 2 Mid Speakers',
    iconName: 'PartyPopper',
  },
  {
    id: 'weddings',
    title: 'Weddings',
    description: 'Impeccable speech clarity for vows and speeches paired with punchy evening party sound.',
    recommendedSetup: '2 Bass Speakers + 2 Mid Speakers',
    iconName: 'HeartHandshake',
  },
  {
    id: 'concerts',
    title: 'Concerts',
    description: 'Full-power concert audio with chest-thumping big bass and wide-coverage line projection.',
    recommendedSetup: '2 Big Bass + 2 Bass + 4 Mid Speakers',
    iconName: 'MicVocal',
  },
  {
    id: 'corporate',
    title: 'Corporate Events',
    description: 'Clean acoustic dispersion ensuring crisp audio delivery for presentations, keynote speeches, and galas.',
    recommendedSetup: '1-2 Bass + 2 Mid Speakers',
    iconName: 'Building2',
  },
  {
    id: 'church',
    title: 'Church Events',
    description: 'Rich, natural vocal projection and worship music reinforcement for sanctuaries and outdoor crusades.',
    recommendedSetup: '1-2 Bass + 2-4 Mid Speakers',
    iconName: 'Church',
  },
  {
    id: 'schools',
    title: 'School Events',
    description: 'Robust audio coverage for sports days, prize givings, music festivals, and student functions.',
    recommendedSetup: '1 Bass + 2 Mid Speakers',
    iconName: 'GraduationCap',
  },
  {
    id: 'birthdays',
    title: 'Birthday Parties',
    description: 'Compact yet powerful speaker packages tailored to home backyards and entertainment halls.',
    recommendedSetup: '1 Bass + 2 Mid Speakers',
    iconName: 'Cake',
  },
  {
    id: 'outdoors',
    title: 'Outdoor Events',
    description: 'Long-throw big bass and mid-horns designed to maintain acoustic intensity in open outdoor spaces.',
    recommendedSetup: '2 Big Bass + 2 Bass + 4 Mid Speakers',
    iconName: 'MoonStar',
  },
];

export const GALLERY_ITEMS = [
  {
    id: 'gal-1',
    title: 'Outdoor Festival Stage Setup',
    category: 'Concerts & Outdoor',
    image: heroImg,
    caption: 'Dual 18" big bass stacks with high-throw mid arrays delivering concert-level sound pressure.',
  },
  {
    id: 'gal-2',
    title: 'Heavy Subwoofer Bins',
    category: 'Bass Power',
    image: bigBassImg,
    caption: 'Deep low-end subwoofers tuned for outdoor event punch and chest-thumping vibration.',
  },
  {
    id: 'gal-3',
    title: 'Touring Bass Reflex Cabinets',
    category: 'Sound Systems',
    image: bassImg,
    caption: 'Precision tuned bass cabinets delivering clean, rhythmic low-end for parties and weddings.',
  },
  {
    id: 'gal-4',
    title: 'High-Output Mid Reinforcement',
    category: 'Vocal Clarity',
    image: midImg,
    caption: 'Horn-loaded mid-range speakers engineered for ultra-clear speech and music reproduction.',
  },
  {
    id: 'gal-5',
    title: 'Complete Mid + Bass Stack',
    category: 'Full Systems',
    image: comboImg,
    caption: 'Integrated dual-tier speaker stack providing seamless coverage from 35Hz sub-bass up to 20kHz.',
  },
];

/**
 * Builds the prefilled WhatsApp URL for a custom sound package
 */
export function buildWhatsAppPackageUrl(quantities) {
  const total = (quantities.bigBass || 0) + (quantities.bass || 0) + (quantities.mid || 0);
  
  if (total === 0) {
    const text = encodeURIComponent(
      'Hello Hyper Sounds, I would like to hire sound equipment for my event. Please send me your packages and quotation.'
    );
    return `${BUSINESS_INFO.whatsAppBaseUrl}?text=${text}`;
  }

  const message = `Hello Hyper Sounds, I would like to hire a sound package.\n\nBig Bass Speakers: ${quantities.bigBass}\nBass Speakers: ${quantities.bass}\nMid Speakers: ${quantities.mid}\nTotal Speakers: ${total}\n\nPlease send me a quotation.`;
  return `${BUSINESS_INFO.whatsAppBaseUrl}?text=${encodeURIComponent(message)}`;
}

/**
 * Builds direct WhatsApp URL for a specific speaker hire
 */
export function buildWhatsAppSpeakerHireUrl(speakerName, quantity) {
  const message = `Hello Hyper Sounds, I would like to hire ${quantity}x ${speakerName} for my upcoming event. Please send me a quotation.`;
  return `${BUSINESS_INFO.whatsAppBaseUrl}?text=${encodeURIComponent(message)}`;
}

/**
 * Builds prefilled WhatsApp URL for a pre-made package
 */
export function buildWhatsAppPresetPackageUrl(pkg) {
  const total = pkg.equipment.bigBass + pkg.equipment.bass + pkg.equipment.mid;
  const message = `Hello Hyper Sounds, I would like to get a quote for the ${pkg.name}.\n\nEquipment included:\n- Big Bass Speakers: ${pkg.equipment.bigBass}\n- Bass Speakers: ${pkg.equipment.bass}\n- Mid Speakers: ${pkg.equipment.mid}\nTotal Speakers: ${total}\n\nPlease send me a quotation and availability.`;
  return `${BUSINESS_INFO.whatsAppBaseUrl}?text=${encodeURIComponent(message)}`;
}
