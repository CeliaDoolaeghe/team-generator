const pickRandomly = () => (Math.random() > 0.5) ? 1 : 0;

/**
 * Generate two teams from a list of players
 * @param players list of players
 * @param number number of players in each team
 * @returns {{team1: Array, team2: Array}}
 */
export const generateTeams = (players, number) => {
  const team1 = [];
  const team2 = [];

  // Put players into teams
  players.forEach(player => {
    let team = pickRandomly();
    if (team === 0 && team1.length < number) {
      team1.push(player);
    } else if (team2.length < number) {
      team2.push(player);
    }
  });

  return { team1, team2 };
};
