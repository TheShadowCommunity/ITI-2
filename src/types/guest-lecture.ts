export interface Speaker {
  name: string;
  designation: string;
  avatar?: string;
}

export interface GuestLectureItem {
  id: string;
  title: string;
  duration: string;
  speaker: Speaker;
  image: string;
  imageAlt?: string;
  topics: string[];
}
