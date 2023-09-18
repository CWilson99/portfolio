import { StaticImageData } from "next/image";

export type Project = {
    name: string;
    description: string;
    url?: string;
    repo?: string;
    image: string;
    tech: string[];
    wip: boolean;
}