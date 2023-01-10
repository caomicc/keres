import type { LinkProps as ChakraLinkProps } from '@chakra-ui/react';
import { Link as ChakraLink } from '@chakra-ui/react';
import type { LinkProps } from 'next/link';
import Link from 'next/link';
import React from 'react';

type ChakraLinkAndNextProps = ChakraLinkProps & LinkProps;

export const ChakraNextLink = React.forwardRef(function ChakraNextLink(
  { href, children, ...props }: ChakraLinkAndNextProps,
  ref: React.Ref<HTMLAnchorElement>
) {
  return (
    <Link href={href} passHref legacyBehavior>
      <ChakraLink ref={ref} {...props}>
        {children}
      </ChakraLink>
    </Link>
  );
});
