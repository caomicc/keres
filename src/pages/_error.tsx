import { Meta } from '../layouts/Meta';
import { Main } from '../templates/Main';

function ErrorPage({ statusCode }: { statusCode: string | number }) {
  if (statusCode) {
    return (
      <>
        <Main meta={<Meta title={''} description={''} />}>Error!</Main>
      </>
    );
  }
  return null;
}

export default ErrorPage;
