import { PhaseID, PHASES } from './phases';

export interface PhaseState {
  currentPhase: PhaseID;
  completed: PhaseID[];
  idea?: {
    text: string;
    timestamp: string;
  };
}

const STORAGE_KEY = 'ideaforge_state';

export function createInitialState(): PhaseState {
  if (typeof window !== 'undefined') {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) return JSON.parse(stored);
  }

  return {
    currentPhase: 'A',
    completed: [],
  };
}

function persist(state: PhaseState) {
  if (typeof window !== 'undefined') {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  }
}

export function canEnterPhase(state: PhaseState, phase: PhaseID): boolean {
  const index = PHASES.findIndex(p => p.id === phase);
  if (index === 0) return true;
  const previous = PHASES[index - 1].id;
  return state.completed.includes(previous);
}

export function moveToPhase(state: PhaseState, phase: PhaseID): PhaseState {
  if (!canEnterPhase(state, phase)) return state;
  const next = { ...state, currentPhase: phase };
  persist(next);
  return next;
}

export function completePhase(state: PhaseState, data?: any): PhaseState {
  if (state.completed.includes(state.currentPhase)) return state;

  const next: PhaseState = {
    ...state,
    completed: [...state.completed, state.currentPhase],
  };

  if (state.currentPhase === 'A' && data?.ideaText) {
    next.idea = {
      text: data.ideaText,
      timestamp: new Date().toISOString(),
    };
  }

  persist(next);
  return next;
}
