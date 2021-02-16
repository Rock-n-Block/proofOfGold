import React from 'react';
import { Input } from 'antd';
import { useHistory } from 'react-router-dom';

import './SearchInput.scss';

const SearchInput = React.forwardRef(({ handleClose }: any, ref: any) => {
  const history = useHistory();

  const handleKeyDown = (e: any) => {
    if (e.key === 'Enter' && e.target.value) {
      history.push(`/search/?to_search=${e.target.value}`);
      handleClose && handleClose();
    }
  };
  return (
    <Input
      ref={ref}
      className="s-input input"
      placeholder="Search"
      allowClear={true}
      onKeyDown={handleKeyDown}
    />
  );
});

export default SearchInput;
