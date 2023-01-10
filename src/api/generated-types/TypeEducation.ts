import * as Contentful from "contentful";

export interface TypeEducationFields {
    degree?: Contentful.EntryFields.Symbol;
    institution?: Contentful.EntryFields.Symbol;
    description?: Contentful.EntryFields.Text;
    startDate: Contentful.EntryFields.Date;
    endDate?: Contentful.EntryFields.Date;
    location?: Contentful.EntryFields.Location;
}

export type TypeEducation = Contentful.Entry<TypeEducationFields>;
