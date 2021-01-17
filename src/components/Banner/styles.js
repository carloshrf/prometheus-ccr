import styled from 'styled-components';

import bannerJobsImg from "../../assets/images/bannerjobs.svg";

export const Container = styled.div`
  background-image: url(${bannerJobsImg});
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 450px;
  display: flex;
  flex: 1;
`;