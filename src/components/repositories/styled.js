import styled from "styled-components";
import { Tabs, TabList, Tab, TabPanel } from "react-tabs";

export const WrapperTabs = styled(Tabs)`
  font-size: 16px;
  width: 100%;
  margin-top: 16px;
`;

export const WrapperTabList = styled(TabList)`
  list-style-type: none;
  padding: 1.5rem;
  display: flex;
  gap: 0.5rem;
  margin: 0;
`;

WrapperTabList.tabsRole = "TabList";

export const WrapperTab = styled(Tab)`
  border-radius: 16px;
  padding: 16px;
  user-select: none;
  cursor: pointer;
  z-index: 999;
  background-color: #65319e;
  color: #ededed;
  box-shadow: 1px 1px 5px #2e2e2e;

  &:focus {
    outline: none;
  }

  &.is-selected {
    background-color: #7c3cc2;
  }
`;

WrapperTab.tabsRole = "Tab";

export const WrapperTabPanel = styled(TabPanel)`
  padding: 16px;
  border: 1px solid #65319e;
  border-radius: 16px;
  box-shadow: 1px 1px 5px #2e2e2e;
  display: none;

  &.is-selected {
    display: block;
  }
`;

WrapperTabPanel.tabsRole = "TabPanel";

export const WrapperList = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
`;
