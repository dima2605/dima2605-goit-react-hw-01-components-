import styled from '@emotion/styled';

export const HistoryTable = styled.table`
  width: 600px;
  margin-top: 30px;

  text-align: center;

  background-color: #fff;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),
    0px 2px 1px rgba(0, 0, 0, 0.2);
`;

export const HistoryHead = styled.thead`
  font-weight: 500px;
  font-size: 14px;
  line-height: 1.3;
  letter-spacing: 0.1em;
  text-transform: uppercase;

  background-color: #4dc5e6;
  color: white;
  th {
    padding: 12px 0;
    width: 33.3%;
  }
`;
