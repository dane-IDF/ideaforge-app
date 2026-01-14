export type PhaseID =
  | 'A' | 'B' | 'C' | 'D' | 'E' | 'F'
  | 'G' | 'H' | 'I' | 'J' | 'K' | 'L';

export interface Phase {
  id: PhaseID;
  title: string;
  description: string;
}

export const PHASES: Phase[] = [
  {
    id: 'A',
    title: 'Idea Capture & Lock',
    description: 'Securely record the raw idea and timestamp it.',
  },
  {
    id: 'B',
    title: 'Problem Definition',
    description: 'Clearly define the problem being solved.',
  },
  {
    id: 'C',
    title: 'Solution Outline',
    description: 'Describe the proposed solution at a high level.',
  },
  {
    id: 'D',
    title: 'Market Validation',
    description: 'Validate demand and target users.',
  },
  {
    id: 'E',
    title: 'Competitive Analysis',
    description: 'Analyze alternatives and differentiation.',
  },
  {
    id: 'F',
    title: 'Business Model',
    description: 'Define how value is created and captured.',
  },
  {
    id: 'G',
    title: 'Technical Feasibility',
    description: 'Assess technical requirements and risks.',
  },
  {
    id: 'H',
    title: 'MVP Definition',
    description: 'Define minimum viable product scope.',
  },
  {
    id: 'I',
    title: 'Execution Plan',
    description: 'Plan development and launch steps.',
  },
  {
    id: 'J',
    title: 'Risk Review',
    description: 'Identify and mitigate key risks.',
  },
  {
    id: 'K',
    title: 'Launch Readiness',
    description: 'Prepare for release.',
  },
  {
    id: 'L',
    title: 'Post-Launch Review',
    description: 'Evaluate outcomes and next steps.',
  },
];
