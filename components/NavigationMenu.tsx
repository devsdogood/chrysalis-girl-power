import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { INavigationMenuFields } from "../@types/generated/contentful";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/dist/client/router";
import classNames from "classnames";

type NavigationItemProps = {
  id: string;
  path: string;
  title?: string;
  isActive?: boolean;
};

const NavigationItem: React.FC<NavigationItemProps> = ({
  id,
  path,
  title,
  isActive,
}) => (
  <Link key={id} href={path} passHref>
    <Nav.Link>
      <span
        className={classNames("fw-bold", "mx-2", "px-1", {
          "green-underline": isActive,
        })}
        style={{ color: "#333" }}
      >
        {title}
      </span>
    </Nav.Link>
  </Link>
);

const NavigationMenu: React.FC<INavigationMenuFields> = ({
  menuItems,
  logo,
}) => {
  const { asPath } = useRouter();

  return (
    <>
      <Navbar expand="lg" bg="white">
        <Container>
          <Navbar.Brand>
            <Image
              src={`https:${logo.fields.file.url}`}
              alt="chrysalislogo"
              objectFit="contain"
              width="110"
              height="110"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"></Nav>
            <Nav>
              {menuItems.map((item) => {
                const path =
                  item.fields.page?.fields.slug ||
                  item.fields.externalUrl ||
                  "/";

                let isActive: boolean;
                if (path === "/") {
                    isActive = asPath === "/";
                }
                else {
                    // Append trailing forward-slash for non-root paths
                    const expectedPath = `${asPath}/`;

                    // Check expected path includes path so subpaths count as active
                    isActive = expectedPath.includes(path);
                }

                return (
                  <NavigationItem
                    id={item.sys.id}
                    path={path}
                    title={item.fields.title}
                    isActive={isActive}
                  />
                );
              })}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavigationMenu;
