import { StaticImageData } from "next/image";

export type Project = {
    name: string;
    description: string;
    url?: string;
    repo?: string;
    image: StaticImageData;
    tech: string[];
    wip: boolean;
}