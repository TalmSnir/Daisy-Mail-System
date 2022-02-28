import { useState, Fragment } from 'react';
import { Combobox, Dialog } from '@headlessui/react';
import { useNavigate } from 'react-router-dom';
import './styles/SearchFilter.css';
import useKeyDown from '../hooks/useKeyDown';

export default function SearchFilter({ options }) {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const navigate = useNavigate();
  useKeyDown(e => {
    if (e.altKey && e.key === 'k') {
      setIsOpen(true);
    }
  });

  const handleCloseModal = () => {
    setQuery('');
    setIsOpen(false);
  };

  const handleQuery = e => {
    setQuery(e.target.value);
  };
  const filteredOptions =
    query === ''
      ? options
      : options.filter(option =>
          option.toLowerCase().includes(query.toLowerCase())
        );

  const handleNavigateToUser = recipientName => {
    handleCloseModal();
    navigate(`/packages-by-user/${recipientName}`);
  };

  return (
    <Dialog
      open={isOpen}
      onClose={handleCloseModal}
      className='search-filter_modal'>
      <Dialog.Overlay className='modal_overlay' />
      <Combobox
        as='div'
        onChange={handleNavigateToUser}
        className='search-filter'>
        <div className='input-wrapper'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='16'
            height='16'
            fill='currentColor'
            viewBox='0 0 16 16'>
            <path d='M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z' />
          </svg>
          <Combobox.Input
            placeholder='search by name ...'
            onChange={handleQuery}
          />
        </div>
        <Combobox.Options className='search-filter_options'>
          {filteredOptions.length > 0 &&
            filteredOptions.map((option, id) => (
              <Combobox.Option key={id} value={option} as={Fragment}>
                {({ active }) => (
                  <li className={`option ${active ? 'active' : ''} `}>
                    {option}
                  </li>
                )}
              </Combobox.Option>
            ))}
        </Combobox.Options>
      </Combobox>
    </Dialog>
  );
}
