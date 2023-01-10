import * as Contentful from "contentful";

export interface TypeAwardFields {
    name?: Contentful.EntryFields.Symbol;
    issued?: Contentful.EntryFields.Date;
    role?: Contentful.EntryFields.Symbol;
    issuer?: Contentful.EntryFields.Symbol;
    certificateUrl?: Contentful.EntryFields.Symbol;
}

export type TypeAward = Contentful.Entry<TypeAwardFields>;
