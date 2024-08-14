import React from 'react';
import styled from '@emotion/styled';
import {
  AccountCircle,
  Lock,
  Archive,
  Group,
  Delete,
  ChevronRight,
} from '@mui/icons-material';

interface MainContentProps {
  activeItem: string;
}

const MainContent: React.FC<MainContentProps> = ({ activeItem }) => {
  const renderContent = () => {
    switch (activeItem) {
      case 'Your account':
        return (
          <>
            <Heading>Your Account</Heading>
            <Subheading>
              See information about your account, download an archive of your
              data, or learn about your account deactivation options.
            </Subheading>
            <AccountOptions>
              <Option>
                <IconWrapper>
                  <AccountCircle />
                </IconWrapper>
                <OptionContent>
                  <OptionTitle>Account information</OptionTitle>
                  <OptionDescription>
                    See your account information like your phone number and
                    email address.
                  </OptionDescription>
                </OptionContent>
                <ChevronRight />
              </Option>

              <Option>
                <IconWrapper>
                  <Lock />
                </IconWrapper>
                <OptionContent>
                  <OptionTitle>Change your password</OptionTitle>
                  <OptionDescription>
                    Change your password at any time.
                  </OptionDescription>
                </OptionContent>
                <ChevronRight />
              </Option>

              <Option>
                <IconWrapper>
                  <Archive />
                </IconWrapper>
                <OptionContent>
                  <OptionTitle>Download an archive of your data</OptionTitle>
                  <OptionDescription>
                    Get insights into the type of information stored for your
                    account.
                  </OptionDescription>
                </OptionContent>
                <ChevronRight />
              </Option>

              <Option>
                <IconWrapper>
                  <Group />
                </IconWrapper>
                <OptionContent>
                  <OptionTitle>TweetDeck Teams</OptionTitle>
                  <OptionDescription>
                    Invite anyone to Tweet from this account using the Teams
                    feature in TweetDeck.
                  </OptionDescription>
                </OptionContent>
                <ChevronRight />
              </Option>

              <Option>
                <IconWrapper>
                  <Delete />
                </IconWrapper>
                <OptionContent>
                  <OptionTitle>Deactivate your account</OptionTitle>
                  <OptionDescription>
                    Find out how you can deactivate your account.
                  </OptionDescription>
                </OptionContent>
                <ChevronRight />
              </Option>
            </AccountOptions>
          </>
        );
      // Other cases can go here
      default:
        return null;
    }
  };

  return <MainContentContainer>{renderContent()}</MainContentContainer>;
};

export default MainContent;

const MainContentContainer = styled.div`
  width: 55%;
  padding: 20px;
  background-color: white;
  border-left: 1px solid #ccc;
  border-right: 1px solid #ccc;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
`;

const Heading = styled.h2`
  width: 100%;
  display: flex;
  justify-content: center;
  font-size: 24px;
  color: #333;
  margin-bottom: 10px;
  font-family: 'Roboto', sans-serif;
  padding-bottom: 30px;
`;

const Subheading = styled.p`
  font-size: 16px;
  color: #7d12a3;
  margin-bottom: 20px;
  font-family: 'Roboto', sans-serif;
`;

const AccountOptions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const Option = styled.div`
  display: flex;
  align-items: center;
  font-size: 16px;
  color: #705cf6;
  cursor: pointer;
  justify-content: space-between;

  &:hover {
    text-decoration: underline;
  }
`;

const IconWrapper = styled.div`
  margin-right: 10px;
`;

const OptionContent = styled.div`
  flex-grow: 1;
`;

const OptionTitle = styled.div`
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  font-weight: 600;
  color: #000;
`;

const OptionDescription = styled.div`
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  color: #7d12a3;
`;
