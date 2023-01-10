import * as Contentful from "contentful";
import { TypeAwardFields } from "./TypeAward";
import { TypeCopyFields } from "./TypeCopy";
import { TypeEducationFields } from "./TypeEducation";
import { TypePortfolioItemFields } from "./TypePortfolioItem";
import { TypeWorkExperienceFields } from "./TypeWorkExperience";

export interface TypePageFields {
    name?: Contentful.EntryFields.Symbol;
    slug?: Contentful.EntryFields.Symbol;
    content?: Contentful.Entry<TypeAwardFields | TypeCopyFields | TypeEducationFields | TypePortfolioItemFields | TypeWorkExperienceFields>[];
}

export type TypePage = Contentful.Entry<TypePageFields>;
