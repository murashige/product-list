import Link from 'next/link';
import type { ComponentPropsWithoutRef, ReactNode } from 'react';

type Variant = 'primary' | 'outline';
type Size = 'md';

const baseStyles =
  'inline-flex cursor-pointer items-center justify-center gap-2 rounded-full px-6 py-2 font-bold transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50';

const variantStyles: Record<Variant, string> = {
  primary: 'bg-primary text-primary-foreground hover:opacity-90 focus-visible:ring-primary',
  outline:
    'border border-link text-link bg-transparent hover:bg-link hover:text-primary-foreground focus-visible:ring-link',
};

const sizeStyles: Record<Size, string> = {
  md: 'text-button',
};

type CommonProps = {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: ReactNode;
};

type ButtonAsButton = CommonProps & ComponentPropsWithoutRef<'button'> & { href?: undefined };

type ButtonAsLink = CommonProps &
  Omit<ComponentPropsWithoutRef<typeof Link>, 'href'> & { href: string };

export type ButtonProps = ButtonAsButton | ButtonAsLink;

export function Button(props: ButtonProps) {
  const { variant = 'primary', size = 'md', className, children, ...rest } = props;
  const classes = [baseStyles, variantStyles[variant], sizeStyles[size], className]
    .filter(Boolean)
    .join(' ');

  if ('href' in rest && rest.href) {
    const { href, ...linkProps } = rest;
    return (
      <Link href={href} className={classes} {...linkProps}>
        {children}
      </Link>
    );
  }

  const { type = 'button', ...buttonProps } = rest as ComponentPropsWithoutRef<'button'>;
  return (
    <button type={type} className={classes} {...buttonProps}>
      {children}
    </button>
  );
}
