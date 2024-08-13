import React from "react";
import styled from "@emotion/styled";
import PersonIcon from "../../../static/svg/Person.svg";
import AboutIcon from "../../../static/svg/Frame.svg";
import StarOne from "../../../static/svg/Star.svg";
import StarTwo from "../../../static/svg/Star_.svg";
import Certificate from "../../../static/images/Certificate.png";
import Comment from "../../../static/images/comment_1.png";
import CommentImg from "../../../static/images/friend_one.png";

const Therapist: React.FC = () => {
  return (
    <Wrapper>
      <AboutBlock>
        <AboutSection>
          <AboutTitle>
            <img src={PersonIcon} />
            <Title>About</Title>
          </AboutTitle>
          <AboutText>
            Cursus varius aenean dictum tempor. Fusce proin fermentum nunc, et
            sagittis nunc. Feugiat rutrum id purus nunc. Sit purus diam arcu
            quam sed massa bibendum duis. Vitae aliquam eget nulla in morbi
            nisl. Suspendisse donec in mus vel turpis tincidunt auctor enim.
            Euismod aliquam vel purus egestas sed porttitor. Dictum metus
            volutpat vivamus euismod mattis. Enim rhoncus nisi et, sem commodo.
            Augue morbi etiam lobortis id.
          </AboutText>
        </AboutSection>
        <AboutSection>
          <AboutTitle>
            <img src={AboutIcon} />
            <Title>Review</Title>
          </AboutTitle>
          <AboutReview>
            <AboutCard>
              <AboutText>
                Cursus varius aenean dictum tempor. Fusce proin fermentum nunc,
                et sagittis nunc.
              </AboutText>

              <AboutCardFooter>
                <AboutName>@atrgbnhj</AboutName>
                <AboutRate>4.5</AboutRate>
                <Stars>
                  <img src={StarOne} width={15} />
                  <img src={StarOne} width={15} />
                  <img src={StarOne} width={15} />
                  <img src={StarOne} width={15} />
                  <img src={StarTwo} width={15} />
                </Stars>
              </AboutCardFooter>
            </AboutCard>
            <AboutCard>
              <AboutText>
                Cursus varius aenean dictum tempor. Fusce proin fermentum nunc,
                et sagittis nunc.
              </AboutText>
              <AboutCardFooter>
                <AboutName>@atrgbnhj</AboutName>
                <AboutRate>4.5</AboutRate>
                <Stars>
                  <img src={StarOne} width={15} />
                  <img src={StarOne} width={15} />
                  <img src={StarOne} width={15} />
                  <img src={StarOne} width={15} />
                  <img src={StarTwo} width={15} />
                </Stars>
              </AboutCardFooter>
            </AboutCard>
            <AboutCard>
              <AboutText>
                Cursus varius aenean dictum tempor. Fusce proin fermentum nunc,
                et sagittis nunc.
              </AboutText>

              <AboutCardFooter>
                <AboutName>@atrgbnhj</AboutName>
                <AboutRate>4.5</AboutRate>
                <Stars>
                  <img src={StarOne} width={15} />
                  <img src={StarOne} width={15} />
                  <img src={StarOne} width={15} />
                  <img src={StarOne} width={15} />
                  <img src={StarTwo} width={15} />
                </Stars>
              </AboutCardFooter>
            </AboutCard>
          </AboutReview>
        </AboutSection>

        <AboutSection>
          <AboutTitle>
            <img src={AboutIcon} />
            <Title>Certificate</Title>
          </AboutTitle>
          <AboutCertificates>
            <img src={Certificate} />
            <img src={Certificate} />
            <img src={Certificate} />
            <img src={Certificate} />
            <img src={Certificate} />
            <img src={Certificate} />
          </AboutCertificates>
        </AboutSection>
      </AboutBlock>
      <CommentBlock>
        <TextContainer>
          <Text>Comments (39)</Text>
          <Caption>See all</Caption>
        </TextContainer>

        <CommentSection>
          <CommentCard>
            <div>
              <Image src={Comment} />
            </div>
            <CommentText>
              <CommentName>Kayn Vampyr:</CommentName>
              <CommentDescription>
                My most vampire brother of all, I consider you godsend.
              </CommentDescription>
            </CommentText>
          </CommentCard>
          <BreakLine />
          <CommentCard>
            <div>
              <Image src={CommentImg} />
            </div>
            <CommentText>
              <CommentName>Olivia Joestar:</CommentName>
              <CommentDescription>
                only in sono chi no sadame huh son... HAHAHAHAHAHAHAHAHAHAHAH
                guys, my friend {"<3"}
              </CommentDescription>
            </CommentText>
          </CommentCard>
        </CommentSection>
      </CommentBlock>
    </Wrapper>
  );
};

export default Therapist;

const Wrapper = styled.div`
  width: 75%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  font-family: "Roboto", sans-serif;
`;

const AboutBlock = styled.div`
  border-radius: 8px;
  padding: 10px 20px;
  background-color: white;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const AboutSection = styled.div`
  padding: 5px 2px;
`;

const AboutTitle = styled.div`
  display: flex;
  gap: 10px;
`;

const Title = styled.div`
  font-size: 16px;
  font-weight: bold;
  color: #7d12a3;
`;

const AboutReview = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 10px 20px;
`;

const AboutCard = styled.div`
  border: 1px solid #7d12a3;
  width: 31%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 8px;
`;

const AboutCardFooter = styled.div`
  display: flex;
  gap: 10px;
  padding: 5px 20px;
`;
const AboutText = styled.p`
  font-size: 14px;
  font-weight: 500;
  line-height: 24px;
  color: #8e94a7;
  padding: 10px 20px;
`;

const AboutName = styled.span`
  color: #7d12a3;
  font-size: 16.97px;
  font-weight: 600;
`;
const AboutRate = styled.span`
  color: #7d12a3;
  font-size: 16.97px;
  font-weight: 600;
`;

const Stars = styled.div`
  display: flex;
  gap: 1px;

  & > svg {
    color: #ffb400;
    font-size: 20px;
  }
`;

const TextContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 10px;
  font-family: "Roboto", sans-serif;
`;

const Text = styled.div`
  font-family: "Roboto", sans-serif;
  color: #4b4b4b;
  font-size: 14px;
  font-weight: 500;
`;
const Caption = styled.div`
  font-family: "Roboto", sans-serif;
  color: #ed2590;
  font-size: 14px;
  font-weight: 500;
`;

const CommentBlock = styled.div`
  border-radius: 8px;
  padding: 10px 20px;
  background-color: white;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const CommentSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const CommentCard = styled.div`
  display: flex;
  gap: 10px;
`;

const BreakLine = styled.div`
  padding: 1px;
  border-top: 1px solid #d9e6f7;
  width: 60%;
`;

const Image = styled.img`
  width: 44px;
  width: 44px;
  object-fit: cover;
  object-position: top;
  border-radius: 50%;
`;

const CommentText = styled.div`
  display: flex;
  flex-direction: column;
  color: #333;
  gap: 10px;
  width: 100%;
`;

const CommentName = styled.p`
  font-size: 16px;
  font-weight: bold;
`;

const CommentDescription = styled.div`
  font-size: 16px;
  width: 70%;
`;

const AboutCertificates = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 10px 10px;
`;
