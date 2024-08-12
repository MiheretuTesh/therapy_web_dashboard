import React, { useState } from "react";
import styled from "@emotion/styled";
import LanguageDropdown from "./DropDown/LanguageDropdown";
import DateDropdown from "./DropDown/DatePicker";
import SubjectDropdown from "./DropDown/SubjectDropdown";
import AgeDropdown from "./DropDown/AgeRangeDropDown";
import Dropdown from "./DropDown/DropDown";
import { ExpandMore, ExpandLess, Sort, Search } from "@mui/icons-material";
import { StackedCard, InlineCard } from "./Card";
import { cardData } from "../../../constants/data/cardData";

const Layout: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [isDropdownVisible, setIsDropdownVisible] = useState(true);

  const tabContent = ["Tab 1", "Tab 2", "Tab 3"];

  const toggleDropdownVisibility = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };

  return (
    <Wrapper>
      <SearchContainer>
        <SearchIconWrapper />
        <SearchInput placeholder="Search video chats" />
        <Button>
          <Text>Create a Meeting</Text>
        </Button>
      </SearchContainer>
      <TabContainer>
        <Tab onClick={() => setActiveTab(0)} active={activeTab === 0}>
          Therapy Meetings happening now
        </Tab>
        <Tab onClick={() => setActiveTab(1)} active={activeTab === 1}>
          Up-coming Therapy Meetings
        </Tab>
        <Tab onClick={() => setActiveTab(2)} active={activeTab === 2}>
          Proffesionals talks this week
        </Tab>
      </TabContainer>
      {/* <TabContent>{tabContent[activeTab]}</TabContent> */}

      <FilterContainer>
        <SortIconWrapper />
        <Label>Sort by:</Label>
        <LanguageDropdown />
        <DateDropdown />
        <SubjectDropdown />
        <AgeDropdown />
        <FilterToggleButton onClick={toggleDropdownVisibility}>
          {isDropdownVisible ? <LessIcon /> : <MoreIcon />}
        </FilterToggleButton>
        {isDropdownVisible && (
          <DropdownContainer>
            <Dropdown
              defaultValue="F/M/Other"
              label="Gender Allowed"
              values={["Male", "Female", "Other"]}
              labelColor="#34C759"
            />
            <Dropdown
              defaultValue="No"
              label="Country Allowed"
              values={["Germany", "France", "Russia"]}
              labelColor="#34C759"
            />
            <Dropdown
              defaultValue="No"
              label="Gender Forbidden"
              values={["Yes", "No"]}
              labelColor="#F368D0"
            />
            <Dropdown
              defaultValue="No"
              label="Country Forbidden"
              values={["France", "Germany", "Sweden", "No"]}
              labelColor="#F368D0"
            />
          </DropdownContainer>
        )}
      </FilterContainer>

      <CardContainer>
        {cardData.map((card, index) => (
          <StackedCard
            key={index}
            imageSrc={card.imageSrc}
            title={card.title}
          />
        ))}
      </CardContainer>
      <CardContainer>
        {cardData.map((card, index) => (
          <InlineCard key={index} imageSrc={card.imageSrc} title={card.title} />
        ))}
      </CardContainer>
      <CardContainer>
        {cardData.map((card, index) => (
          <InlineCard key={index} imageSrc={card.imageSrc} title={card.title} />
        ))}
      </CardContainer>
    </Wrapper>
  );
};

export default Layout;

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: transparent;
  color: black;
`;

const CardContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

const DropdownContainer = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
`;

const SearchContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  background-color: white;
  color: black;
  border-radius: 8px;
  margin-bottom: 10px;
`;

const SearchIconWrapper = styled(Search)`
  width: 30.58px;
  height: 29.84px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #3a3a3a;
  margin-left: 20px;
`;

const SearchInput = styled.input`
  flex: 1;
  border: none;
  padding: 10px;
  border-radius: 4px;
  font-size: 18.65px;
  font-weight: 100;
  color: #3a3a3a;
  outline: none;
`;

const Button = styled.button`
  background: linear-gradient(91.41deg, #e617b2 0%, #48c1fe 100%),
    linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2));
  color: white;
  border: none;
  border-radius: 8.69px;
  padding: 15px 100px;
  cursor: pointer;
  font-size: 16px;
  &:hover {
    background-color: #3baee1;
  }
`;

const Text = styled.span`
  font-family: "Roboto", sans-serif;
  font-size: 17.38px;
  color: #ffffff;
  font-weight: 400;
`;

const TabContainer = styled.div`
  width: 100%;
  display: flex;
  gap: 50px;
  border-bottom: 1px solid #ccc;
  background-color: white;
  border-radius: 8px;
  padding: 10px;
  margin-bottom: 10px;
`;

const Tab = styled.button<{ active: boolean }>`
  padding: 10px 0;
  background-color: transparent;
  border: none;
  color: ${(props) => (props.active ? "#7D12A3" : "#8E94A7")};
  cursor: pointer;
  font-size: 16px;
  font-weight: 700;
  &:hover {
    color: #48c1fe;
  }
`;

const SortIconWrapper = styled(Sort)`
  width: 30.58px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #8e94a7;
  margin-top: -10px;
`;

const FilterContainer = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  background-color: white;
  color: black;
  border-radius: 8px;
  padding: 5px 20px;
  margin-bottom: 10px;
`;

const MoreIcon = styled(ExpandMore)`
  width: 35px;
  height: 35px;
  color: #7d12a3;
`;

const LessIcon = styled(ExpandLess)`
  width: 35px;
  height: 35px;
  color: #7d12a3;
`;

const Label = styled.span`
  font-family: "Roboto", sans-serif;
  font-size: 18px;
  color: #8e94a7;
  margin-bottom: 5px;
`;

const FilterToggleButton = styled.button`
  background: transparent;
  border: none;
  color: #8e94a7;
  cursor: pointer;
  font-size: 16px;
  display: flex;
  align-items: center;
  gap: 5px;
  position: absolute;
  top: 10px;
  right: 10px;
  &:hover {
    color: #48c1fe;
  }
`;
