
import React from 'react';
import { Star, Plus, ShoppingBag } from 'lucide-react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
  onViewDetails: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart, onViewDetails }) => {
  return (
    <div className="group bg-slate-900/40 border border-slate-800 rounded-2xl overflow-hidden hover:border-blue-500/50 transition-all duration-300">
      <div className="relative aspect-square overflow-hidden bg-slate-800 cursor-pointer" onClick={() => onViewDetails(product)}>
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300"></div>
        {product.featured && (
          <span className="absolute top-4 left-4 bg-blue-600 text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded text-white shadow-lg">
            Featured
          </span>
        )}
      </div>
      <div className="p-5">
        <div className="flex justify-between items-start mb-2">
          <p className="text-xs font-semibold text-blue-400 uppercase tracking-wider">{product.category}</p>
          <div className="flex items-center gap-1">
            <Star className="w-3 h-3 fill-yellow-500 text-yellow-500" />
            <span className="text-xs font-medium text-slate-300">{product.rating}</span>
          </div>
        </div>
        <h3 
          className="text-lg font-bold text-white mb-2 group-hover:text-blue-400 transition-colors cursor-pointer"
          onClick={() => onViewDetails(product)}
        >
          {product.name}
        </h3>
        <p className="text-sm text-slate-400 line-clamp-2 mb-4 leading-relaxed">
          {product.description}
        </p>
        <div className="flex items-center justify-between mt-auto">
          <p className="text-xl font-bold text-white">${product.price}</p>
          <button 
            onClick={() => onAddToCart(product)}
            className="p-2.5 bg-slate-800 hover:bg-blue-600 rounded-xl text-white transition-all transform active:scale-95 group-hover:shadow-lg group-hover:shadow-blue-500/20"
          >
            <Plus className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
