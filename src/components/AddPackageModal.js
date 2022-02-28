import { Dialog } from '@headlessui/react';
import React, { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addPackage, fetchPackages } from '../reducers/packagesReducer';
import Button from './Button';
import './styles/AddPackageModal.css';
export default function AddPackageModal({ isOpen, onClose }) {
  const [submit, setSubmit] = useState(false);
  const dispatch = useDispatch();
  const recipientName = useRef('');
  const recipientEmail = useRef('');
  const packageType = useRef('');
  const packageCarrier = useRef('');
  const handleSubmitForm = e => {
    e.preventDefault();
    const type = [...packageType.current.querySelectorAll('input')].filter(
      input => input.checked
    );
    dispatch(
      addPackage({
        name: recipientName.current.value,
        email: recipientEmail.current.value,
        carrier: packageCarrier.current.value,
        type: type[0].value,
      })
    );
    setSubmit(true);
  };
  useEffect(() => {
    if (submit === true) {
      setSubmit(false);
      dispatch(fetchPackages());
      onClose();
    }
  }, [submit]);
  return (
    <Dialog open={isOpen} onClose={onClose} className='add-package_modal'>
      <Dialog.Overlay className='add-package_modal_overlay' />
      <div className='form-wrapper'>
        <form onSubmit={handleSubmitForm}>
          <h1>new package form</h1>
          <div className='input-group'>
            <label htmlFor='recipient-name'>recipient name</label>
            <input
              ref={recipientName}
              type='text'
              id='recipient-name'
              name='recipient-name'
              placeholder='Harry Potter'
            />
          </div>
          <div className='input-group'>
            <label htmlFor='recipient-email'>recipient email</label>
            <input
              ref={recipientEmail}
              type='email'
              id='recipient-email'
              name='recipient-email'
              placeholder='harrythemagician@gmail.com'
            />
          </div>
          <div className='input-group'>
            <label htmlFor='carrier'>carrier</label>
            <input
              ref={packageCarrier}
              type='text'
              id='carrier'
              name='carrier'
              placeholder='amazon'
            />
          </div>
          <fieldset ref={packageType}>
            <label>package size</label>
            <div className='input-group row'>
              <input type='radio' id='type-small' name='type' value='small' />
              <label htmlFor='type-small'>small</label>
            </div>
            <div className='input-group row'>
              <input type='radio' id='type-medium' name='type' value='medium' />
              <label htmlFor='type-medium'>medium</label>
            </div>
            <div className='input-group row'>
              <input type='radio' id='type-large' name='type' value='large' />
              <label htmlFor='type-large'>large</label>
            </div>
          </fieldset>
          <Button icon type='submit'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              fill='currentColor'
              viewBox='0 0 16 16'>
              <path d='M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z' />
            </svg>
            add
          </Button>
        </form>
      </div>
    </Dialog>
  );
}
