import { css } from '@emotion/react';
import styled from '@emotion/styled';

interface StyledPaginationButtonProps {
  active?: boolean;
}

export const wrapperPaginationStyles = css`
  display: flex;
  gap: 10px;
  padding: 0;
  margin: 20px 0 0;
  align-items: end;
`;

export const StyledPaginationButton = styled.button<StyledPaginationButtonProps>`
  background: #f8f8f8;
  border: 1px solid var(--border-gray);
  color: var(--text-gray-light);
  padding: 4px 10px;
  font-size: 0.8rem;
  border-radius: 3px;

  ${(props) =>
    props.active &&
    css`
      background-color: #e6e6e6;
      border: 1px solid var(--border-gray-dark);
    `}
`;
