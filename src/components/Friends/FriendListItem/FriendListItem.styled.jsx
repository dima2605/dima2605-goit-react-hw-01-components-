import styled from '@emotion/styled';

export const FriendItem = styled.li`
  background-color: #fff;
  display: flex;
  align-items: center;
  padding: 6px 12px;

  margin-bottom: 10px;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),
    0px 2px 1px rgba(0, 0, 0, 0.2);
`;

export const FriendStatus = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${({ status }) => {
    switch (status) {
      case true:
        return 'green';
      case false:
        return 'red';
      default:
        return '#000';
    }
  }};
`;

export const FriendImg = styled.img`
  margin-left: 12px;
  background-color: #837a7a;
  border-radius: 6px;
`;

export const FriendName = styled.p`
  margin-left: 12px;

  font-weight: 500;
  font-size: 24px;
  line-height: 1.3;
  letter-spacing: 0.02em;
`;
