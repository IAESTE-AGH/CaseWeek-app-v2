export type FieldOfStudy = {
  id: string;
  name: string;
};

export type Company = {
  id: string;
  name: string;
  logoUrl: string;
  websiteUrl: string;
  shortDescription: string;
  longDescription: string;
  displayPriority: number;
  published: boolean;
};

export type University = {
  id: string;
  name: string;
};

export type WorkshopStatus =
  | "PUBLISHED"
  | "DRAFT"
  | "CANCELLED"
  | "FINISHED"
  | "ARCHIVED";

export type Workshop = {
  id: string;
  company: Company;
  university: University;
  title: string;
  status?: WorkshopStatus;
  startsAt: string;
  registrationEndsAt?: string;
  shortDescription: string;
  longDescription: string;
  address: string;
  capacity?: number;
  durationMinutes: number | null;
  emailTextCandidate?: string;
  emailTextQualified?: string;
  minYearOfStudy: number | null;
  maxYearOfStudy: number | null;
  preferableFieldsOfStudy: FieldOfStudy[] | null;
  propositions?: {
    id: string[];
  };
};
