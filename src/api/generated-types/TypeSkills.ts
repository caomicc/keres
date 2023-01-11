import type * as Contentful from 'contentful';

export interface TypeSkillsFields {
  internalName?: Contentful.EntryFields.Symbol;
  skills?: Contentful.EntryFields.Symbol[];
}

export type TypeSkills = Contentful.Entry<TypeSkillsFields>;
