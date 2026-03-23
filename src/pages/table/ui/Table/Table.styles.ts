import { css } from '@emotion/react';

export const tableStyles = css`
  width: 100%;
  border-collapse: collapse;
  table-layout: fixed;
  margin-top: 20px;
`;

export const rowStyle = css`
  border-bottom: 1px solid var(--border-gray);
`;

export const headStyle = css`
  text-align: left;
  color: var(--text-gray-light);
  font-size: 0.8rem;
  font-weight: 400;
  padding-bottom: 8px;
  letter-spacing: 0.04rem;
`;

export const cellStyle = css`
  color: var(--text-gray-dark);
  font-size: 0.9rem;
  font-weight: 700;
  padding: 10px;
`;

export const cellInnerStyle = css`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
