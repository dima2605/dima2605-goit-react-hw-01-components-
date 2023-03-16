import styled from '@emotion/styled';

export const UserProfile = styled.div`
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;

  background-color: #fff;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),
    0px 2px 1px rgba(0, 0, 0, 0.2);
`;
export const UserName = styled.p`
  margin-bottom: 15px;

  font-size: 20px;
  line-height: 1.3;
  font-weight: 500;
  letter-spacing: 0.03em;
`;

export const UserDescription = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;

  margin: 0 auto;
  padding: 30px 0;
`;

export const UserImg = styled.img`
  width: 80px;
  height: 80px;
  margin-bottom: 15px;
  border-radius: 50%;
  background-color: #5d5a5a;
`;
export const UserTag = styled.p`
  margin-bottom: 15px;
  color: #bababa;
`;
export const UserLocation = styled.p`
  margin-bottom: 10px;
  color: #bababa;
`;
export const UserStats = styled.ul`
  display: flex;
  width: 100%;
`;
export const UserStatsItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  width: 33.3%;
  padding: 20px;
  background-color: #dfd9d9a4;
  border-top: 1px solid #cac7c7;
  :not(last-child) {
    border-right: 1px solid #cac7c7;
  }
`;
export const UserLabel = styled.span`
  color: #a99a9a;
`;
export const UserQuantity = styled.span`
  font-size: 15px;
  line-height: 1.3;
  font-weight: 500;

  letter-spacing: 0.03em;
`;
