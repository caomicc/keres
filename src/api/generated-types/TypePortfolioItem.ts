import * as Contentful from "contentful";

export interface TypePortfolioItemFields {
    name?: Contentful.EntryFields.Symbol;
    role?: Contentful.EntryFields.Symbol;
    url?: Contentful.EntryFields.Symbol;
    projectDate?: Contentful.EntryFields.Date;
    description?: Contentful.EntryFields.Text;
    screenshot?: Contentful.Asset;
}

export type TypePortfolioItem = Contentful.Entry<TypePortfolioItemFields>;
