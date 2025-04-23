import React, { useEffect, useState } from 'react'
import StarRateIcon from '@mui/icons-material/StarRate';
import { teal } from '@mui/material/colors';
import { Button, Divider } from '@mui/material';
import { AddShoppingCart, FavoriteBorder, FavoriteSharp, LocalShipping, Remove, Shield, WalletOutlined, WorkspacePremium,CircularProgress,  // Added import
  Alert  } from '@mui/icons-material';
import AddIcon from '@mui/icons-material/Add';
import ReviewCard from './ReviewCard';
import store, { useAppDispatch, useAppSelector } from '../../State/Store';
import { useParams } from 'react-router-dom';
import { fetchProductById } from '../../State/customer/ProductSlice';
function PageDetail() {

  const [quantity, setQuantity] = React.useState(1);
  const dispatch = useAppDispatch();
  const { productId } = useParams();
  const { product, loading, error } = useAppSelector(store => store.product);
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
      if (productId) {
          dispatch(fetchProductById(Number(productId)));
      }
  }, [productId, dispatch]);

  if (loading) {
      return (
          <div className="flex justify-center items-center h-64">
              <CircularProgress />
          </div>
      );
  }

  if (error) {
      return (
          <div className="px-5 lg:px-20 pt-10">
              <Alert severity="error">
                  Failed to load product: {error}
              </Alert>
          </div>
      );
  }

  if (!product) {
      return (
          <div className="px-5 lg:px-20 pt-10">
              <Alert severity="info">
                  Product not found
              </Alert>
          </div>
      );
  }

  const handleActiveImage = (index: number) => {
      setActiveImage(index);
  };
  return (
    <div className='px-5 lg:px-20 pt-10'>
    <div  className='grid grid-cols-1 lg:grid-cols-2 gap-10' >
        <section className='flex flex-xol lg:flex-row gap-5'>
        <div className="w-full lg:w-[15%] flex flex-wrap lg:flex-col gap-3">
                        {product.product.images.map((item, index: number) => (
                            <img
                                onClick={handleActiveImage(index)}
                                key={index}
                                className="lg:w-full w-[50px] cursor-pointer rounded-md"
                                src={item}
                                alt={`Product view ${index + 1}`}
                            />
                        ))}
                    </div>
                    <div className='w-full lg:w-[85%]'>
                        <img 
                            className='w-full rounded-md' 
                            src={product.product.images[activeImage]} 
                            alt='Main product view'
                        />
                    </div>

        </section>

        <section className="mt-15">
  {/* Title with larger font size and primary color */}
  <h1 className="font-extrabold text-2xl text-pink-500">Raam Clothing</h1>
  <p className="text-gray-500 font-semibold">Banarasi Sadi</p>

  {/* Box for rating */}
  <div className="flex justify-between items-center border w-[180px] rounded-md px-3 py-2 mt-3">
    {/* Star and rating number */}
    <div className="flex gap-1 items-center">
      <span className="font-bold">4</span>
      <StarRateIcon sx={{ color: teal[500], fontSize: "17px" }} />
    </div>

    {/* Vertical Divider */}
    <Divider orientation="vertical" flexItem />

    {/* Total rating count */}
    <span className="text-sm text-gray-600 font-semibold">234 Ratings</span>
  </div>
  <div>
  <div className='price flex item-center gap-3 mt-2.5 text-2xl'>
    <span className='font-sans text-gray-800'>
        Rs 400

    </span>
    <span className='line-through text-gray-400'>
        Rs 999

    </span>
    <span className='font-semibold text-primary-color'>
        60% off

    </span>
    
  </div>
   <p> Inclusive of all texes. Free Shipping above Rs.1500</p></div>

   <div>
    <div className='mt-7 space-y-3'>
        <div className='flex item-center gap-4'>
            <Shield sx={{ color:teal[500]}}/>
            <p>Authentication & Quality Assured </p>

        </div>
        <div className='flex item-center gap-4'>
            <WorkspacePremium sx={{ color:teal[500]}}/>
            <p>100% Money Back Gurentee </p>

        </div>
        <div className='flex item-center gap-4'>
            <LocalShipping sx={{ color:teal[500]}}/>
            <p>Free Shipping & Return  </p>

        </div>
        <div className='flex item-center gap-4'>
            <WalletOutlined sx={{ color:teal[500]}}/>
            <p> Cash On Delivery Is Availble  </p>

        </div>

</div>
   <div className='mt-7 space-y-7'> 

     <h1 className=' font-semibold'>Quantity</h1>
      <div className='flex item-center gap-2 w-[140px] justify-between'>
       
       <Button disabled={Quantity==1} onClick={()=>setQuantiy(Quantity-1)}>
           <Remove/>
       </Button>
       <span>
        {Quantity}
       </span>
       <Button onClick={()=>setQuantiy(Quantity+1)} >
           <AddIcon/>
       </Button>
      </div>
   </div>
</div>
   
   <div className='mt-12 flex item-center gap-5'>

    <Button
    fullWidth
    variant='contained'
    startIcon={<AddShoppingCart/>}
    
    sx={{py:"1rem"}}>
      Add To Cart
    </Button>
   
    <Button
    fullWidth
    variant='outlined'
    startIcon={<FavoriteSharp/>}
    
    sx={{py:"1rem"}}>
      Whishlist
    </Button>
   </div>

   <div className='mt-5'>
    <p> This Sari made from Banars </p>

   </div>
   <div className='mt-5'>
   <div className='mt-17'>
    <ReviewCard/>
   </div>
   </div>


</section>
    </div>

    </div>
  )
}

export default PageDetail