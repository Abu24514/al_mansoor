export type JobCategory = 
  | 'Driver' 
  | 'Helper/Labor' 
  | 'Cleaner' 
  | 'Cook/Chef' 
  | 'Electrician/Plumber' 
  | 'Mason/Construction' 
  | 'Security Guard' 
  | 'Waiter/Hotel Staff';

export type GulfCountry = 
  | 'Saudi Arabia' 
  | 'UAE' 
  | 'Qatar' 
  | 'Kuwait' 
  | 'Oman' 
  | 'Bahrain';

export interface Job {
  id: string;
  title: string;
  category: JobCategory;
  country: GulfCountry;
  city: string;
  salaryINR: string;        // Blue-collar workers ke liye INR clear dikhana zaroori hai
  salaryLocal: string;      // Local currency e.g. "2000 SAR"
  vacancies: number;
  accommodationFree: boolean;
  foodFree: boolean;
  medicalProvided: boolean;
  contractYears: number;
  dutyHours: number;
  urgent: boolean;
  isVerified: boolean;
  postedDate: string;
}