export interface Account {
  id: number;
  accountNumber: string;
  accountName: string;
  companyName: string;
  antLicenseTier: string;
  antSeats: number;
  antPurchaseDate: Date;
  antRenewalDate: Date;
  updated: Date;
}