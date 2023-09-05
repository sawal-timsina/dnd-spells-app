import { Tab, Tabs } from "@mui/material";
import { FC } from "react";

interface ITab {
  title: string;
  link: string;
}

interface IProps {
  tabs: ITab[];
  value: string;
  onChange: (value: string) => void;
}

/**
 * Renders a set of tabs.
 *
 * @param {IProps} tabs - The array of tabs to render.
 * @param {string} value - The currently selected tab value.
 * @param {function} onChange - The function to call when the selected tab changes.
 * @return {JSX.Element} The rendered tabs component.
 */
export const MTabs: FC<IProps> = ({ tabs, value, onChange }) => {
  return (
    <Tabs
      value={value}
      variant={"fullWidth"}
      onChange={(event, value) => {
        onChange(value);
      }}
    >
      {tabs.map((tab, index) => {
        return <Tab key={index} label={tab.title} value={tab.link} />;
      })}
    </Tabs>
  );
};
