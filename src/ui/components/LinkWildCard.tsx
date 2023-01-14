import { LinkItem } from './LinkItem';
import { LinkSection } from './LinkSection';

export type WildCardProps = {
  section: any;
};

export const LinkWildCard = ({ section }: WildCardProps) => {
  const linkSectionAndFavorite =
    section.sys.contentType.sys.id === 'linkSection' &&
    section.fields.isFavorite;
  const linkSectionNotFavorite =
    section.sys.contentType.sys.id === 'linkSection' &&
    !section.fields.isFavorite;
  const other = !linkSectionAndFavorite && !linkSectionNotFavorite;

  return (
    <>
      {linkSectionNotFavorite ? <LinkSection fields={section.fields} /> : ''}
      {other ? <LinkItem fields={section.fields} /> : ''}
    </>
  );
};
