import { Company } from "./company";
import { TimeStamp, UUID } from "./general";

export type FieldOfStudy = {
  id: string;
  name: string;
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
  
export type RegistrationLink = `https://forms.office.com/${string}`;

export type Workshop = {
  id: UUID;
  company: Company;
  university: University;
  title: string;
  status?: WorkshopStatus;
  startsAt: TimeStamp;
  registrationEndsAt?: TimeStamp;
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
  registrationLink: RegistrationLink;
};
