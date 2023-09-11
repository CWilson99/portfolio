export type Experience = {
    company: {
        companyLogo: {
            invert: boolean;
            fileLocation: string;
        };
        companyName: string;
        companyUrl?: string;
    }
    position: {
        duration: {
            from: string,
            to: string
        }
        positionTitle: string;
        positionDescription: string;
        skills: string[];
    }
}