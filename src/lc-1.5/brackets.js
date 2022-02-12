import React, { useEffect } from 'react';
import db from '../db/lc1.5.json';
import '../style/brackets.css'

async function render() {
  const data = db;

  window.bracketsViewer.render({
    stages: data.stage,
    matches: data.match,
    matchGames: data.match_game,
    participants: data.participant
  });
}

export function LentilCupOneAndAHalfBrackets() {
  useEffect(() => {
    render();
  }, []);
  
  return <div className="brackets-viewer"></div>
}