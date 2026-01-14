// IdeaForge — Phase Definitions (A → L)

export type PhaseID =
  | 'A' | 'B' | 'C' | 'D' | 'E' | 'F'
  | 'G' | 'H' | 'I' | 'J' | 'K' | 'L';

export interface Phase {
  id: PhaseID;
  title: string;
  purpose: string;
  required: boolean;
}

export const PHASES: Phase[] = [
  {
    id: 'A',
    title: 'Idea Capture & Lock',
    purpose: 'Securely record the raw idea and timestamp it.',
    required: true,
  },
  {
    id: 'B',
    title: 'Clarity & Scope',
    purpose: 'Define what the idea is and what it is not.',
    required: true,
  },
  {
    id: 'C',
    title: 'Reality Check',
    purpose: 'Determine if the idea is viable or fundamentally flawed.',
    required: true,
  },
  {
    id: 'D',
    title: 'Market & User Fit',
    purpose: 'Identify who would realistically want this.',
    required: true,
  },
  {
    id: 'E',
    title: 'Technical Feasibility',
    purpose: 'Assess whether this can be built with current technology.',
    required: true,
  },
  {
    id: 'F',
    title: 'IP & Novelty Scan',
    purpose: 'Check originality and potential conflicts.',
    required: true,
  },
  {
    id: 'G',
    title: 'Product Shape',
    purpose: 'Define what the first real version would be.',
    required: false,
  },
  {
    id: 'H',
    title: 'Business Model',
    purpose: 'How this could realistically make money.',
    required: false,
  },
  {
    id: 'I',
    title: 'Risk Analysis',
    purpose: 'Identify what could kill this idea.',
    required: false,
  },
  {
    id: 'J',
    title: 'Development Path',
    purpose: 'Outline steps to bring this to life.',
    required: false,
  },
  {
    id: 'K',
    title: 'Launch Readiness',
    purpose: 'Assess readiness for real-world exposure.',
    required: false,
  },
  {
    id: 'L',
    title: 'Decision Gate',
    purpose: 'Proceed, pivot, or abandon with clarity.',
    required: true,
  },
];
