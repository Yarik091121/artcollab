import React from 'react';
import Heading from '../../components/heading';
import { HeadingVariant } from '../../components/heading/types';
import { useParams } from 'react-router-dom';

const DetailPage = (): React.ReactElement => {
  const { id } = useParams();
  return <Heading variant={HeadingVariant.h2}>Detail Page {id} </Heading>;
};

export default DetailPage;