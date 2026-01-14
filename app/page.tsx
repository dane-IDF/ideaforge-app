'use client';

import { useState } from 'react';
import { PHASES, PhaseID } from '../lib/phases';
import {
  createInitialState,
  moveToPhase,
  completePhase,
  canEnterPhase,
  PhaseState,
} from '../lib/engine';

export default function IdeaForgeApp() {
  const [state, setState] = useState<PhaseState>(createInitialState());
  const [warning, setWarning] = useState<string | null>(null);

  function selectPhase(id: PhaseID) {
    const check = canEnterPhase(state, id);
    if (check.warning) setWarning(check.warning);
    else setWarning(null);

    if (check.allowed) {
      setState(moveToPhase(state, id));
    }
  }

  function markComplete() {
    setState(completePhase(state, state.current));
  }

  const currentPhase = PHASES.find(p => p.id === state.current)!;

  return (
    <main style={{ padding: 32, fontFamily: 'system-ui' }}>
      <h1>IdeaForge</h1>
      <p>From idea to reality — structured, honest, secure.</p>

      <hr />

      <h2>Phases</h2>
      <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
        {PHASES.map(p => (
          <button
            key={p.id}
            onClick={() => selectPhase(p.id)}
            style={{
              padding: '6px 10px',
              borderRadius: 6,
              border:
                state.current === p.id
                  ? '2px solid black'
                  : '1px solid #ccc',
              background: state.completed.includes(p.id)
                ? '#e6ffe6'
                : '#f9f9f9',
            }}
          >
            {p.id}
          </button>
        ))}
      </div>

      {warning && (
        <div style={{ marginTop: 16, color: 'darkorange' }}>
          ⚠️ {warning}
        </div>
      )}

      <hr />

      <h2>
        Phase {currentPhase.id}: {currentPhase.title}
      </h2>
      <p>{currentPhase.purpose}</p>

      <button
        onClick={markComplete}
        style={{
          marginTop: 12,
          padding: '8px 14px',
          borderRadius: 8,
        }}
      >
        Mark Phase Complete
      </button>

      <div style={{ marginTop: 24 }}>
        <strong>Completed Phases:</strong>{' '}
        {state.completed.join(', ') || 'None'}
      </div>
    </main>
  );
}
