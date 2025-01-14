import { Skill } from "./skill";

export interface Profile {
    profileId: number,
    CandidateName: String,
    CandidatePhotoPath: String,
    experience: number,
    summary: String,
    skills: Skill[]
}