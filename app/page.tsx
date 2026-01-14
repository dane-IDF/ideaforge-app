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
  const [ideaText, setIdeaText] = useState('');

  const phase = PHASES.find(p => p.id === state.currentPhase)!;

  return (
    <main style={{ padding: 32, maxWidth: 800 }}>
      <h1>IdeaForge</h1>
      <p><em>From idea to reality — structured, honest, secure.</em></p>

      <h2>Phases</h2>
      <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
        {PHASES.map(p => (
          <button
            key={p.id}
            disabled={!canEnterPhase(state, p.id)}
            onClick={() => setState(moveToPhase(state, p.id))}
            style={{
              padding: '4px 8px',
              background:
                p.id === state.currentPhase ? '#000' :
                state.completed.includes(p.id) ? '#ccc' : '#eee',
              color: p.id === state.currentPhase ? '#fff' : '#000',
            }}
          >
            {p.id}
          </button>
        ))}
      </div>

      <hr />

      <h2>{phase.title}</h2>
      <p>{phase.description}</p>

      {state.currentPhase === 'A' && !state.completed.includes('A') && (
        <>
          <textarea
            placeholder="Describe your idea..."
            value={ideaText}
            onChange={e => setIdeaText(e.target.value)}
            style={{ width: '100%', height: 100 }}
          />
          <br />
          <button
            disabled={!ideaText.trim()}
            onClick={() => {
              setState(completePhase(state, { ideaText }));
              setIdeaText('');
            }}
          >
            Lock Idea
          </button>
        </>
      )}

      {state.completed.includes(state.currentPhase) && (
        <p><strong>Phase completed.</strong></p>
      )}

      {state.idea && (
        <>
          <hr />
          <h3>Locked Idea</h3>
          <p>{state.idea.text}</p>
          <small>{new Date(state.idea.timestamp).toLocaleString()}</small>
        </>
      )}
    </main>
  );
}
