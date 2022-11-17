import React from 'react';
import { useParams } from 'react-router-dom';

function StudyDetail() {
  const { id } = useParams();

  return <div>StudyDetail {id}</div>;
}

export default StudyDetail;
