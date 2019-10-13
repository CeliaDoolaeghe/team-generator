const pickRandomly = () => (Math.random() > 0.5) ? 1 : 0;

/**
 * Generate two teams from a list of players
 * @param players list of players
 * @param number number of players in each team
 * @param level level of all players
 * @returns {{team1: Array, team2: Array}}
 */
export const generateTeams = (players, number, level = 'beginner') => {
  const team1 = [];
  const team2 = [];

  // Put players into teams
  if (level === 'balanced') {
    const experts = players.filter(player => player.level === 'expert');
    const beginners = players.filter(player => player.level === 'beginner');
    const numberByLevels = number / 2;
    console.warn('numberByLevels', numberByLevels);

    for (let i = 0; i < numberByLevels; i++) {
      team1.push(experts[i]);
      team1.push(beginners[i]);
    }
    for (let i = numberByLevels; i < number; i++) {
      team2.push(experts[i]);
      team2.push(beginners[i]);
    }

  } else {
    players
    .filter(player => player.level === level)
    .forEach(player => {
      let team = pickRandomly();
      if (team1.length < number && (team === 0 || team2.length === number)) {
        team1.push(player);
      } else if (team2.length < number && (team === 1 || team1.length === number)) {
        team2.push(player);
      }
    });
  }

  return { team1, team2 };
};
