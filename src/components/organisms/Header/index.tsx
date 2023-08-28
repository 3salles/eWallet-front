import { DefaultHeader } from "./defaultHeader";
import { LandingHeader } from "./landingHeader";

export const Header = ({ type }: { type: "default" | "landing" }) => {
  return type === "default" ? <DefaultHeader /> : <LandingHeader />;
};
