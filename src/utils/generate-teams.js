export const generateTeams = (players) => {
  const team1 = [];
  const team2 = [];

  // Put players into teams
  team1.push(players[0]);
  team2.push(players[1]);

  return { team1, team2 };
};
