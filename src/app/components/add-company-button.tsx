'use client';

import React, { useState } from 'react';
import Button from '@/app/components/button';
import CompanyFormModal from '@/app/components/company-form-modal';

const AddCompanyButton = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <Button onClick={() => setShow(true)}>Add company</Button>
      <CompanyFormModal
        onSubmit={() => console.log('SUBMIT')}
        show={show}
        onClose={() => setShow(false)}
      />
    </>
  );
};

export default AddCompanyButton;
