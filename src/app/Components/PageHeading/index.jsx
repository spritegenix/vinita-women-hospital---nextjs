'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

const PageHeading = ({ data }) => {
  const pathname = usePathname();
  const lastSegment = pathname.split('/').filter(Boolean).pop();
  const titles = lastSegment
    .replace(/-/g, ' ')
    .replace(/\b\w/g, (char) => char.toUpperCase());
  const [urlSegments, setUrlSegments] = useState([]);
  useEffect(() => {
    const pathSegments = window.location.pathname
      .split('/')
      .filter((segment) => segment !== '');
    setUrlSegments(pathSegments);
  }, []);
  return (
    <div className="container">
      <h1 className="cs_page_title">{titles}</h1>
      <ol className="breadcrumb text-capitalize">
        <li className="breadcrumb-item">
          <Link href="/">Home</Link>
        </li>
        {urlSegments.map((segment, index) => (
          <li key={index} className="breadcrumb-item">
            {index < urlSegments.length - 1 ? (
              <Link href={`/${urlSegments.slice(0, index + 1).join('/')}`}>
                {segment}
              </Link>
            ) : (
              <span className="active">{segment}</span>
            )}
          </li>
        ))}
      </ol>
    </div>
  );
};

export default PageHeading;
