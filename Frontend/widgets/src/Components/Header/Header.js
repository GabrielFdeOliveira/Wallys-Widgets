import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react";

const Header = () => {
  return (
    <Breadcrumb
      fontWeight="bold"
      fontSize={["md", "lg", "xl", "2xl"]}
      bgGradient="linear(to-r, purple.400, pink.400)"
      color="white"
      paddingX={{ base: 4, md: 8, lg: 12 }}
      boxShadow="md"
      position="sticky"
      top="0"
      zIndex="10"
    >
      <BreadcrumbItem>
        <BreadcrumbLink
          href="/"
          _hover={{
            color: "purple.400",
            bg: "white",
          }}
          _active={{
            bg: "white",
            color: "purple.400",
          }}
        >
          Home
        </BreadcrumbLink>
      </BreadcrumbItem>

      <BreadcrumbItem>
        <BreadcrumbLink
          href="/about"
          _hover={{
            color: "purple.400",
            bg: "white",
          }}
          _active={{
            bg: "white",
            color: "purple.400",
          }}
        >
          About
        </BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbItem>
        <BreadcrumbLink
          href="/assignment"
          _hover={{
            color: "purple.400",
            bg: "white",
          }}
          _active={{
            bg: "white",
            color: "purple.400",
          }}
        >
          Assignment
        </BreadcrumbLink>
      </BreadcrumbItem>
    </Breadcrumb>
  );
};

export default Header;
