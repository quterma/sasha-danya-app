import { useRouteError } from 'react-router-dom';
import styled from 'styled-components';

const Title = styled.h1`
  font-size: 2rem;
  text-align: center;
  color: red;
`;

export default function ErrorPage() {
  const error = useRouteError() as unknown as {
    statusText?: string;
    message?: string;
  };
  console.error(error);

  return <Title>Router error: {error.statusText || error.message}</Title>;
}
