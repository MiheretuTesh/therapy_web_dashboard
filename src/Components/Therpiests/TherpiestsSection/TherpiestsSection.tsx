import React from "react";
import styled from "@emotion/styled";
import DropDown from "../../Shared/DropDown";
import { EventAvailable, Search, Sort } from "@mui/icons-material";
import MidicalCrossSVG from "../../../static/svg/medical-cross.svg";
import Card from "./Card/Card";
import { therapiestPageUserCard } from "../../../constants/data/cardData";

const Therpiests: React.FC = () => {
  return (
    <Wrapper>
      <FilterContainer>
        <DropDownContainer>
          <SortIconWrapper />
          <Label>Sort by:</Label>
          <DropDowns>
            <DropDown labelText="Language" options={["English", "German"]} />
            <DropDown
              icon={<EventAvailable style={{ color: "white" }} />}
              labelText="Any Date"
              options={["Last Week", "Last Month"]}
            />
            <DropDown
              icon={<img src={MidicalCrossSVG} />}
              labelText="Discussian subject"
              options={["Psychology", "Relationship", "Marriage"]}
            />
            <DropDown
              icon={<img src={MidicalCrossSVG} />}
              labelText="Age diapason"
              options={[
                "13–19 years",
                "20–35 years",
                "36–55 years",
                "56+ years",
              ]}
            />
          </DropDowns>
        </DropDownContainer>
        <SearchContainer>
          <SearchInput placeholder="Search..." />
          <SearchIconWrapper />
        </SearchContainer>
      </FilterContainer>
      <CardContainer>
        {therapiestPageUserCard.map((user) => (
          <Card
            key={user.id}
            imageSrc={user.imageSrc}
            title={user.title}
            description={user.description}
            infoElements={user.infoElements}
            rating={user.rating}
            ratingCount={user.ratingCount}
          />
        ))}
      </CardContainer>
    </Wrapper>
  );
};

export default Therpiests;

const Wrapper = styled.div`
  width: 75%;
  display: flex;
  flex-direction: column;
  overflow: auto;

  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 8px;
  background-color: rgba(0, 0, 0, 0.2);
  margin-bottom: 12px;
`;

const DropDownContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 0 10px;
  gap: 5px;
`;

const DropDowns = styled.div`
  display: flex;
  gap: 15px;
`;

const SortIconWrapper = styled(Sort)`
  width: 30.58px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
`;

const Label = styled.span`
  font-family: "Roboto", sans-serif;
  font-size: 18px;
  color: #fff;
`;

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: white;
  color: black;
  border-radius: 8px;
  padding: 5px 10px;
  border: 1px solid #7d12a3;
`;

const SearchIconWrapper = styled(Search)`
  width: 40px;
  height: 40px;
  padding: 5px;
  color: #fff;
  background: linear-gradient(91.41deg, #e617b2 0%, #48c1fe 100%),
    linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2));
  border-radius: 9px;

  &:hover {
    background-color: #3baee1;
  }
`;

const SearchInput = styled.input`
  font-family: "Roboto", sans-serif;
  flex: 1;
  border: none;
  padding: 8px;
  border-radius: 4px;
  font-size: 16px;
  font-weight: 100;
  color: #140a38;
  outline: none;
  placehoder-color: #140a38;
`;

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
`;
