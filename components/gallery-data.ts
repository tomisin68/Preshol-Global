export interface GalleryImage {
  src: string;
  alt: string;
  /** Intrinsic dimensions, used by next/image for aspect-ratio calculation.
   * Actual rendered size is controlled by the .gallery-item.{tall,short,med}
   * img CSS rules (fixed height + object-fit: cover), same as the original. */
  width: number;
  height: number;
  size: 'tall' | 'short' | 'med';
  country: string;
  /** Full caption used by the lightbox (index.html data-caption) */
  fullCaption: string;
  /** Short tag shown on the grid overlay, e.g. "Nigeria" or "Conference" */
  tag: string;
  tagIcon: 'icon-map-pin' | 'icon-mic';
  /** Short caption shown on the grid overlay */
  gridCaption: string;
}

export const GALLERY_IMAGES: GalleryImage[] = [
  {
    src: '/images/gallery/preshol-gallery1.jpeg',
    alt: 'Preshol Global community outreach in Northern Nigeria',
    width: 853,
    height: 1280,
    size: 'tall',
    country: 'nigeria',
    fullCaption: 'Community Outreach — Meeting families in underserved Northern communities, Nigeria',
    tag: 'Nigeria',
    tagIcon: 'icon-map-pin',
    gridCaption: 'Community Outreach — Northern Zone',
  },
  {
    src: '/images/gallery/preshol-gallery2.jpeg',
    alt: 'School engagement session for mental health awareness in Nigeria',
    width: 1080,
    height: 809,
    size: 'short',
    country: 'nigeria',
    fullCaption: 'Mental health talk at a local secondary school, Nigeria',
    tag: 'Nigeria',
    tagIcon: 'icon-map-pin',
    gridCaption: 'School Engagement Session',
  },
  {
    src: '/images/gallery/preshol-gallery3.jpeg',
    alt: 'Preshol Global team arriving in Dabala, Volta Region Ghana',
    width: 1280,
    height: 964,
    size: 'med',
    country: 'ghana',
    fullCaption: 'Arriving in the Volta Region for community mission, Ghana',
    tag: 'Ghana',
    tagIcon: 'icon-map-pin',
    gridCaption: 'Dabala Community Arrival',
  },
  {
    src: '/images/gallery/preshol-gallery4.jpeg',
    alt: 'Community outreach in Kabale District, Uganda',
    width: 840,
    height: 1080,
    size: 'tall',
    country: 'uganda',
    fullCaption: 'Community mission in the hills of Kabale, Uganda',
    tag: 'Uganda',
    tagIcon: 'icon-map-pin',
    gridCaption: 'Kabale District Outreach',
  },
  {
    src: '/images/gallery/preshol-gallery5.jpeg',
    alt: 'Resource distribution during Preshol Global Nigeria mission',
    width: 810,
    height: 1080,
    size: 'short',
    country: 'nigeria',
    fullCaption: 'Distributing educational and welfare materials, Nigeria',
    tag: 'Nigeria',
    tagIcon: 'icon-map-pin',
    gridCaption: 'Resource Distribution',
  },
  {
    src: '/images/gallery/preshol-gallery6.jpeg',
    alt: 'Preshol Global conference main stage',
    width: 2560,
    height: 1920,
    size: 'med',
    country: 'events',
    fullCaption: 'One of 4 strategic conferences hosted by Preshol Global',
    tag: 'Conference',
    tagIcon: 'icon-mic',
    gridCaption: 'Conference Hall — Main Stage',
  },
  {
    src: '/images/gallery/preshol-gallery7.jpeg',
    alt: "Children's educational activity during Ghana mission",
    width: 2031,
    height: 2560,
    size: 'short',
    country: 'ghana',
    fullCaption: 'Children participating in educational activities, Dabala Ghana',
    tag: 'Ghana',
    tagIcon: 'icon-map-pin',
    gridCaption: "Children's Engagement Activity",
  },
  {
    src: '/images/gallery/preshol-gallery8.jpeg',
    alt: 'Preshol Global team group photo after Nigeria outreach',
    width: 1920,
    height: 2560,
    size: 'tall',
    country: 'nigeria',
    fullCaption: 'The Preshol Global team after a successful outreach day, Nigeria',
    tag: 'Nigeria',
    tagIcon: 'icon-map-pin',
    gridCaption: 'Team Group Photo — Nigeria',
  },
  {
    src: '/images/gallery/preshol-gallery9.jpeg',
    alt: "Warm community welcome in Bondoukou, Côte d'Ivoire",
    width: 1280,
    height: 853,
    size: 'med',
    country: 'ivoire',
    fullCaption: "Being received warmly by the Bondoukou community, Côte d'Ivoire",
    tag: "Côte d'Ivoire",
    tagIcon: 'icon-map-pin',
    gridCaption: 'Bondoukou Community Welcome',
  },
  {
    src: '/images/gallery/preshol-gallery10.jpeg',
    alt: 'Mission site in Niamey Deux Mille, Niger',
    width: 1280,
    height: 852,
    size: 'short',
    country: 'niger',
    fullCaption: 'Outreach location in Niamey Deux Mille community, Niger',
    tag: 'Niger',
    tagIcon: 'icon-map-pin',
    gridCaption: 'Niamey Mission Site',
  },
  {
    src: '/images/gallery/preshol-gallery11.jpeg',
    alt: 'Keynote speaker moment at Preshol Global symposium',
    width: 960,
    height: 720,
    size: 'med',
    country: 'events',
    fullCaption: 'Thought leadership on mental health and global opportunity',
    tag: 'Conference',
    tagIcon: 'icon-mic',
    gridCaption: 'Keynote Speaker Moment',
  },
  {
    src: '/images/gallery/preshol-gallery12.jpeg',
    alt: 'Community meeting in Rubirizi District, Uganda',
    width: 1280,
    height: 852,
    size: 'tall',
    country: 'uganda',
    fullCaption: 'Empowering the Rubirizi community with holistic support, Uganda',
    tag: 'Uganda',
    tagIcon: 'icon-map-pin',
    gridCaption: 'Rubirizi Community Meeting',
  },
];

export const GALLERY_FILTERS: Array<{ value: string; label: string; icon?: 'icon-map-pin' | 'icon-mic' }> = [
  { value: 'all', label: 'All' },
  { value: 'nigeria', label: 'Nigeria', icon: 'icon-map-pin' },
  { value: 'ghana', label: 'Ghana', icon: 'icon-map-pin' },
  { value: 'ivoire', label: "Côte d'Ivoire", icon: 'icon-map-pin' },
  { value: 'niger', label: 'Niger', icon: 'icon-map-pin' },
  { value: 'uganda', label: 'Uganda', icon: 'icon-map-pin' },
  { value: 'events', label: 'Events', icon: 'icon-mic' },
];
