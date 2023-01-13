import { AspectRatio, Box } from '@chakra-ui/react';
import Image from 'next/image';

import type { TypeGallery } from '@/api/generated-types';

export const Gallery = ({ fields }: TypeGallery) => {
  const { images } = fields;
  return (
    <Box sx={{ columnCount: [1, 2], columnGap: 4 }}>
      {images?.map((image: any) => (
        <Box key={image.id}>
          <AspectRatio
            ratio={
              (image?.fields?.file?.details?.image?.width || 1) /
              (image?.fields?.file?.details?.image?.height || 1)
            }
            maxW={'full'}
            as={'span'}
            display={'block'}
            mb={4}
            borderRadius={'xl'}
            overflow={'hidden'}
          >
            <Image
              src={`https:${image?.fields?.file?.url}` || ''}
              alt={image?.fields?.description || ''}
              fill={true}
              sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
               33vw"
            />
          </AspectRatio>
        </Box>
      ))}
    </Box>
  );
};
