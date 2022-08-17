import React, { useState } from 'react';
import { IProduct } from '../models';
interface ProductProps {
  product: IProduct;
}

export const Product = ({ product }: ProductProps) => {
  const [details, setDetails] = useState(false);
  const btnBgClasses = details ? 'bg-pink-400' : 'bg-pink-200';
  const btnClasses = ['py-2 px-4 border', btnBgClasses];
  return (
    <div className="border py-2 px-4 rounded flex flex-col items-center mb-2">
      <img src={product.image} alt={product.title} className="w-1/6" />
      <p>{product.title}</p>
      <p className="font-bold">{product.price}</p>
      <button
        onClick={() => setDetails((prev) => !prev)}
        className={btnClasses.join(' ')}
      >
        {details ? 'Hide Details' : 'Show Datails'}
      </button>
      {details && <p>{product.description}</p>}
      <p>
        Rate: <span style={{ fontWeight: 'bold' }}>{product?.rating?.rate}</span>
      </p>
    </div>
  );
};
