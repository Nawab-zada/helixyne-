import Link from 'next/link';

// ==============================================================
const NextLink = props => {
  const {
    className,
    href,
    title,
    children
  } = props;
  return <Link href={href} className={className}>
    {children || title}
  </Link>;
};

export default NextLink;