/* eslint-disable no-console */
import _ from 'lodash';

import { ComponentContentTypes } from '../../api/constants';
import { Award } from './Award';
import { Copy } from './Copy';
import { Education } from './Education';
import { PortfolioItem } from './PortfolioItem';
import { WorkExperience } from './WorkExperience';

type BlockRendererProps = {
  block: any;
};

const ContentTypeMap = {
  [ComponentContentTypes.award]: Award,
  [ComponentContentTypes.education]: Education,
  [ComponentContentTypes.portfolioItem]: PortfolioItem,
  [ComponentContentTypes.workExperience]: WorkExperience,
  [ComponentContentTypes.copy]: Copy,
};

const BlockRenderer = ({ block }: BlockRendererProps) => {
  console.log('block', block);
  if (Array.isArray(block)) {
    return (
      <>
        {block.map((b) => (
          <BlockRenderer key={`block-${b.sys.id}`} block={b} />
        ))}
      </>
    );
  }

  const contentTypeId = _.get(block, 'sys.contentType.sys.id');

  const Component = ContentTypeMap[contentTypeId];

  if (!Component) {
    console.warn(`${contentTypeId} can not be handled`);
    return null;
  }

  const { id } = block.sys;

  const componentProps = {
    ...block,
    parent: block.parent,
  };

  return <Component key={`${contentTypeId}-${id}`} {...componentProps} />;
};

export { BlockRenderer };