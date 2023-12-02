export interface SoftballGame {
  documentId: string;
  homeTeamName: string;
  awayTeamName: string;
  gameStatus: 'SCHEDULED' | 'ACTIVE' | 'FINAL';
  startDateTime: string;
  innings: {
    homeTeamScore: number;
    awayTeamScore: number;
  }[];
  strikesAllowed: number;
  strikes: number;
  balls: number;
  outs: number;
}
