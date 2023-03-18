import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react";
import { useRouter } from "next/router";

const Header = () => {
  const location = useRouter();

  return (
    <Breadcrumb
      fontWeight="small"
      fontSize="3em"
      bg="blue.100"
      top="0"
      right="0"
      color="black.50"
      paddingX="100"
    >
      <BreadcrumbItem>
        <BreadcrumbLink
          href="/"
          _hover={{
            background: "white",
          }}
          _active={{
            bg: location.pathname === "/" ? "white" : undefined,
          }}
        >
          Home
        </BreadcrumbLink>
      </BreadcrumbItem>

      <BreadcrumbItem>
        <BreadcrumbLink
          href="/about"
          _hover={{
            background: "white",
          }}
          _active={{
            bg: location.pathname === "/about" ? "white" : undefined,
          }}
        >
          About
        </BreadcrumbLink>
      </BreadcrumbItem>
    </Breadcrumb>
  );
};

export default Header;
