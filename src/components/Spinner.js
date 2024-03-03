import React from 'react'
import loadingIcon from'../assets/img/loading.svg';
import styled from 'styled-components';

const Spinner = () => {
  return (
    <ContainerLoading>
      <SpinnerIcon src={loadingIcon} alt='Loading' />
    </ContainerLoading>
  )
}

const ContainerLoading = styled.div`
  min-height: 500px;
  width: 100%;
  display: grid;
  place-content: center;
  padding: 50px 0;
`;

const SpinnerIcon = styled.img`
  width: 150px;
`;

export default Spinner