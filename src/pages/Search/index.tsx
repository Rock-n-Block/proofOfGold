import React from 'react';
import { useLocation } from 'react-router-dom';

import { storeApi } from '../../utils/api';
import { ProductCard } from '../../components';

import './Search.scss';

const SearchPage = () => {
  const [searchData, setSearchData] = React.useState([]);
  const location = useLocation();
  const params = new URLSearchParams(location.search);

  const handleGetData = () => {
    const text = params.get('to_search');
    if (text) {
      storeApi
        .search({
          text,
        })
        .then(({ data }) => {
          setSearchData(data);
        })
        .catch((err) => console.log(err, 'search err'));
    }
  };

  React.useEffect(() => {
    handleGetData();
  }, [params.get('to_search')]);

  return (
    <div className="search">
      <div className="row">
        <div className="search__row">
          <div className="search__title text-gradient h1-md">
            {searchData.length} Search Results Found
          </div>
          {params.get('to_search') && (
            <div className="search__text">
              You searched for: "{params.get('to_search')}"
            </div>
          )}
          {searchData.length && (
            <div className="box-products search__products">
              {searchData.map((product: any) => (
                <ProductCard key={product.id} {...product} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
