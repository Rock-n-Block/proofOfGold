import React from 'react';
import { Input } from 'antd';
import { useHistory } from 'react-router-dom';

import './SearchInput.scss';

interface ISearchInput {
  handleClose?: () => void;
}

const SearchInput: React.FC<ISearchInput> = ({ handleClose }) => {
  const history = useHistory();

  const handleKeyDown = (e: any) => {
    if (e.key === 'Enter' && e.target.value) {
      history.push(`/search/?to_search=${e.target.value}`);
      handleClose && handleClose();
    }
  };
  return (
    <Input
      className="s-input input"
      placeholder="Search"
      allowClear={true}
      onKeyDown={handleKeyDown}
    />
  );
};

export default SearchInput;
