export interface TeamMember {
  name: string;
  role: string;
  initials: string;
}

export const team: TeamMember[] = [
  { name: "Member One", role: "Founder & Strategist", initials: "M1" },
  { name: "Member Two", role: "Lead Developer", initials: "M2" },
  { name: "Member Three", role: "Marketing Head", initials: "M3" },
];
