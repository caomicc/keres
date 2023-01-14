import { Box, Image, Stack, Text, useColorModeValue } from '@chakra-ui/react';
import { useEffect, useState } from 'react';

import type { TypeLinkItem } from '@/api/generated-types';

import { ChakraNextLink } from './ChakraNextLink';

export type LinkItemProps = Pick<TypeLinkItem, 'fields'>;

type LinkURL = {
  url: string;
};
type LinkItemResponse =
  | {
      url: string;
      mediaType: string;
      contentType: string;
      favicons: string[];
      images: string[];
      title: string;
      siteName: string | undefined;
      description: string | undefined;
    }
  | {
      url: string;
      title: string;
      siteName: string | undefined;
      description: string | undefined;
      mediaType: string;
      contentType: string | undefined;
      images: string[];
      videos: {
        url: string | undefined;
        secureUrl: string | null | undefined;
        type: string | null | undefined;
        width: string | undefined;
        height: string | undefined;
      }[];
      favicons: string[];
    };

export const LinkItemPreview = ({ url }: LinkURL) => {
  const [linkPreviewData, setLinkPreviewData] = useState<LinkItemResponse>();

  useEffect(() => {
    let shouldUpdate = true;
    if (url && typeof window !== 'undefined') {
      const postData = async () => {
        const data = {
          url,
        };

        const response = await fetch('/api/link-preview', {
          method: 'POST',
          body: JSON.stringify(data),
        });
        return response.json();
      };
      postData().then(
        (data: LinkItemResponse) => shouldUpdate && setLinkPreviewData(data)
      );
    }
    return () => {
      shouldUpdate = false;
    };
  }, [url]);

  useEffect(() => {
    // eslint-disable-next-line no-console
    console.log('linkPreviewData', url, linkPreviewData);
  }, [linkPreviewData]);

  return (
    <ChakraNextLink href={url} target={'_blank'}>
      <Box
        role={'group'}
        p={4}
        w={'full'}
        bg={useColorModeValue('white', 'gray.800')}
        // boxShadow={'2xl'}
        rounded={'lg'}
        pos={'relative'}
        zIndex={1}
      >
        <Box
          rounded={'lg'}
          pos={'relative'}
          height={'230px'}
          _after={{
            transition: 'all .3s ease',
            content: '""',
            w: 'full',
            h: 'full',
            pos: 'absolute',
            top: 2,
            left: 0,
            backgroundImage: `url(${linkPreviewData?.images[0]})`,
            filter: 'blur(15px)',
            zIndex: -1,
          }}
          _groupHover={{
            _after: {
              filter: 'blur(20px)',
            },
          }}
        >
          <Image
            rounded={'lg'}
            height={230}
            width={282}
            objectFit={'cover'}
            objectPosition={'center'}
            alt={`preview image for ${linkPreviewData?.siteName}`}
            src={linkPreviewData?.images[0] || ''}
          />
        </Box>
        <Stack pt={4}>
          <Stack>
            <Text>{linkPreviewData?.title}</Text>
          </Stack>
        </Stack>
      </Box>
    </ChakraNextLink>
  );
};
