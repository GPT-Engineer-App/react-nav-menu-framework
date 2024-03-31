import React from "react";
import { FaUser, FaHome, FaCog, FaEnvelope, FaUsers, FaChartBar, FaFileAlt, FaShoppingCart, FaQuestionCircle, FaSignOutAlt } from "react-icons/fa";
import { Menu, MenuButton, MenuList, MenuItem, Avatar, Box, Flex, IconButton, Spacer, Text } from "@chakra-ui/react";

const menuItems = [
  { label: "Home", icon: FaHome },
  { label: "Settings", icon: FaCog },
  { label: "Messages", icon: FaEnvelope },
  { label: "Users", icon: FaUsers },
  { label: "Analytics", icon: FaChartBar },
  { label: "Documents", icon: FaFileAlt },
  { label: "Orders", icon: FaShoppingCart },
  { label: "Help", icon: FaQuestionCircle },
  { label: "Logout", icon: FaSignOutAlt },
];

const Index = () => {
  return (
    <Box className="drawer h-screen">
      <input id="left-sidebar-drawer" type="checkbox" className="drawer-toggle" />
      <Box className="drawer-content">
        {/* Navbar */}
        <Box className="navbar shadow-lg bg-neutral text-neutral-content">
          <Box className="flex-none">
            <label htmlFor="left-sidebar-drawer" className="btn btn-square btn-ghost">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </label>
          </Box>
          <Box className="flex-1 px-2 mx-2">
            <span className="text-lg font-bold">My App</span>
          </Box>
          <Box className="flex-none">
            <Menu>
              <MenuButton as={IconButton} icon={<Avatar name="User Name" src="https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxlbXBsb3llZSUyMHBvcnRyYWl0fGVufDB8fHx8MTcxMTg1NTU2N3ww&ixlib=rb-4.0.3&q=80&w=1080" size="sm" />} variant="ghost" />
              <MenuList>
                <MenuItem>Profile</MenuItem>
                <MenuItem>Settings</MenuItem>
                <MenuItem>Logout</MenuItem>
              </MenuList>
            </Menu>
          </Box>
        </Box>
        {/* Page content */}
        <Box className="p-4">
          <Text fontSize="2xl">Welcome to the app!</Text>
        </Box>
      </Box>
      <Box className="drawer-side">
        <label htmlFor="left-sidebar-drawer" className="drawer-overlay"></label>
        <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
          <li>
            <Avatar size="lg" name="User Name" src="https://images.unsplash.com/photo-1479936343636-73cdc5aae0c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwyfHxlbXBsb3llZSUyMHBvcnRyYWl0fGVufDB8fHx8MTcxMTg1NTU2N3ww&ixlib=rb-4.0.3&q=80&w=1080" />
            <span className="text-xl">User Name</span>
          </li>
          <li>
            <Flex direction="column">
              {menuItems.map(({ label, icon: Icon }) => (
                <Flex key={label} as="a" align="center" px="4" py="2" cursor="pointer" _hover={{ bg: "gray.100" }}>
                  <Icon />
                  <Text ml="2">{label}</Text>
                </Flex>
              ))}
            </Flex>
          </li>
        </ul>
      </Box>
    </Box>
  );
};

export default Index;
