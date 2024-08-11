import React from 'react';
import { useTranslation } from 'react-i18next';
import * as Yup from 'yup';
import { Form, Formik } from 'formik';
import { Chip } from '@mui/material';
import styled from '@emotion/styled';
import { IRegistrationTopicsForm } from '../../../../constants/types';
import { SubmitButton } from '../../../Shared';

const topics = [
  'Family',
  'Dogs',
  'Sport',
  'Cooking',
  'Food',
  'Pets',
  'Parents',
  'Marriage',
  'Relationship',
  'Girlfriends',
  'Boyfriends',
  'Intimacy',
  'Sisters',
  'History',
  'Psychology',
  'Emigration',
  'Childrens',
  'Freedom',
  'Trendings',
  'Hot Topic',
  'Fashion',
  'Diet',
  'Yoga',
  'Some Topic Here',
  'Buddism',
  'LGBT+',
  'Romantic',
];

interface IProps {
  handleSubmit: (values: IRegistrationTopicsForm) => void;
}

const RegistrationTopicsForm: React.FC<IProps> = (props) => {
  const { handleSubmit } = props;
  const { t } = useTranslation();

  const validationSchema = Yup.object().shape({
    topics: Yup.array().min(1, t('pleaseSelectAtLeastOneTopic')),
  });

  const onSubmit = (values: IRegistrationTopicsForm) => {
    handleSubmit(values);
  };

  return (
    <Wrapper>
      <Formik
        initialValues={{ topics: [] as string[] }}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({ values, setFieldValue, errors, touched }) => (
          <Form>
            <Title>{t('topicsThatYouInterestIn')}</Title>
            <Description>{t('youCanChangeAnytime')}</Description>
            <ChipWrapper>
              {topics.map((topic) => (
                <StyledChip
                  key={topic}
                  label={topic}
                  variant="filled"
                  color={
                    values.topics.includes(topic) ? 'secondary' : 'primary'
                  }
                  onClick={() => {
                    if (values.topics.includes(topic)) {
                      setFieldValue(
                        'topics',
                        values.topics.filter((t) => t !== topic)
                      );
                    } else {
                      setFieldValue('topics', [...values.topics, topic]);
                    }
                  }}
                />
              ))}
            </ChipWrapper>
            {errors.topics && touched.topics && <Error>{errors.topics}</Error>}
            <SubmitButton type="submit">{t('createAccount')}</SubmitButton>
          </Form>
        )}
      </Formik>
    </Wrapper>
  );
};

export default RegistrationTopicsForm;

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h1`
  text-align: center;
  font-size: 60px;
  color: #130a38;
  font-weight: 700;
  font-family: 'Montserrat', sans-serif;
  margin-bottom: 20px;
`;

const Description = styled.h2`
  text-align: center;
  font-size: 20px;
  font-weight: 500;
  font-family: 'Inter', sans-serif;
  margin-bottom: 20px;
`;

const ChipWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
  margin-bottom: 20px;
`;

const StyledChip = styled(Chip)`
  cursor: pointer;
  border-radius: 0;
`;

const Error = styled.div`
  width: 100%;
  text-align: center;
  font-family: 'Inter', sans-serif;
  color: #d74242;
  margin-top: 10px;
`;
