import React from "react";

interface RouteProps {
  path: string;
  component: React.ReactNode;
}
const Route = ({ path, component }: RouteProps) => {
  const currentPath = window.location.pathname;

  return currentPath === path ? (
    <React.Fragment>{component}</React.Fragment>
  ) : null;
};
export default Route
