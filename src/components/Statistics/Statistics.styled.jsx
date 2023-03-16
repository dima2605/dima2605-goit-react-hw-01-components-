import styled from '@emotion/styled';

export const StatSection = styled.section`
  margin-top: 30px;
  width: 300px;
  background-color: white;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),
    0px 2px 1px rgba(0, 0, 0, 0.2);
`;

export const TitleWrap = styled.div`
  padding: 20px;
`;

export const Title = styled.h2`
  text-align: center;
  text-transform: uppercase;
  font-size: 20px;
  font-weight: 700;
`;

export const StatList = styled.ul`
  display: flex;
`;

export const StatItem = styled.li`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  color: white;
`;

export const StatLabel = styled.span`
  margin-bottom: 10px;
  font-weight: 500px;
  font-size: 12px;
`;
export const StatPercentage = styled.span`
  line-height: 1.3;
  font-weight: 500px;
  font-size: 15px;
`;
