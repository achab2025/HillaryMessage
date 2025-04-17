
// Define types from the booking context
export interface Service {
  id: string;
  name: string;
  description: string;
  duration: number;
  price: number;
  image: string;
}

export interface Therapist {
  id: string;
  name: string;
  specialization: string;
}

// Mock data for services
export const servicesMockData: Service[] = [
  {
    id: "1",
    name: "Deep Relaxation Massage",
    description: "A gentle form of massage that uses long strokes, kneading, and circular movements on superficial layers of muscle.",
    duration: 60,
    price: 85,
    image: "bg-gradient-to-r from-violet-400/30 to-purple-400/30"
  },
  {
    id: "2",
    name: "Therapeutic Massage",
    description: "A massage that focuses on realigning deeper layers of muscles and connective tissue.",
    duration: 60,
    price: 95,
    image: "bg-gradient-to-r from-purple-400/30 to-violet-500/30"
  },
  {
    id: "3",
    name: "Hot Stone Therapy",
    description: "A specialty massage that uses smooth, heated stones as an extension of the therapist's hands.",
    duration: 90,
    price: 110,
    image: "bg-gradient-to-r from-violet-500/30 to-purple-600/30"
  },
  {
    id: "4",
    name: "Aromatherapy Massage",
    description: "A massage therapy that uses essential oils to enhance psychological and physical well-being.",
    duration: 60,
    price: 90,
    image: "bg-gradient-to-r from-purple-300/30 to-violet-400/30"
  }
];

// Mock data for therapists
export const therapistsMockData: Therapist[] = [
  { id: "1", name: "Jane Smith", specialization: "Swedish Massage" },
  { id: "2", name: "Michael Johnson", specialization: "Deep Tissue" },
  { id: "3", name: "Sarah Williams", specialization: "Hot Stone Therapy" }
];
