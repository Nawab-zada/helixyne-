import { Fragment, useRef, useState } from 'react';
import useSticky from 'hooks/useSticky';
import Image from 'next/image';
import Link from 'next/link';

import NextLink from './NextLink';
import SocialLinks from './SocialLinks';
import ListItemLink from './ListItemLink';
import DropdownToggleLink from './DropdownToggleLink';

import { surgery, treatments, aboutUs } from '../data.js';

const Navbar = ({ navClassName, navOtherClass, fancy, stickyBox }) => {
  const sticky = useSticky(350);
  const navbarRef = useRef(null);

  const [surgeryCategory, setSurgeryCategory] = useState('ear');

  const handleSurgeryCategory = (category) => () => {
    setSurgeryCategory(category);
  };

  const surgeryMenu = [
    { id: 1, title: 'Ear Surgery', category: 'ear' },
    { id: 2, title: 'Nose Surgery', category: 'nose' },
    { id: 3, title: 'Throat Surgery', category: 'throat' },
    { id: 4, title: 'Head & Neck Surgery', category: 'head' }
  ];

  const renderLinks = (links) =>
    links.map((item) => (
      <ListItemLink href="#" title={item.title} linkClassName="dropdown-item" key={item.id} />
    ));

  const headerContent = (
    <Fragment>
      <div className="navbar-brand ">
        <NextLink href="/" className="d-flex align-items-center">
          <Image alt="Logo | " src="/helixyne.png" width={60} height={60} />
          <span className="d-flex align-items-center logo-text-blue ms-2">Helixyne Chemical</span>
        </NextLink>
      </div>

      <div
        id="offcanvas-nav"
        data-bs-scroll="true"
        className="navbar-collapse offcanvas offcanvas-nav offcanvas-start"
      >
        <div className="offcanvas-header d-lg-none offcavas-bg nav-logo">
          <NextLink
            href="/"
            title={
              <Image
                id="nav-logo"
                alt="Logo | ENTrova"
                className="p-2 position-static bg-white rounded"
                src="/helixyne.png"
                width={100}
                height={100}
              />
            }
          />
          <span className="d-flex align-items-center logo-text-blue ms-2">Helixyne Chemical</span>
          <button
            type="button"
            aria-label="Close"
            data-bs-dismiss="offcanvas"
            className="btn-close btn-close-white ms-auto"
          />
        </div>

        <div className="offcanvas-body ms-lg-auto d-flex flex-column h-100 offcavas-bg">
          <ul className="navbar-nav">
            <li className="nav-item" data-bs-dismiss="offcanvas">
              <NextLink href="/" title="Home" className="nav-link" />
            </li>
            <li className="nav-item" data-bs-dismiss="offcanvas">
              <NextLink href="/#about-us" title="About Us" className="nav-link" />
            </li>
            <li className="nav-item" data-bs-dismiss="offcanvas">
              <NextLink href="/#our-services" title="Our Services" className="nav-link" />
            </li>
            <li className="nav-item" data-bs-dismiss="offcanvas">
              <NextLink href="/#contact-us" title="Contact Us" className="nav-link" />
            </li>

            
          </ul>

          <div className="offcanvas-footer d-lg-none">
            <div>
              <NextLink
                title="info@helixyne.com"
                className="link-inverse"
                href="mailto:info@helixyne.com"
              />
              <br />
              <NextLink
                title="faizan@helixyne.com"
                className="link-inverse"
                href="mailto:faizan@helixyne.com"
              />
              <br />
              <NextLink
                title="mkt@helixyne.com"
                className="link-inverse"
                href="mailto:mkt@helixyne.com"
              />
              <br />
              <NextLink href="tel:+923126755909" title="+92 312 6755909" />
              <br />
              <NextLink href="tel:+923114501358" title="+92 311 4501358" />
              <br />
              <NextLink href="tel:+923467663027" title="+92 346 7663027" />
              <br />
              <NextLink href="https://wa.me/923126755909" title="WhatsApp" className="link-inverse" />
              <br />
              <SocialLinks />
            </div>
          </div>
        </div>
      </div>

      <div className={navOtherClass}>
        <div className="d-none d-lg-block ms-auto">
          <NextLink href="mailto:info@helixyne.com" title="info@helixyne.com" className="btn btn-sm text-dark me-2" />
        </div>
        <button
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvas-nav"
          className="hamburger offcanvas-nav-btn"
        >
          <span />
        </button>
      </div>
    </Fragment>
  );

  return (
    <Fragment>
      {stickyBox && <div style={{ paddingTop: sticky ? navbarRef.current?.clientHeight : 0 }} />}

      <nav ref={navbarRef} className={sticky ? 'navbar navbar-expand-lg center-nav transparent navbar-light navbar-clone fixed' : navClassName}>
        {fancy ? (
          <div className="container">
            <div className="navbar-collapse-wrapper bg-white d-flex flex-row flex-nowrap w-10  align-items-end">
              {headerContent}
            </div>
          </div>
        ) : (
          <div className="container flex-lg-row flex-nowrap align-items-center">{headerContent}</div>
        )}
      </nav>
    </Fragment>
  );
};

Navbar.defaultProps = {
  stickyBox: true,
  navOtherClass: 'navbar-other  d-flex  d-lg-none',
  navClassName: 'navbar navbar-expand-lg center-nav transparent navbar-light'
};

export default Navbar;
