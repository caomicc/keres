// core version + navigation, pagination modules:
// import Swiper and modules styles

import { Stack } from '@chakra-ui/react';

import type { TypeCopy } from '@/api/generated-types';

import { RichTextRenderer } from './RichTextRenderer';

type CopySimpleProps = Pick<TypeCopy, 'fields'>;

// export default function LargePlayer() {
export const Copy = ({ fields }: CopySimpleProps) => {
  const { copy } = fields;
  return (
    <Stack spacing={6}>
      <RichTextRenderer richTextBodyField={copy} renderH2Links={false} />
    </Stack>
  );
};
