import React from 'react';
import { useParams } from 'react-router-dom';

const FAQDetailPage = () => {
  const { id } = useParams();
  return <div>FAQ Detail for ID: {id}</div>;
};

export default FAQDetailPage;
