export interface SoftballGame {
  documentId?: string;
  homeTeamName: string;
  awayTeamName: string;
  gameStatus: SoftballGameStatus;
  startDateTime: string;
  inning: number;
  innings: {
    homeTeamScore: number;
    awayTeamScore: number;
  }[];
  strikesAllowed: number;
  strikes: number;
  balls: number;
  outs: number;
}

export type SoftballGameStatus = 'SCHEDULED' | 'ACTIVE' | 'FINAL';
