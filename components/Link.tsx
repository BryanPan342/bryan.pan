import NextLink from 'next/link';
import {useRouter} from 'next/router';
import React from 'react';

export interface LinkProps {
  href: string;
  className?: string;
  activeClassName?: string;
  children: React.ReactNode;
}

export default function Link({href, className, activeClassName, children}: LinkProps): JSX.Element {
  const {asPath} = useRouter();
  const additionalClassName = asPath === href && activeClassName ? activeClassName : '';

  return (
    <NextLink href={href}>
      <a className={`${className ?? ''}  ${additionalClassName}`}>{children}</a>
    </NextLink>
  );
}