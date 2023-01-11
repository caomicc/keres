import type * as Contentful from 'contentful';

import type { TypeAwardFields } from './TypeAward';
import type { TypeCopyFields } from './TypeCopy';
import type { TypeEducationFields } from './TypeEducation';
import type { TypePortfolioItemFields } from './TypePortfolioItem';
import type { TypeSkillsFields } from './TypeSkills';
import type { TypeWorkExperienceFields } from './TypeWorkExperience';

export interface TypePageFields {
  name?: Contentful.EntryFields.Symbol;
  slug?: Contentful.EntryFields.Symbol;
  content?: Contentful.Entry<
    | TypeAwardFields
    | TypeCopyFields
    | TypeEducationFields
    | TypePortfolioItemFields
    | TypeSkillsFields
    | TypeWorkExperienceFields
  >[];
}

export type TypePage = Contentful.Entry<TypePageFields>;
