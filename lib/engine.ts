import { PHASES, PhaseID } from './phases';

export interface PhaseState {
  completed: PhaseID[];
  current: PhaseID;
}

export function createInitialState(): PhaseState {
  return {
    completed: [],
    current: 'A',
  };
}

export function canEnterPhase(
  state: PhaseState,
  target: PhaseID
): { allowed: boolean; warning?: string } {
  const targetIndex = PHASES.findIndex(p => p.id === target);
  const missingRequired = PHASES
    .slice(0, targetIndex)
    .filter(p => p.required && !state.completed.includes(p.id));

  if (missingRequired.length > 0) {
    return {
      allowed: true,
      warning:
        `You are skipping required phases: ${missingRequired
          .map(p => p.id)
          .join(', ')}. This may weaken your outcome.`,
    };
  }

  return { allowed: true };
}

export function completePhase(
  state: PhaseState,
  phase: PhaseID
): PhaseState {
  if (state.completed.includes(phase)) return state;

  return {
    completed: [...state.completed, phase],
    current: phase,
  };
}

export function moveToPhase(
  state: PhaseState,
  target: PhaseID
): PhaseState {
  return {
    ...state,
    current: target,
  };
}
