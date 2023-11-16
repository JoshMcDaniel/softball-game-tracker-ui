export interface SoftballGame {
  documentId: string;
  awayTeamName: string;
  currentInning: number;
  gameStatus: 'ACTIVE' | 'FINAL';
  homeTeamName: string;
}
