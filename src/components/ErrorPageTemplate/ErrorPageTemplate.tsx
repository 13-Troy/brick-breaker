import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import Button from '../../components/Button';

import { CenterSt, BigSt, SmallSt, ContainerTitleSt } from './style';

interface ErrorPageTemplateProps {
  title: string;
  subtitle: string;
}

const ErrorPageTemplate: FC<ErrorPageTemplateProps> = ({ title, subtitle }) => {
  const navigate = useNavigate();

  const goBack = () => navigate(-1);

  return (
    <CenterSt>
      <ContainerTitleSt>
        <BigSt>{title}</BigSt>
        <SmallSt>{subtitle}</SmallSt>
      </ContainerTitleSt>
      <Button fullWidth={false} onClick={goBack}>
        назад
      </Button>
    </CenterSt>
  );
};

export default ErrorPageTemplate;
