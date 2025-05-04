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
  | "UNPUBLISHED"
  | "CANCELLED"
  | "FINISHED";

export type Workshop = {
  id: string;
  company: Company;
  university: University;
  title: string;
  status: WorkshopStatus;
  startsAt: string;
  registrationEndsAt: string;
  shortDescription: string;
  longDescription: string;
  address: string;
  capacity: number;
  durationMinutes: number;
  emailTextCandidate: string;
  emailTextQualified: string;
  minYearOfStudy: number;
  maxYearOfStudy: number;
  preferableFieldsOfStudy: FieldOfStudy[];
  allFieldsOfStudyAccepted: boolean;
  archived: boolean;
  propositions?: {
    id: string[];
  };
};
