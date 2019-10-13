const pickRandomly = () => (Math.random() > 0.5) ? 1 : 0;

const splitIntoTeams = (players, number) => {
  const team1 = [];
  const team2 = [];

  players.forEach(player => {
    let team = pickRandomly();
    if (team1.length < number && (team === 0 || team2.length === number)) {
      team1.push(player);
    } else if (team2.length < number && (team === 1 || team1.length === number)) {
      team2.push(player);
    }
  });

  return { team1, team2 };
};

/**
 * Generate two teams from a list of players
 * @param players list of players
 * @param number number of players in each team
 * @param level level of all players
 * @returns {{team1: Array, team2: Array}}
 */
export const generateTeams = (players, number, level = 'beginner') => {
  if (level === 'balanced') {
    const experts = players.filter(player => player.level === 'expert');
    const beginners = players.filter(player => player.level === 'beginner');

    const beginnerTeams = splitIntoTeams(beginners, Math.floor(number / 2));
    const expertTeams = splitIntoTeams(experts, Math.ceil(number / 2));

    return {
      team1: [ ...beginnerTeams.team1, ...expertTeams.team1],
      team2: [ ...beginnerTeams.team2, ...expertTeams.team2],
    };

  } else {
    return splitIntoTeams(players.filter(player => player.level === level), number);
  }
};
