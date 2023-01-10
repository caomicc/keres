import * as Contentful from "contentful";

export interface TypeWorkExperienceFields {
    jobTitle?: Contentful.EntryFields.Symbol;
    description?: Contentful.EntryFields.Text;
    employer?: Contentful.EntryFields.Symbol;
    website?: Contentful.EntryFields.Symbol;
    startDate: Contentful.EntryFields.Date;
    endDate?: Contentful.EntryFields.Date;
    location?: Contentful.EntryFields.Location;
}

export type TypeWorkExperience = Contentful.Entry<TypeWorkExperienceFields>;
