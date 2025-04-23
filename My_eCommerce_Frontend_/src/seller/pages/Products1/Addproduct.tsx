// import { AddPhotoAlternate, Category, Description, Close } from '@mui/icons-material';
// import { CircularProgress, Grid, Typography, Box, IconButton, Paper } from '@mui/material';
// import { useFormik } from 'formik';
// import React, { useState } from 'react';
// import { useAppDispatch } from '../../../State/Store';
// import { createProduct } from '../../../State/seller/sellerProductSlice';
// import { request } from 'http';
// import { uploadCloudinary } from '../../../utils/uploadcloudnary';

// interface ProductFormValues {
//   title: string;
//   description: string;
//   mrpPrice: string;
//   sellingPrice: string;
//   quantity: string;
//   color: string;
//   images: string[];
//   category: string;
//   category2: string;
//   category3: string;
//   size: string;
// }

// const Addproduct = () => {
//   const [uploadingImage, setUploadingImage] = useState(false);
//   const disPatch=useAppDispatch();
  
//   const formik = useFormik<ProductFormValues>({
//     initialValues: {
//       title: "",
//       description: "",
//       mrpPrice: "",
//       sellingPrice: "",
//       quantity: "",
//       color: "",
//       images: [],
//       category: "",
//       category2: "",
//       category3: "",
//       size: "",
//     },
//     onSubmit: (values) => {
     
//       console.log('Form submitted:', values);
//       disPatch(createProduct({
//         request: values,
//         jwt: localStorage.getItem("jwt") || ""
//       }));
//     }
//   });

//   const handleImageChange = async (event: any) => {
//     const files = event.target.files[0];
  
//     setUploadingImage(true);
//     const image =await uploadCloudinary(files)

//     formik.setFieldValue("images",[...formik.values.images,image])

//     try {
//       await new Promise(resolve => setTimeout(resolve, 1000));
//       const reader = new FileReader();
//       reader.onload = (e) => {
//         if (e.target?.result) {
//           formik.setFieldValue("image", [...formik.values.images, e.target.result as string]);
//         }
//       };
//       reader.readAsDataURL(files);
//     } catch (error) {
//       console.error('Error uploading image:', error);
//     } finally {
//       setUploadingImage(false);
//     }
//   };

//   const handleRemoveImage = (index: number) => {
//     const updatedImages = [...formik.values.images];
//     updatedImages.splice(index, 1);
//     formik.setFieldValue("image", updatedImages);
//   };

//   return (
//     <Box sx={{
//       p: 4,
//       maxWidth: 1200,
//       mx: 'auto',
//       bgcolor: 'background.paper',
//       borderRadius: 2,
//       boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.05)'
//     }}>
//       <Typography variant="h5" component="h1" sx={{ 
//         mb: 4,
//         fontWeight: 600,
//         color: 'text.primary'
//       }}>
//         Add New Product
//       </Typography>
      
//       <form onSubmit={formik.handleSubmit}>
//         <Grid container spacing={4}>
//           {/* Image Upload Section */}
//           <Grid item xs={12}>
//             <Paper elevation={0} sx={{ 
//               p: 3,
//               borderRadius: 2,
//               border: '1px dashed',
//               borderColor: 'divider',
//               bgcolor: 'background.default'
//             }}>
//               <Typography variant="subtitle1" sx={{ mb: 2, fontWeight: 500 }}>
//                 Product Images
//               </Typography>
              
//               <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
//                 <input
//                   type='file'
//                   accept='image/*'
//                   id='fileInput'
//                   style={{ display: "none" }}
//                   onChange={handleImageChange}
//                   disabled={uploadingImage}
//                 />

//                 <label htmlFor='fileInput'>
//                   <Box sx={{
//                     width: 120,
//                     height: 120,
//                     display: 'flex',
//                     flexDirection: 'column',
//                     alignItems: 'center',
//                     justifyContent: 'center',
//                     bgcolor: 'action.hover',
//                     borderRadius: 1,
//                     cursor: 'pointer',
//                     transition: 'all 0.2s',
//                     '&:hover': {
//                       bgcolor: 'action.selected',
//                     },
//                     position: 'relative',
//                     overflow: 'hidden'
//                   }}>
//                     {uploadingImage ? (
//                       <CircularProgress size={24} />
//                     ) : (
//                       <>
//                         <AddPhotoAlternate sx={{ fontSize: 32, color: 'text.secondary', mb: 0.5 }} />
//                         <Typography variant="caption" sx={{ color: 'text.secondary' }}>
//                           Add Image
//                         </Typography>
//                       </>
//                     )}
//                   </Box>
//                 </label>

//                 {formik.values.images.map((img, index) => (
//                   <Box key={index} sx={{
//                     position: 'relative',
//                     width: 120,
//                     height: 120,
//                     borderRadius: 1,
//                     overflow: 'hidden',
//                     '&:hover .remove-btn': {
//                       opacity: 1
//                     }
//                   }}>
//                     <Box
//                       component="img"
//                       src={img}
//                       alt={`product-${index}`}
//                       sx={{
//                         width: '100%',
//                         height: '100%',
//                         objectFit: 'cover',
//                         transition: 'transform 0.3s',
//                         '&:hover': {
//                           transform: 'scale(1.05)'
//                         }
//                       }}
//                     />
//                     <IconButton
//                       className="remove-btn"
//                       onClick={() => handleRemoveImage(index)}
//                       sx={{
//                         position: 'absolute',
//                         top: 4,
//                         right: 4,
//                         bgcolor: 'error.main',
//                         color: 'common.white',
//                         p: 0.5,
//                         opacity: 0,
//                         transition: 'opacity 0.2s',
//                         '&:hover': {
//                           bgcolor: 'error.dark'
//                         }
//                       }}
//                     >
//                       <Close sx={{ fontSize: 16 }} />
//                     </IconButton>
//                   </Box>
//                 ))}
//               </Box>
//             </Paper>
//           </Grid>

//           {/* Product Details */}
//           <Grid item xs={12} md={8}>
//             <Paper elevation={0} sx={{ p: 3, borderRadius: 2, bgcolor: 'background.default' }}>
//               <Typography variant="subtitle1" sx={{ mb: 3, fontWeight: 500 }}>
//                 Product Information
//               </Typography>
              
//               <Grid container spacing={3}>
//                 <Grid item xs={12}>
//                   <Box sx={{ mb: 2 }}>
//                     <Typography variant="body2" sx={{ mb: 1, fontWeight: 500 }}>
//                       Product Title
//                     </Typography>
//                     <Box
//                       component="input"
//                       id="title"
//                       name="title"
//                       type="text"
//                       onChange={formik.handleChange}
//                       value={formik.values.title}
//                       sx={{
//                         width: '100%',
//                         p: '12px 16px',
//                         border: '1px solid',
//                         borderColor: 'divider',
//                         borderRadius: 1,
//                         fontSize: 14,
//                         '&:focus': {
//                           outline: 'none',
//                           borderColor: 'primary.main',
//                           boxShadow: '0 0 0 2px rgba(25, 118, 210, 0.2)'
//                         }
//                       }}
//                       placeholder="e.g. Premium Cotton T-Shirt"
//                     />
//                   </Box>
//                 </Grid>

//                 <Grid item xs={12}>
//                   <Box sx={{ mb: 2 }}>
//                     <Typography variant="body2" sx={{ mb: 1, fontWeight: 500 }}>
//                       Description
//                     </Typography>
//                     <Box
//                       component="textarea"
//                       id="description"
//                       name="description"
//                       onChange={formik.handleChange}
//                       value={formik.values.description}
//                       rows={5}
//                       sx={{
//                         width: '100%',
//                         p: '12px 16px',
//                         border: '1px solid',
//                         borderColor: 'divider',
//                         borderRadius: 1,
//                         fontSize: 14,
//                         resize: 'vertical',
//                         minHeight: 100,
//                         '&:focus': {
//                           outline: 'none',
//                           borderColor: 'primary.main',
//                           boxShadow: '0 0 0 2px rgba(25, 118, 210, 0.2)'
//                         }
//                       }}
//                       placeholder="Enter detailed product description..."
//                     />
//                   </Box>
//                 </Grid>
//               </Grid>
//             </Paper>
//           </Grid>

//           {/* Pricing & Inventory */}
//           <Grid item xs={12} md={4}>
//             <Paper elevation={0} sx={{ p: 3, borderRadius: 2, bgcolor: 'background.default' }}>
//               <Typography variant="subtitle1" sx={{ mb: 3, fontWeight: 500 }}>
//                 Pricing & Inventory
//               </Typography>
              
//               <Grid container spacing={2}>
//                 <Grid item xs={12}>
//                   <Box sx={{ mb: 2 }}>
//                     <Typography variant="body2" sx={{ mb: 1, fontWeight: 500 }}>
//                       MRP Price
//                     </Typography>
//                     <Box
//                       component="input"
//                       id="mrpPrice"
//                       name="mrpPrice"
//                       type="number"
//                       onChange={formik.handleChange}
//                       value={formik.values.mrpPrice}
//                       sx={{
//                         width: '100%',
//                         p: '12px 16px',
//                         border: '1px solid',
//                         borderColor: 'divider',
//                         borderRadius: 1,
//                         fontSize: 14,
//                         '&:focus': {
//                           outline: 'none',
//                           borderColor: 'primary.main',
//                           boxShadow: '0 0 0 2px rgba(25, 118, 210, 0.2)'
//                         }
//                       }}
//                       placeholder="0.00"
//                     />
//                   </Box>
//                 </Grid>

//                 <Grid item xs={12}>
//                   <Box sx={{ mb: 2 }}>
//                     <Typography variant="body2" sx={{ mb: 1, fontWeight: 500 }}>
//                       Selling Price
//                     </Typography>
//                     <Box
//                       component="input"
//                       id="sellingPrice"
//                       name="sellingPrice"
//                       type="number"
//                       onChange={formik.handleChange}
//                       value={formik.values.sellingPrice}
//                       sx={{
//                         width: '100%',
//                         p: '12px 16px',
//                         border: '1px solid',
//                         borderColor: 'divider',
//                         borderRadius: 1,
//                         fontSize: 14,
//                         '&:focus': {
//                           outline: 'none',
//                           borderColor: 'primary.main',
//                           boxShadow: '0 0 0 2px rgba(25, 118, 210, 0.2)'
//                         }
//                       }}
//                       placeholder="0.00"
//                     />
//                   </Box>
//                 </Grid>

//                 <Grid item xs={12}>
//                   <Box sx={{ mb: 2 }}>
//                     <Typography variant="body2" sx={{ mb: 1, fontWeight: 500 }}>
//                       Quantity
//                     </Typography>
//                     <Box
//                       component="input"
//                       id="quantity"
//                       name="quantity"
//                       type="number"
//                       onChange={formik.handleChange}
//                       value={formik.values.quantity}
//                       sx={{
//                         width: '100%',
//                         p: '12px 16px',
//                         border: '1px solid',
//                         borderColor: 'divider',
//                         borderRadius: 1,
//                         fontSize: 14,
//                         '&:focus': {
//                           outline: 'none',
//                           borderColor: 'primary.main',
//                           boxShadow: '0 0 0 2px rgba(25, 118, 210, 0.2)'
//                         }
//                       }}
//                       placeholder="0"
//                     />
//                   </Box>
//                 </Grid>
//               </Grid>
//             </Paper>
//           </Grid>

//           {/* Categories */}
//           <Grid item xs={12}>
//             <Paper elevation={0} sx={{ p: 3, borderRadius: 2, bgcolor: 'background.default' }}>
//               <Typography variant="subtitle1" sx={{ mb: 3, fontWeight: 500 }}>
//                 Categories
//               </Typography>
              
//               <Grid container spacing={3}>
//                 <Grid item xs={12} md={4}>
//                   <Box sx={{ mb: 2 }}>
//                     <Typography variant="body2" sx={{ mb: 1, fontWeight: 500 }}>
//                       Main Category
//                     </Typography>
//                     <Box
//                       component="select"
//                       id="category"
//                       name="category"
//                       onChange={formik.handleChange}
//                       value={formik.values.category}
//                       sx={{
//                         width: '100%',
//                         p: '12px 16px',
//                         border: '1px solid',
//                         borderColor: 'divider',
//                         borderRadius: 1,
//                         fontSize: 14,
//                         bgcolor: 'background.paper',
//                         '&:focus': {
//                           outline: 'none',
//                           borderColor: 'primary.main',
//                           boxShadow: '0 0 0 2px rgba(25, 118, 210, 0.2)'
//                         }
//                       }}
//                     >
//                       <option value="">Select category</option>
//                       <option value="electronics">Men</option>
//                       <option value="clothing">Women</option>
//                       <option value="home">Home & Funiture</option>
//                       <option value="home">Electronics</option>
//                     </Box>
//                   </Box>
//                 </Grid>

//                 <Grid item xs={12} md={4}>
//                   <Box sx={{ mb: 2 }}>
//                     <Typography variant="body2" sx={{ mb: 1, fontWeight: 500 }}>
//                       Sub Category
//                     </Typography>
//                     <Box
//                       component="select"
//                       id="category2"
//                       name="category2"
//                       onChange={formik.handleChange}
//                       value={formik.values.category2}
//                       sx={{
//                         width: '100%',
//                         p: '12px 16px',
//                         border: '1px solid',
//                         borderColor: 'divider',
//                         borderRadius: 1,
//                         fontSize: 14,
//                         bgcolor: 'background.paper',
//                         '&:focus': {
//                           outline: 'none',
//                           borderColor: 'primary.main',
//                           boxShadow: '0 0 0 2px rgba(25, 118, 210, 0.2)'
//                         }
//                       }}
//                     >
//                       <option value="">Select sub-category</option>
//                       <option value="t-shirts">T-Shirts</option>
//                       <option value="pants">Pants</option>
//                       <option value="dresses">Dresses</option>
//                     </Box>
//                   </Box>
//                 </Grid>

//                 <Grid item xs={12} md={4}>
//                   <Box sx={{ mb: 2 }}>
//                     <Typography variant="body2" sx={{ mb: 1, fontWeight: 500 }}>
//                       Sub Category 2
//                     </Typography>
//                     <Box
//                       component="select"
//                       id="category3"
//                       name="category3"
//                       onChange={formik.handleChange}
//                       value={formik.values.category3}
//                       sx={{
//                         width: '100%',
//                         p: '12px 16px',
//                         border: '1px solid',
//                         borderColor: 'divider',
//                         borderRadius: 1,
//                         fontSize: 14,
//                         bgcolor: 'background.paper',
//                         '&:focus': {
//                           outline: 'none',
//                           borderColor: 'primary.main',
//                           boxShadow: '0 0 0 2px rgba(25, 118, 210, 0.2)'
//                         }
//                       }}
//                     >
//                       <option value="">Select sub-category</option>
//                       <option value="men">Men</option>
//                       <option value="women">Women</option>
//                       <option value="kids">Kids</option>
//                     </Box>
//                   </Box>
//                 </Grid>
//               </Grid>
//             </Paper>
//           </Grid>

//           {/* Submit Button */}
//           <Grid item xs={12}>
//             <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
//               <Box
//                 component="button"
//                 type="submit"
//                 disabled={formik.isSubmitting}
//                 sx={{
//                   px: 4,
//                   py: 1.5,
//                   bgcolor: 'primary.main',
//                   color: 'common.white',
//                   borderRadius: 1,
//                   border: 'none',
//                   fontSize: 14,
//                   fontWeight: 500,
//                   cursor: 'pointer',
//                   transition: 'all 0.2s',
//                   '&:hover': {
//                     bgcolor: 'primary.dark',
//                     boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)'
//                   },
//                   '&:disabled': {
//                     bgcolor: 'action.disabled',
//                     cursor: 'not-allowed'
//                   },
//                   display: 'flex',
//                   alignItems: 'center',
//                   gap: 1
//                 }}
//               >
//                 {formik.isSubmitting ? (
//                   <>
//                     <CircularProgress size={16} color="inherit" />
//                     Adding Product...
//                   </>
//                 ) : (
//                   'Add Product'
//                 )}
//               </Box>
//             </Box>
//           </Grid>
//         </Grid>
//       </form>
//     </Box>
//   );
// };

// export default Addproduct;

// import { AddPhotoAlternate, Category, Description, Close } from '@mui/icons-material';
// import { CircularProgress, Grid, Typography, Box, IconButton, Paper, Snackbar, Alert } from '@mui/material';
// import { useFormik } from 'formik';
// import React, { useState } from 'react';
// import { useAppDispatch } from '../../../State/Store';
// import { createProduct } from '../../../State/seller/sellerProductSlice';
// import { uploadCloudinary } from '../../../utils/uploadcloudnary';

// interface ProductFormValues {
//   title: string;
//   description: string;
//   mrpPrice: string;
//   sellingPrice: string;
//   quantity: string;
//   color: string;
//   images: string[];
//   category: string;
//   category2: string;
//   category3: string;
//   size: string;
// }

// const Addproduct = () => {
//   const [uploadingImage, setUploadingImage] = useState(false);
//   const [submissionState, setSubmissionState] = useState<{
//     loading: boolean;
//     success: boolean;
//     error: boolean;
//     message: string;
//   }>({
//     loading: false,
//     success: false,
//     error: false,
//     message: '',
//   });
  
//   const dispatch = useAppDispatch();
  
//   const formik = useFormik<ProductFormValues>({
//     initialValues: {
//       title: "",
//       description: "",
//       mrpPrice: "",
//       sellingPrice: "",
//       quantity: "",
//       color: "",
//       images: [],
//       category: "",
//       category2: "",
//       category3: "",
//       size: "",
//     },
//     onSubmit: async (values) => {
//       try {
//         setSubmissionState({
//           loading: true,
//           success: false,
//           error: false,
//           message: 'Adding product...'
//         });
        
//         const result = await dispatch(createProduct({
//           request: values,
//           jwt: localStorage.getItem("jwt") || ""
//         })).unwrap();
        
//         setSubmissionState({
//           loading: false,
//           success: true,
//           error: false,
//           message: 'Product added successfully!'
//         });
        
//         // Reset form after successful submission
//         formik.resetForm();
//       } catch (error) {
//         setSubmissionState({
//           loading: false,
//           success: false,
//           error: true,
//           message: 'Failed to add product. Please try again.'
//         });
//         console.error('Error submitting form:', error);
//       }
//     }
//   });

//   const handleImageChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
//     const files = event.target.files;
//     if (!files || files.length === 0) return;
    
//     const file = files[0];
//     setUploadingImage(true);
    
//     try {
//       const image = await uploadCloudinary(file);
//       formik.setFieldValue("images", [...formik.values.images, image]);
//     } catch (error) {
//       console.error('Error uploading image:', error);
//     } finally {
//       setUploadingImage(false);
//     }
//   };

//   const handleRemoveImage = (index: number) => {
//     const updatedImages = [...formik.values.images];
//     updatedImages.splice(index, 1);
//     formik.setFieldValue("images", updatedImages);
//   };

//   const handleCloseSnackbar = () => {
//     setSubmissionState(prev => ({ ...prev, success: false, error: false }));
//   };

//   return (
//     <Box sx={{
//       p: 4,
//       maxWidth: 1200,
//       mx: 'auto',
//       bgcolor: 'background.paper',
//       borderRadius: 2,
//       boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.05)'
//     }}>
//       <Typography variant="h5" component="h1" sx={{ 
//         mb: 4,
//         fontWeight: 600,
//         color: 'text.primary'
//       }}>
//         Add New Product
//       </Typography>
      
//       <Snackbar
//         open={submissionState.success || submissionState.error}
//         autoHideDuration={6000}
//         onClose={handleCloseSnackbar}
//         anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
//       >
//         <Alert
//           onClose={handleCloseSnackbar}
//           severity={submissionState.success ? 'success' : 'error'}
//           sx={{ width: '100%' }}
//         >
//           {submissionState.message}
//         </Alert>
//       </Snackbar>
      
//       <form onSubmit={formik.handleSubmit}>
//         {/* Rest of your form remains the same */}
        
//         {/* Submit Button */}
//         <Grid item xs={12}>
//           <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
//             <Box
//               component="button"
//               type="submit"
//               disabled={submissionState.loading || uploadingImage}
//               sx={{
//                 px: 4,
//                 py: 1.5,
//                 bgcolor: 'primary.main',
//                 color: 'common.white',
//                 borderRadius: 1,
//                 border: 'none',
//                 fontSize: 14,
//                 fontWeight: 500,
//                 cursor: 'pointer',
//                 transition: 'all 0.2s',
//                 '&:hover': {
//                   bgcolor: 'primary.dark',
//                   boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)'
//                 },
//                 '&:disabled': {
//                   bgcolor: 'action.disabled',
//                   cursor: 'not-allowed'
//                 },
//                 display: 'flex',
//                 alignItems: 'center',
//                 gap: 1
//               }}
//             >
//               {submissionState.loading ? (
//                 <>
//                   <CircularProgress size={16} color="inherit" />
//                   Adding Product...
//                 </>
//               ) : (
//                 'Add Product'
//               )}
//             </Box>
//           </Box>
//         </Grid>
//       </form>
//     </Box>
//   );
// };

// export default Addproduct;





// import { AddPhotoAlternate, Close } from '@mui/icons-material';
// import { 
//   CircularProgress, 
//   Grid, 
//   Typography, 
//   Box, 
//   IconButton, 
//   Paper,
//   Snackbar,
//   Alert
// } from '@mui/material';
// import { useFormik } from 'formik';
// import React, { useState } from 'react';
// import { useAppDispatch } from '../../../State/Store';
// import { createProduct } from '../../../State/seller/sellerProductSlice';
// import { uploadCloudinary } from '../../../utils/uploadcloudnary';

// interface ProductFormValues {
//   title: string;
//   description: string;
//   mrpPrice: string;
//   sellingPrice: string;
//   quantity: string;
//   color: string;
//   images: string[];
//   category: string;
//   category2: string;
//   category3: string;
//   size: string;
// }

// // Define the category hierarchy
// const categoryHierarchy = {
//   men: {
//     name: "Men",
//     subcategories: {
//       topwear: {
//         name: "Topwear",
//         items: [
//           "T-Shirts",
//           "Casual Shirts",
//           "Formal Shirts",
//           "Sweatshirts",
//           "Jackets",
//           "Blazers & Coats",
//           "Suits",
//           "Rain Jackets",
//           "Traditional Wear"
//         ]
//       },
//       bottomwear: {
//         name: "Bottomwear",
//         items: [
//           "Jeans",
//           "Trousers",
//           "Track Pants & Joggers",
//           "Shorts",
//           "Innerwear & Sleepwear"
//         ]
//       },
//       footwear: {
//         name: "Footwear",
//         items: [
//           "Casual Shoes",
//           "Sports Shoes",
//           "Formal Shoes",
//           "Sandals & Floaters",
//           "Flip Flops",
//           "Socks"
//         ]
//       },
//       accessories: {
//         name: "Fashion Accessories",
//         items: [
//           "Watches",
//           "Wallets",
//           "Belts",
//           "Sunglasses",
//           "Caps & Hats"
//         ]
//       },
//       grooming: {
//         name: "Personal Care & Grooming",
//         items: [
//           "Trimmers",
//           "Shaving Kits",
//           "Beard Oils",
//           "Fragrances",
//           "Deodorants"
//         ]
//       }
//     }
//   },
//   women: {
//     name: "Women",
//     subcategories: {
//       indianwear: {
//         name: "Indian & Fusion Wear",
//         items: [
//           "Kurtas & Suits",
//           "Sarees",
//           "Ethnic Dresses",
//           "Leggings, Salwars & Palazzos",
//           "Blouses & Skirts",
//           "Dupattas & Shawls"
//         ]
//       },
//       westernwear: {
//         name: "Western Wear",
//         items: [
//           "Tops & T-Shirts",
//           "Dresses",
//           "Jeans",
//           "Shorts & Skirts",
//           "Jumpsuits & Co-ords",
//           "Jackets & Shrugs"
//         ]
//       },
//       lingerie: {
//         name: "Lingerie & Sleepwear",
//         items: [
//           "Bras",
//           "Panties",
//           "Nightwear",
//           "Shapewear"
//         ]
//       },
//       footwear: {
//         name: "Footwear",
//         items: [
//           "Heels",
//           "Flats",
//           "Sneakers",
//           "Boots"
//         ]
//       },
//       beauty: {
//         name: "Beauty & Grooming",
//         items: [
//           "Makeup",
//           "Skincare",
//           "Haircare",
//           "Fragrances"
//         ]
//       },
//       jewelry: {
//         name: "Jewellery & Accessories",
//         items: [
//           "Earrings",
//           "Necklaces, Rings, Bangles",
//           "Handbags",
//           "Clutches",
//           "Hair Accessories",
//           "Sunglasses"
//         ]
//       }
//     }
//   },
//   electronics: {
//     name: "Electronics",
//     subcategories: {
//       mobiles: {
//         name: "Mobiles & Accessories",
//         items: [
//           "Smartphones",
//           "Mobile Cases",
//           "Power Banks",
//           "Chargers & Cables"
//         ]
//       },
//       laptops: {
//         name: "Laptops & Computers",
//         items: [
//           "Laptops",
//           "Desktops & Monitors",
//           "Keyboards & Mice",
//           "Storage Devices"
//         ]
//       },
//       appliances: {
//         name: "Home Appliances",
//         items: [
//           "Televisions",
//           "Refrigerators",
//           "Washing Machines",
//           "Air Conditioners",
//           "Microwave Ovens"
//         ]
//       },
//       audio: {
//         name: "Audio & Wearables",
//         items: [
//           "Headphones",
//           "Bluetooth Speakers",
//           "Soundbars",
//           "Smartwatches",
//           "Fitness Bands"
//         ]
//       },
//       cameras: {
//         name: "Cameras & Gaming",
//         items: [
//           "Cameras",
//           "Gaming Consoles",
//           "Controllers & Joysticks",
//           "Games"
//         ]
//       }
//     }
//   },
//   home: {
//     name: "Home & Furniture",
//     subcategories: {
//       furniture: {
//         name: "Furniture",
//         items: [
//           "Beds",
//           "Sofas",
//           "Dining Tables",
//           "Wardrobes",
//           "TV Units",
//           "Office Chairs & Tables"
//         ]
//       },
//       decor: {
//         name: "Home Decor",
//         items: [
//           "Wall Art",
//           "Clocks & Lamps",
//           "Showpieces",
//           "Artificial Plants & Flowers"
//         ]
//       },
//       kitchen: {
//         name: "Kitchen & Dining",
//         items: [
//           "Cookware",
//           "Dinner Sets",
//           "Storage & Containers",
//           "Kitchen Tools",
//           "Tableware"
//         ]
//       },
//       furnishings: {
//         name: "Furnishings",
//         items: [
//           "Curtains",
//           "Bed Sheets",
//           "Quilts & Blankets",
//           "Cushions & Covers",
//           "Rugs & Carpets"
//         ]
//       },
//       improvement: {
//         name: "Home Improvement",
//         items: [
//           "Lighting",
//           "Bathroom Accessories",
//           "Cleaning Essentials",
//           "DIY Tools"
//         ]
//       }
//     }
//   }
// };

// const Addproduct = () => {
//   const [uploadingImage, setUploadingImage] = useState(false);
//   const [submissionState, setSubmissionState] = useState({
//     loading: false,
//     success: false,
//     error: false,
//     message: ''
//   });
//   const dispatch = useAppDispatch();
  
//   const formik = useFormik<ProductFormValues>({
//     initialValues: {
//       title: "",
//       description: "",
//       mrpPrice: "",
//       sellingPrice: "",
//       quantity: "",
//       color: "",
//       images: [],
//       category: "",
//       category2: "",
//       category3: "",
//       size: "",
//     },
//     onSubmit: async (values) => {
//       try {
//         setSubmissionState({
//           loading: true,
//           success: false,
//           error: false,
//           message: 'Adding product...'
//         });
        
//         await dispatch(createProduct({
//           request: values,
//           jwt: localStorage.getItem("jwt") || ""
//         })).unwrap();
        
//         setSubmissionState({
//           loading: false,
//           success: true,
//           error: false,
//           message: 'Product added successfully!'
//         });
        
//         // Reset form after successful submission
//         formik.resetForm();
//       } catch (error) {
//         setSubmissionState({
//           loading: false,
//           success: false,
//           error: true,
//           message: 'Failed to add product. Please try again.'
//         });
//         console.error('Error submitting form:', error);
//       }
//     }
//   });

//   // Handle category change and reset subcategories
//   const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
//     formik.handleChange(e);
//     formik.setFieldValue("category2", "");
//     formik.setFieldValue("category3", "");
//   };

//   // Handle subcategory change and reset items
//   const handleSubCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
//     formik.handleChange(e);
//     formik.setFieldValue("category3", "");
//   };

//   const handleImageChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
//     const files = event.target.files;
//     if (!files || files.length === 0) return;
    
//     const file = files[0];
//     setUploadingImage(true);
    
//     try {
//       const image = await uploadCloudinary(file);
//       formik.setFieldValue("images", [...formik.values.images, image]);
//     } catch (error) {
//       console.error('Error uploading image:', error);
//     } finally {
//       setUploadingImage(false);
//     }
//   };

//   const handleRemoveImage = (index: number) => {
//     const updatedImages = [...formik.values.images];
//     updatedImages.splice(index, 1);
//     formik.setFieldValue("images", updatedImages);
//   };

//   const handleCloseSnackbar = () => {
//     setSubmissionState(prev => ({ ...prev, success: false, error: false }));
//   };

//   // Get available subcategories based on main category selection
//   const getSubCategories = () => {
//     if (!formik.values.category) return [];
//     const mainCategory = categoryHierarchy[formik.values.category as keyof typeof categoryHierarchy];
//     if (!mainCategory) return [];
    
//     return Object.entries(mainCategory.subcategories).map(([key, value]) => ({
//       id: key,
//       name: value.name
//     }));
//   };

//   // Get available items based on subcategory selection
//   const getCategoryItems = () => {
//     if (!formik.values.category || !formik.values.category2) return [];
//     const mainCategory = categoryHierarchy[formik.values.category as keyof typeof categoryHierarchy];
//     if (!mainCategory) return [];
    
//     const subCategory = mainCategory.subcategories[formik.values.category2 as keyof typeof mainCategory.subcategories];
//     if (!subCategory) return [];
    
//     return subCategory.items;
//   };

//   return (
//     <Box sx={{
//       p: 4,
//       maxWidth: 1200,
//       mx: 'auto',
//       bgcolor: 'background.paper',
//       borderRadius: 2,
//       boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.05)'
//     }}>
//       <Typography variant="h5" component="h1" sx={{ 
//         mb: 4,
//         fontWeight: 600,
//         color: 'text.primary'
//       }}>
//         Add New Product
//       </Typography>
      
//       <Snackbar
//         open={submissionState.success || submissionState.error}
//         autoHideDuration={6000}
//         onClose={handleCloseSnackbar}
//         anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
//       >
//         <Alert
//           onClose={handleCloseSnackbar}
//           severity={submissionState.success ? 'success' : 'error'}
//           sx={{ width: '100%' }}
//         >
//           {submissionState.message}
//         </Alert>
//       </Snackbar>
      
//       <form onSubmit={formik.handleSubmit}>
//         <Grid container spacing={4}>
//           {/* Image Upload Section */}
//           <Grid item xs={12}>
//             <Paper elevation={0} sx={{ 
//               p: 3,
//               borderRadius: 2,
//               border: '1px dashed',
//               borderColor: 'divider',
//               bgcolor: 'background.default'
//             }}>
//               <Typography variant="subtitle1" sx={{ mb: 2, fontWeight: 500 }}>
//                 Product Images
//               </Typography>
              
//               <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
//                 <input
//                   type='file'
//                   accept='image/*'
//                   id='fileInput'
//                   style={{ display: "none" }}
//                   onChange={handleImageChange}
//                   disabled={uploadingImage || submissionState.loading}
//                 />

//                 <label htmlFor='fileInput'>
//                   <Box sx={{
//                     width: 120,
//                     height: 120,
//                     display: 'flex',
//                     flexDirection: 'column',
//                     alignItems: 'center',
//                     justifyContent: 'center',
//                     bgcolor: 'action.hover',
//                     borderRadius: 1,
//                     cursor: 'pointer',
//                     transition: 'all 0.2s',
//                     '&:hover': {
//                       bgcolor: 'action.selected',
//                     },
//                     position: 'relative',
//                     overflow: 'hidden'
//                   }}>
//                     {uploadingImage ? (
//                       <CircularProgress size={24} />
//                     ) : (
//                       <>
//                         <AddPhotoAlternate sx={{ fontSize: 32, color: 'text.secondary', mb: 0.5 }} />
//                         <Typography variant="caption" sx={{ color: 'text.secondary' }}>
//                           Add Image
//                         </Typography>
//                       </>
//                     )}
//                   </Box>
//                 </label>

//                 {formik.values.images.map((img, index) => (
//                   <Box key={index} sx={{
//                     position: 'relative',
//                     width: 120,
//                     height: 120,
//                     borderRadius: 1,
//                     overflow: 'hidden',
//                     '&:hover .remove-btn': {
//                       opacity: 1
//                     }
//                   }}>
//                     <Box
//                       component="img"
//                       src={img}
//                       alt={`product-${index}`}
//                       sx={{
//                         width: '100%',
//                         height: '100%',
//                         objectFit: 'cover',
//                         transition: 'transform 0.3s',
//                         '&:hover': {
//                           transform: 'scale(1.05)'
//                         }
//                       }}
//                     />
//                     <IconButton
//                       className="remove-btn"
//                       onClick={() => handleRemoveImage(index)}
//                       sx={{
//                         position: 'absolute',
//                         top: 4,
//                         right: 4,
//                         bgcolor: 'error.main',
//                         color: 'common.white',
//                         p: 0.5,
//                         opacity: 0,
//                         transition: 'opacity 0.2s',
//                         '&:hover': {
//                           bgcolor: 'error.dark'
//                         }
//                       }}
//                     >
//                       <Close sx={{ fontSize: 16 }} />
//                     </IconButton>
//                   </Box>
//                 ))}
//               </Box>
//             </Paper>
//           </Grid>

//           {/* Product Details */}
//           <Grid item xs={12} md={8}>
//             <Paper elevation={0} sx={{ p: 3, borderRadius: 2, bgcolor: 'background.default' }}>
//               <Typography variant="subtitle1" sx={{ mb: 3, fontWeight: 500 }}>
//                 Product Information
//               </Typography>
              
//               <Grid container spacing={3}>
//                 <Grid item xs={12}>
//                   <Box sx={{ mb: 2 }}>
//                     <Typography variant="body2" sx={{ mb: 1, fontWeight: 500 }}>
//                       Product Title
//                     </Typography>
//                     <Box
//                       component="input"
//                       id="title"
//                       name="title"
//                       type="text"
//                       onChange={formik.handleChange}
//                       value={formik.values.title}
//                       sx={{
//                         width: '100%',
//                         p: '12px 16px',
//                         border: '1px solid',
//                         borderColor: 'divider',
//                         borderRadius: 1,
//                         fontSize: 14,
//                         '&:focus': {
//                           outline: 'none',
//                           borderColor: 'primary.main',
//                           boxShadow: '0 0 0 2px rgba(25, 118, 210, 0.2)'
//                         }
//                       }}
//                       placeholder="e.g. Premium Cotton T-Shirt"
//                     />
//                   </Box>
//                 </Grid>

//                 <Grid item xs={12}>
//                   <Box sx={{ mb: 2 }}>
//                     <Typography variant="body2" sx={{ mb: 1, fontWeight: 500 }}>
//                       Description
//                     </Typography>
//                     <Box
//                       component="textarea"
//                       id="description"
//                       name="description"
//                       onChange={formik.handleChange}
//                       value={formik.values.description}
//                       rows={5}
//                       sx={{
//                         width: '100%',
//                         p: '12px 16px',
//                         border: '1px solid',
//                         borderColor: 'divider',
//                         borderRadius: 1,
//                         fontSize: 14,
//                         resize: 'vertical',
//                         minHeight: 100,
//                         '&:focus': {
//                           outline: 'none',
//                           borderColor: 'primary.main',
//                           boxShadow: '0 0 0 2px rgba(25, 118, 210, 0.2)'
//                         }
//                       }}
//                       placeholder="Enter detailed product description..."
//                     />
//                   </Box>
//                 </Grid>
//               </Grid>
//             </Paper>
//           </Grid>

//           {/* Pricing & Inventory */}
//           <Grid item xs={12} md={4}>
//             <Paper elevation={0} sx={{ p: 3, borderRadius: 2, bgcolor: 'background.default' }}>
//               <Typography variant="subtitle1" sx={{ mb: 3, fontWeight: 500 }}>
//                 Pricing & Inventory
//               </Typography>
              
//               <Grid container spacing={2}>
//                 <Grid item xs={12}>
//                   <Box sx={{ mb: 2 }}>
//                     <Typography variant="body2" sx={{ mb: 1, fontWeight: 500 }}>
//                       MRP Price
//                     </Typography>
//                     <Box
//                       component="input"
//                       id="mrpPrice"
//                       name="mrpPrice"
//                       type="number"
//                       onChange={formik.handleChange}
//                       value={formik.values.mrpPrice}
//                       sx={{
//                         width: '100%',
//                         p: '12px 16px',
//                         border: '1px solid',
//                         borderColor: 'divider',
//                         borderRadius: 1,
//                         fontSize: 14,
//                         '&:focus': {
//                           outline: 'none',
//                           borderColor: 'primary.main',
//                           boxShadow: '0 0 0 2px rgba(25, 118, 210, 0.2)'
//                         }
//                       }}
//                       placeholder="0.00"
//                     />
//                   </Box>
//                 </Grid>

//                 <Grid item xs={12}>
//                   <Box sx={{ mb: 2 }}>
//                     <Typography variant="body2" sx={{ mb: 1, fontWeight: 500 }}>
//                       Selling Price
//                     </Typography>
//                     <Box
//                       component="input"
//                       id="sellingPrice"
//                       name="sellingPrice"
//                       type="number"
//                       onChange={formik.handleChange}
//                       value={formik.values.sellingPrice}
//                       sx={{
//                         width: '100%',
//                         p: '12px 16px',
//                         border: '1px solid',
//                         borderColor: 'divider',
//                         borderRadius: 1,
//                         fontSize: 14,
//                         '&:focus': {
//                           outline: 'none',
//                           borderColor: 'primary.main',
//                           boxShadow: '0 0 0 2px rgba(25, 118, 210, 0.2)'
//                         }
//                       }}
//                       placeholder="0.00"
//                     />
//                   </Box>
//                 </Grid>

//                 <Grid item xs={12}>
//                   <Box sx={{ mb: 2 }}>
//                     <Typography variant="body2" sx={{ mb: 1, fontWeight: 500 }}>
//                       Quantity
//                     </Typography>
//                     <Box
//                       component="input"
//                       id="quantity"
//                       name="quantity"
//                       type="number"
//                       onChange={formik.handleChange}
//                       value={formik.values.quantity}
//                       sx={{
//                         width: '100%',
//                         p: '12px 16px',
//                         border: '1px solid',
//                         borderColor: 'divider',
//                         borderRadius: 1,
//                         fontSize: 14,
//                         '&:focus': {
//                           outline: 'none',
//                           borderColor: 'primary.main',
//                           boxShadow: '0 0 0 2px rgba(25, 118, 210, 0.2)'
//                         }
//                       }}
//                       placeholder="0"
//                     />
//                   </Box>
//                 </Grid>
//               </Grid>
//             </Paper>
//           </Grid>

//           {/* Categories */}
//           <Grid item xs={12}>
//             <Paper elevation={0} sx={{ p: 3, borderRadius: 2, bgcolor: 'background.default' }}>
//               <Typography variant="subtitle1" sx={{ mb: 3, fontWeight: 500 }}>
//                 Categories
//               </Typography>
              
//               <Grid container spacing={3}>
//                 <Grid item xs={12} md={4}>
//                   <Box sx={{ mb: 2 }}>
//                     <Typography variant="body2" sx={{ mb: 1, fontWeight: 500 }}>
//                       Main Category
//                     </Typography>
//                     <Box
//                       component="select"
//                       id="category"
//                       name="category"
//                       onChange={handleCategoryChange}
//                       value={formik.values.category}
//                       disabled={submissionState.loading}
//                       sx={{
//                         width: '100%',
//                         p: '12px 16px',
//                         border: '1px solid',
//                         borderColor: 'divider',
//                         borderRadius: 1,
//                         fontSize: 14,
//                         bgcolor: 'background.paper',
//                         '&:focus': {
//                           outline: 'none',
//                           borderColor: 'primary.main',
//                           boxShadow: '0 0 0 2px rgba(25, 118, 210, 0.2)'
//                         }
//                       }}
//                     >
//                       <option value="">Select category</option>
//                       <option value="men">Men</option>
//                       <option value="women">Women</option>
//                       <option value="home">Home & Furniture</option>
//                       <option value="electronics">Electronics</option>
//                     </Box>
//                   </Box>
//                 </Grid>

//                 <Grid item xs={12} md={4}>
//                   <Box sx={{ mb: 2 }}>
//                     <Typography variant="body2" sx={{ mb: 1, fontWeight: 500 }}>
//                       Sub Category
//                     </Typography>
//                     <Box
//                       component="select"
//                       id="category2"
//                       name="category2"
//                       onChange={handleSubCategoryChange}
//                       value={formik.values.category2}
//                       disabled={!formik.values.category || submissionState.loading}
//                       sx={{
//                         width: '100%',
//                         p: '12px 16px',
//                         border: '1px solid',
//                         borderColor: 'divider',
//                         borderRadius: 1,
//                         fontSize: 14,
//                         bgcolor: 'background.paper',
//                         '&:focus': {
//                           outline: 'none',
//                           borderColor: 'primary.main',
//                           boxShadow: '0 0 0 2px rgba(25, 118, 210, 0.2)'
//                         }
//                       }}
//                     >
//                       <option value="">Select sub-category</option>
//                       {getSubCategories().map((subCategory) => (
//                         <option key={subCategory.id} value={subCategory.id}>
//                           {subCategory.name}
//                         </option>
//                       ))}
//                     </Box>
//                   </Box>
//                 </Grid>

//                 <Grid item xs={12} md={4}>
//                   <Box sx={{ mb: 2 }}>
//                     <Typography variant="body2" sx={{ mb: 1, fontWeight: 500 }}>
//                       Product Type
//                     </Typography>
//                     <Box
//                       component="select"
//                       id="category3"
//                       name="category3"
//                       onChange={formik.handleChange}
//                       value={formik.values.category3}
//                       disabled={!formik.values.category2 || submissionState.loading}
//                       sx={{
//                         width: '100%',
//                         p: '12px 16px',
//                         border: '1px solid',
//                         borderColor: 'divider',
//                         borderRadius: 1,
//                         fontSize: 14,
//                         bgcolor: 'background.paper',
//                         '&:focus': {
//                           outline: 'none',
//                           borderColor: 'primary.main',
//                           boxShadow: '0 0 0 2px rgba(25, 118, 210, 0.2)'
//                         }
//                       }}
//                     >
//                       <option value="">Select product type</option>
//                       {getCategoryItems().map((item, index) => (
//                         <option key={index} value={item.toLowerCase().replace(/\s+/g, '-')}>
//                           {item}
//                         </option>
//                       ))}
//                     </Box>
//                   </Box>
//                 </Grid>
//               </Grid>
//             </Paper>
//           </Grid>

//           {/* Submit Button */}
//           <Grid item xs={12}>
//             <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
//               <Box
//                 component="button"
//                 type="submit"
//                 disabled={submissionState.loading || uploadingImage}
//                 sx={{
//                   px: 4,
//                   py: 1.5,
//                   bgcolor: 'primary.main',
//                   color: 'common.white',
//                   borderRadius: 1,
//                   border: 'none',
//                   fontSize: 14,
//                   fontWeight: 500,
//                   cursor: 'pointer',
//                   transition: 'all 0.2s',
//                   '&:hover': {
//                     bgcolor: 'primary.dark',
//                     boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)'
//                   },
//                   '&:disabled': {
//                     bgcolor: 'action.disabled',
//                     cursor: 'not-allowed'
//                   },
//                   display: 'flex',
//                   alignItems: 'center',
//                   gap: 1
//                 }}
//               >
//                 {submissionState.loading ? (
//                   <>
//                     <CircularProgress size={16} color="inherit" />
//                     Adding Product...
//                   </>
//                 ) : (
//                   'Add Product'
//                 )}
//               </Box>
//             </Box>
//           </Grid>
//         </Grid>
//       </form>
//     </Box>
//   );
// };

// export default Addproduct;

import { AddPhotoAlternate, Close } from '@mui/icons-material';
import { 
  CircularProgress, 
  Grid, 
  Typography, 
  Box, 
  IconButton, 
  Paper,
  Snackbar,
  Alert,
  Chip,
  TextField,
  Autocomplete
} from '@mui/material';
import { useFormik } from 'formik';
import React, { useState } from 'react';
import { useAppDispatch } from '../../../State/Store';
import { createProduct } from '../../../State/seller/sellerProductSlice';
import { uploadCloudinary } from '../../../utils/uploadcloudnary';

interface ProductFormValues {
  title: string;
  description: string;
  mrpPrice: string;
  sellingPrice: string;
  quantity: string;
  color: string;
  colors: string[];
  sizes: string[];
  images: string[];
  category: string;
  category2: string;
  category3: string;
  size: string;
}

// Define the category hierarchy
const categoryHierarchy = {
  men: {
    name: "Men",
    subcategories: {
      topwear: {
        name: "Topwear",
        items: [
          "T-Shirts",
          "Casual Shirts",
          "Formal Shirts",
          "Sweatshirts",
          "Jackets",
          "Blazers & Coats",
          "Suits",
          "Rain Jackets",
          "Traditional Wear"
        ]
      },
      bottomwear: {
        name: "Bottomwear",
        items: [
          "Jeans",
          "Trousers",
          "Track Pants & Joggers",
          "Shorts",
          "Innerwear & Sleepwear"
        ]
      },
      footwear: {
        name: "Footwear",
        items: [
          "Casual Shoes",
          "Sports Shoes",
          "Formal Shoes",
          "Sandals & Floaters",
          "Flip Flops",
          "Socks"
        ]
      },
      accessories: {
        name: "Fashion Accessories",
        items: [
          "Watches",
          "Wallets",
          "Belts",
          "Sunglasses",
          "Caps & Hats"
        ]
      },
      grooming: {
        name: "Personal Care & Grooming",
        items: [
          "Trimmers",
          "Shaving Kits",
          "Beard Oils",
          "Fragrances",
          "Deodorants"
        ]
      }
    }
  },
  women: {
    name: "Women",
    subcategories: {
      indianwear: {
        name: "Indian & Fusion Wear",
        items: [
          "Kurtas & Suits",
          "Sarees",
          "Ethnic Dresses",
          "Leggings, Salwars & Palazzos",
          "Blouses & Skirts",
          "Dupattas & Shawls"
        ]
      },
      westernwear: {
        name: "Western Wear",
        items: [
          "Tops & T-Shirts",
          "Dresses",
          "Jeans",
          "Shorts & Skirts",
          "Jumpsuits & Co-ords",
          "Jackets & Shrugs"
        ]
      },
      lingerie: {
        name: "Lingerie & Sleepwear",
        items: [
          "Bras",
          "Panties",
          "Nightwear",
          "Shapewear"
        ]
      },
      footwear: {
        name: "Footwear",
        items: [
          "Heels",
          "Flats",
          "Sneakers",
          "Boots"
        ]
      },
      beauty: {
        name: "Beauty & Grooming",
        items: [
          "Makeup",
          "Skincare",
          "Haircare",
          "Fragrances"
        ]
      },
      jewelry: {
        name: "Jewellery & Accessories",
        items: [
          "Earrings",
          "Necklaces, Rings, Bangles",
          "Handbags",
          "Clutches",
          "Hair Accessories",
          "Sunglasses"
        ]
      }
    }
  },
  electronics: {
    name: "Electronics",
    subcategories: {
      mobiles: {
        name: "Mobiles & Accessories",
        items: [
          "Smartphones",
          "Mobile Cases",
          "Power Banks",
          "Chargers & Cables"
        ]
      },
      laptops: {
        name: "Laptops & Computers",
        items: [
          "Laptops",
          "Desktops & Monitors",
          "Keyboards & Mice",
          "Storage Devices"
        ]
      },
      appliances: {
        name: "Home Appliances",
        items: [
          "Televisions",
          "Refrigerators",
          "Washing Machines",
          "Air Conditioners",
          "Microwave Ovens"
        ]
      },
      audio: {
        name: "Audio & Wearables",
        items: [
          "Headphones",
          "Bluetooth Speakers",
          "Soundbars",
          "Smartwatches",
          "Fitness Bands"
        ]
      },
      cameras: {
        name: "Cameras & Gaming",
        items: [
          "Cameras",
          "Gaming Consoles",
          "Controllers & Joysticks",
          "Games"
        ]
      }
    }
  },
  home: {
    name: "Home & Furniture",
    subcategories: {
      furniture: {
        name: "Furniture",
        items: [
          "Beds",
          "Sofas",
          "Dining Tables",
          "Wardrobes",
          "TV Units",
          "Office Chairs & Tables"
        ]
      },
      decor: {
        name: "Home Decor",
        items: [
          "Wall Art",
          "Clocks & Lamps",
          "Showpieces",
          "Artificial Plants & Flowers"
        ]
      },
      kitchen: {
        name: "Kitchen & Dining",
        items: [
          "Cookware",
          "Dinner Sets",
          "Storage & Containers",
          "Kitchen Tools",
          "Tableware"
        ]
      },
      furnishings: {
        name: "Furnishings",
        items: [
          "Curtains",
          "Bed Sheets",
          "Quilts & Blankets",
          "Cushions & Covers",
          "Rugs & Carpets"
        ]
      },
      improvement: {
        name: "Home Improvement",
        items: [
          "Lighting",
          "Bathroom Accessories",
          "Cleaning Essentials",
          "DIY Tools"
        ]
      }
    }
  }
};

// Common sizes for different categories
const sizeOptions = {
  clothing: ['XS', 'S', 'M', 'L', 'XL', 'XXL', 'XXXL'],
  shoes: ['6', '7', '8', '9', '10', '11', '12', '13'],
  electronics: ['Standard'],
  home: ['Single', 'Double', 'Queen', 'King']
};

// Common color options
const colorOptions = [
  'Black', 'White', 'Red', 'Blue', 'Green', 'Yellow', 
  'Pink', 'Purple', 'Orange', 'Gray', 'Brown', 'Beige',
  'Navy', 'Maroon', 'Teal', 'Gold', 'Silver'
];

const Addproduct = () => {
  const [uploadingImage, setUploadingImage] = useState(false);
  const [submissionState, setSubmissionState] = useState({
    loading: false,
    success: false,
    error: false,
    message: ''
  });
  const dispatch = useAppDispatch();
  
  const formik = useFormik<ProductFormValues>({
    initialValues: {
      title: "",
      description: "",
      mrpPrice: "",
      sellingPrice: "",
      quantity: "",
      color: "",
      colors: [],
      sizes: [],
      images: [],
      category: "",
      category2: "",
      category3: "",
      size: "",
    },
    onSubmit: async (values) => {
      try {
        setSubmissionState({
          loading: true,
          success: false,
          error: false,
          message: 'Adding product...'
        });
        
        await dispatch(createProduct({
          request: values,
          jwt: localStorage.getItem("jwt") || ""
        })).unwrap();
        
        setSubmissionState({
          loading: false,
          success: true,
          error: false,
          message: 'Product added successfully!'
        });
        
        // Reset form after successful submission
        formik.resetForm();
      } catch (error) {
        setSubmissionState({
          loading: false,
          success: false,
          error: true,
          message: 'Failed to add product. Please try again.'
        });
        console.error('Error submitting form:', error);
      }
    }
  });

  // Handle category change and reset subcategories
  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    formik.handleChange(e);
    formik.setFieldValue("category2", "");
    formik.setFieldValue("category3", "");
    formik.setFieldValue("sizes", []); // Reset sizes when category changes
  };

  // Handle subcategory change and reset items
  const handleSubCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    formik.handleChange(e);
    formik.setFieldValue("category3", "");
  };

  const handleImageChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (!files || files.length === 0) return;
    
    const file = files[0];
    setUploadingImage(true);
    
    try {
      const image = await uploadCloudinary(file);
      formik.setFieldValue("images", [...formik.values.images, image]);
    } catch (error) {
      console.error('Error uploading image:', error);
    } finally {
      setUploadingImage(false);
    }
  };

  const handleRemoveImage = (index: number) => {
    const updatedImages = [...formik.values.images];
    updatedImages.splice(index, 1);
    formik.setFieldValue("images", updatedImages);
  };

  const handleCloseSnackbar = () => {
    setSubmissionState(prev => ({ ...prev, success: false, error: false }));
  };

  // Get available subcategories based on main category selection
  const getSubCategories = () => {
    if (!formik.values.category) return [];
    const mainCategory = categoryHierarchy[formik.values.category as keyof typeof categoryHierarchy];
    if (!mainCategory) return [];
    
    return Object.entries(mainCategory.subcategories).map(([key, value]) => ({
      id: key,
      name: value.name
    }));
  };

  // Get available items based on subcategory selection
  const getCategoryItems = () => {
    if (!formik.values.category || !formik.values.category2) return [];
    const mainCategory = categoryHierarchy[formik.values.category as keyof typeof categoryHierarchy];
    if (!mainCategory) return [];
    
    const subCategory = mainCategory.subcategories[formik.values.category2 as keyof typeof mainCategory.subcategories];
    if (!subCategory) return [];
    
    return subCategory.items;
  };

  // Get available sizes based on category
  const getSizeOptions = () => {
    if (!formik.values.category) return [];
    
    if (formik.values.category === 'men' || formik.values.category === 'women') {
      if (formik.values.category2 === 'footwear') {
        return sizeOptions.shoes;
      }
      return sizeOptions.clothing;
    } else if (formik.values.category === 'home') {
      return sizeOptions.home;
    }
    return sizeOptions.electronics;
  };

  // Handle adding a color
  const handleAddColor = () => {
    if (formik.values.color && !formik.values.colors.includes(formik.values.color)) {
      formik.setFieldValue("colors", [...formik.values.colors, formik.values.color]);
      formik.setFieldValue("color", "");
    }
  };

  // Handle removing a color
  const handleRemoveColor = (colorToRemove: string) => {
    formik.setFieldValue(
      "colors",
      formik.values.colors.filter(color => color !== colorToRemove)
    );
  };

  return (
    <Box sx={{
      p: 4,
      maxWidth: 1200,
      mx: 'auto',
      bgcolor: 'background.paper',
      borderRadius: 2,
      boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.05)'
    }}>
      <Typography variant="h5" component="h1" sx={{ 
        mb: 4,
        fontWeight: 600,
        color: 'text.primary'
      }}>
        Add New Product
      </Typography>
      
      <Snackbar
        open={submissionState.success || submissionState.error}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity={submissionState.success ? 'success' : 'error'}
          sx={{ width: '100%' }}
        >
          {submissionState.message}
        </Alert>
      </Snackbar>
      
      <form onSubmit={formik.handleSubmit}>
        <Grid container spacing={4}>
          {/* Image Upload Section */}
          <Grid item xs={12}>
            <Paper elevation={0} sx={{ 
              p: 3,
              borderRadius: 2,
              border: '1px dashed',
              borderColor: 'divider',
              bgcolor: 'background.default'
            }}>
              <Typography variant="subtitle1" sx={{ mb: 2, fontWeight: 500 }}>
                Product Images
              </Typography>
              
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
                <input
                  type='file'
                  accept='image/*'
                  id='fileInput'
                  style={{ display: "none" }}
                  onChange={handleImageChange}
                  disabled={uploadingImage || submissionState.loading}
                />

                <label htmlFor='fileInput'>
                  <Box sx={{
                    width: 120,
                    height: 120,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    bgcolor: 'action.hover',
                    borderRadius: 1,
                    cursor: 'pointer',
                    transition: 'all 0.2s',
                    '&:hover': {
                      bgcolor: 'action.selected',
                    },
                    position: 'relative',
                    overflow: 'hidden'
                  }}>
                    {uploadingImage ? (
                      <CircularProgress size={24} />
                    ) : (
                      <>
                        <AddPhotoAlternate sx={{ fontSize: 32, color: 'text.secondary', mb: 0.5 }} />
                        <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                          Add Image
                        </Typography>
                      </>
                    )}
                  </Box>
                </label>

                {formik.values.images.map((img, index) => (
                  <Box key={index} sx={{
                    position: 'relative',
                    width: 120,
                    height: 120,
                    borderRadius: 1,
                    overflow: 'hidden',
                    '&:hover .remove-btn': {
                      opacity: 1
                    }
                  }}>
                    <Box
                      component="img"
                      src={img}
                      alt={`product-${index}`}
                      sx={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        transition: 'transform 0.3s',
                        '&:hover': {
                          transform: 'scale(1.05)'
                        }
                      }}
                    />
                    <IconButton
                      className="remove-btn"
                      onClick={() => handleRemoveImage(index)}
                      sx={{
                        position: 'absolute',
                        top: 4,
                        right: 4,
                        bgcolor: 'error.main',
                        color: 'common.white',
                        p: 0.5,
                        opacity: 0,
                        transition: 'opacity 0.2s',
                        '&:hover': {
                          bgcolor: 'error.dark'
                        }
                      }}
                    >
                      <Close sx={{ fontSize: 16 }} />
                    </IconButton>
                  </Box>
                ))}
              </Box>
            </Paper>
          </Grid>

          {/* Product Details */}
          <Grid item xs={12} md={8}>
            <Paper elevation={0} sx={{ p: 3, borderRadius: 2, bgcolor: 'background.default' }}>
              <Typography variant="subtitle1" sx={{ mb: 3, fontWeight: 500 }}>
                Product Information
              </Typography>
              
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <Box sx={{ mb: 2 }}>
                    <Typography variant="body2" sx={{ mb: 1, fontWeight: 500 }}>
                      Product Title
                    </Typography>
                    <Box
                      component="input"
                      id="title"
                      name="title"
                      type="text"
                      onChange={formik.handleChange}
                      value={formik.values.title}
                      sx={{
                        width: '100%',
                        p: '12px 16px',
                        border: '1px solid',
                        borderColor: 'divider',
                        borderRadius: 1,
                        fontSize: 14,
                        '&:focus': {
                          outline: 'none',
                          borderColor: 'primary.main',
                          boxShadow: '0 0 0 2px rgba(25, 118, 210, 0.2)'
                        }
                      }}
                      placeholder="e.g. Premium Cotton T-Shirt"
                    />
                  </Box>
                </Grid>

                <Grid item xs={12}>
                  <Box sx={{ mb: 2 }}>
                    <Typography variant="body2" sx={{ mb: 1, fontWeight: 500 }}>
                      Description
                    </Typography>
                    <Box
                      component="textarea"
                      id="description"
                      name="description"
                      onChange={formik.handleChange}
                      value={formik.values.description}
                      rows={5}
                      sx={{
                        width: '100%',
                        p: '12px 16px',
                        border: '1px solid',
                        borderColor: 'divider',
                        borderRadius: 1,
                        fontSize: 14,
                        resize: 'vertical',
                        minHeight: 100,
                        '&:focus': {
                          outline: 'none',
                          borderColor: 'primary.main',
                          boxShadow: '0 0 0 2px rgba(25, 118, 210, 0.2)'
                        }
                      }}
                      placeholder="Enter detailed product description..."
                    />
                  </Box>
                </Grid>
              </Grid>
            </Paper>
          </Grid>

          {/* Pricing & Inventory */}
          <Grid item xs={12} md={4}>
            <Paper elevation={0} sx={{ p: 3, borderRadius: 2, bgcolor: 'background.default' }}>
              <Typography variant="subtitle1" sx={{ mb: 3, fontWeight: 500 }}>
                Pricing & Inventory
              </Typography>
              
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Box sx={{ mb: 2 }}>
                    <Typography variant="body2" sx={{ mb: 1, fontWeight: 500 }}>
                      MRP Price
                    </Typography>
                    <Box
                      component="input"
                      id="mrpPrice"
                      name="mrpPrice"
                      type="number"
                      onChange={formik.handleChange}
                      value={formik.values.mrpPrice}
                      sx={{
                        width: '100%',
                        p: '12px 16px',
                        border: '1px solid',
                        borderColor: 'divider',
                        borderRadius: 1,
                        fontSize: 14,
                        '&:focus': {
                          outline: 'none',
                          borderColor: 'primary.main',
                          boxShadow: '0 0 0 2px rgba(25, 118, 210, 0.2)'
                        }
                      }}
                      placeholder="0.00"
                    />
                  </Box>
                </Grid>

                <Grid item xs={12}>
                  <Box sx={{ mb: 2 }}>
                    <Typography variant="body2" sx={{ mb: 1, fontWeight: 500 }}>
                      Selling Price
                    </Typography>
                    <Box
                      component="input"
                      id="sellingPrice"
                      name="sellingPrice"
                      type="number"
                      onChange={formik.handleChange}
                      value={formik.values.sellingPrice}
                      sx={{
                        width: '100%',
                        p: '12px 16px',
                        border: '1px solid',
                        borderColor: 'divider',
                        borderRadius: 1,
                        fontSize: 14,
                        '&:focus': {
                          outline: 'none',
                          borderColor: 'primary.main',
                          boxShadow: '0 0 0 2px rgba(25, 118, 210, 0.2)'
                        }
                      }}
                      placeholder="0.00"
                    />
                  </Box>
                </Grid>

                <Grid item xs={12}>
                  <Box sx={{ mb: 2 }}>
                    <Typography variant="body2" sx={{ mb: 1, fontWeight: 500 }}>
                      Quantity
                    </Typography>
                    <Box
                      component="input"
                      id="quantity"
                      name="quantity"
                      type="number"
                      onChange={formik.handleChange}
                      value={formik.values.quantity}
                      sx={{
                        width: '100%',
                        p: '12px 16px',
                        border: '1px solid',
                        borderColor: 'divider',
                        borderRadius: 1,
                        fontSize: 14,
                        '&:focus': {
                          outline: 'none',
                          borderColor: 'primary.main',
                          boxShadow: '0 0 0 2px rgba(25, 118, 210, 0.2)'
                        }
                      }}
                      placeholder="0"
                    />
                  </Box>
                </Grid>
              </Grid>
            </Paper>
          </Grid>

          {/* Colors & Sizes */}
          <Grid item xs={12}>
            <Paper elevation={0} sx={{ p: 3, borderRadius: 2, bgcolor: 'background.default' }}>
              <Typography variant="subtitle1" sx={{ mb: 3, fontWeight: 500 }}>
                Colors & Sizes
              </Typography>
              
              <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                  <Box sx={{ mb: 2 }}>
                    <Typography variant="body2" sx={{ mb: 1, fontWeight: 500 }}>
                      Available Colors
                    </Typography>
                    <Box sx={{ display: 'flex', gap: 1, mb: 1 }}>
                      <Autocomplete
                        freeSolo
                        options={colorOptions}
                        value={formik.values.color}
                        onChange={(event, newValue) => {
                          formik.setFieldValue("color", newValue || "");
                        }}
                        inputValue={formik.values.color}
                        onInputChange={(event, newInputValue) => {
                          formik.setFieldValue("color", newInputValue);
                        }}
                        renderInput={(params) => (
                          <TextField
                            {...params}
                            placeholder="Add color"
                            size="small"
                            sx={{ flex: 1 }}
                          />
                        )}
                      />
                      <Box
                        component="button"
                        type="button"
                        onClick={handleAddColor}
                        disabled={!formik.values.color}
                        sx={{
                          px: 2,
                          py: 1,
                          bgcolor: 'primary.main',
                          color: 'common.white',
                          borderRadius: 1,
                          border: 'none',
                          fontSize: 14,
                          fontWeight: 500,
                          cursor: 'pointer',
                          transition: 'all 0.2s',
                          '&:hover': {
                            bgcolor: 'primary.dark'
                          },
                          '&:disabled': {
                            bgcolor: 'action.disabled',
                            cursor: 'not-allowed'
                          }
                        }}
                      >
                        Add
                      </Box>
                    </Box>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                      {formik.values.colors.map((color) => (
                        <Chip
                          key={color}
                          label={color}
                          onDelete={() => handleRemoveColor(color)}
                          sx={{
                            backgroundColor: color.toLowerCase(),
                            color: ['white', 'black', 'red', 'blue', 'green'].includes(color.toLowerCase()) 
                              ? 'white' 
                              : 'black',
                            '& .MuiChip-deleteIcon': {
                              color: ['white', 'black', 'red', 'blue', 'green'].includes(color.toLowerCase()) 
                                ? 'rgba(255, 255, 255, 0.7)' 
                                : 'rgba(0, 0, 0, 0.7)',
                              '&:hover': {
                                color: ['white', 'black', 'red', 'blue', 'green'].includes(color.toLowerCase()) 
                                  ? 'white' 
                                  : 'black'
                              }
                            }
                          }}
                        />
                      ))}
                    </Box>
                  </Box>
                </Grid>

                <Grid item xs={12} md={6}>
                  <Box sx={{ mb: 2 }}>
                    <Typography variant="body2" sx={{ mb: 1, fontWeight: 500 }}>
                      Available Sizes
                    </Typography>
                    <Autocomplete
                      multiple
                      options={getSizeOptions()}
                      value={formik.values.sizes}
                      onChange={(event, newValue) => {
                        formik.setFieldValue("sizes", newValue);
                      }}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          placeholder="Select sizes"
                          size="small"
                        />
                      )}
                      renderTags={(value, getTagProps) =>
                        value.map((option, index) => (
                          <Chip
                            label={option}
                            {...getTagProps({ index })}
                            sx={{
                              backgroundColor: 'primary.light',
                              color: 'primary.contrastText'
                            }}
                          />
                        ))
                      }
                    />
                  </Box>
                </Grid>
              </Grid>
            </Paper>
          </Grid>

          {/* Categories */}
          <Grid item xs={12}>
            <Paper elevation={0} sx={{ p: 3, borderRadius: 2, bgcolor: 'background.default' }}>
              <Typography variant="subtitle1" sx={{ mb: 3, fontWeight: 500 }}>
                Categories
              </Typography>
              
              <Grid container spacing={3}>
                <Grid item xs={12} md={4}>
                  <Box sx={{ mb: 2 }}>
                    <Typography variant="body2" sx={{ mb: 1, fontWeight: 500 }}>
                      Main Category
                    </Typography>
                    <Box
                      component="select"
                      id="category"
                      name="category"
                      onChange={handleCategoryChange}
                      value={formik.values.category}
                      disabled={submissionState.loading}
                      sx={{
                        width: '100%',
                        p: '12px 16px',
                        border: '1px solid',
                        borderColor: 'divider',
                        borderRadius: 1,
                        fontSize: 14,
                        bgcolor: 'background.paper',
                        '&:focus': {
                          outline: 'none',
                          borderColor: 'primary.main',
                          boxShadow: '0 0 0 2px rgba(25, 118, 210, 0.2)'
                        }
                      }}
                    >
                      <option value="">Select category</option>
                      <option value="men">Men</option>
                      <option value="women">Women</option>
                      <option value="home">Home & Furniture</option>
                      <option value="electronics">Electronics</option>
                    </Box>
                  </Box>
                </Grid>

                <Grid item xs={12} md={4}>
                  <Box sx={{ mb: 2 }}>
                    <Typography variant="body2" sx={{ mb: 1, fontWeight: 500 }}>
                      Sub Category
                    </Typography>
                    <Box
                      component="select"
                      id="category2"
                      name="category2"
                      onChange={handleSubCategoryChange}
                      value={formik.values.category2}
                      disabled={!formik.values.category || submissionState.loading}
                      sx={{
                        width: '100%',
                        p: '12px 16px',
                        border: '1px solid',
                        borderColor: 'divider',
                        borderRadius: 1,
                        fontSize: 14,
                        bgcolor: 'background.paper',
                        '&:focus': {
                          outline: 'none',
                          borderColor: 'primary.main',
                          boxShadow: '0 0 0 2px rgba(25, 118, 210, 0.2)'
                        }
                      }}
                    >
                      <option value="">Select sub-category</option>
                      {getSubCategories().map((subCategory) => (
                        <option key={subCategory.id} value={subCategory.id}>
                          {subCategory.name}
                        </option>
                      ))}
                    </Box>
                  </Box>
                </Grid>

                <Grid item xs={12} md={4}>
                  <Box sx={{ mb: 2 }}>
                    <Typography variant="body2" sx={{ mb: 1, fontWeight: 500 }}>
                      Product Type
                    </Typography>
                    <Box
                      component="select"
                      id="category3"
                      name="category3"
                      onChange={formik.handleChange}
                      value={formik.values.category3}
                      disabled={!formik.values.category2 || submissionState.loading}
                      sx={{
                        width: '100%',
                        p: '12px 16px',
                        border: '1px solid',
                        borderColor: 'divider',
                        borderRadius: 1,
                        fontSize: 14,
                        bgcolor: 'background.paper',
                        '&:focus': {
                          outline: 'none',
                          borderColor: 'primary.main',
                          boxShadow: '0 0 0 2px rgba(25, 118, 210, 0.2)'
                        }
                      }}
                    >
                      <option value="">Select product type</option>
                      {getCategoryItems().map((item, index) => (
                        <option key={index} value={item.toLowerCase().replace(/\s+/g, '-')}>
                          {item}
                        </option>
                      ))}
                    </Box>
                  </Box>
                </Grid>
              </Grid>
            </Paper>
          </Grid>

          {/* Submit Button */}
          <Grid item xs={12}>
            <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
              <Box
                component="button"
                type="submit"
                disabled={submissionState.loading || uploadingImage}
                sx={{
                  px: 4,
                  py: 1.5,
                  bgcolor: 'primary.main',
                  color: 'common.white',
                  borderRadius: 1,
                  border: 'none',
                  fontSize: 14,
                  fontWeight: 500,
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                  '&:hover': {
                    bgcolor: 'primary.dark',
                    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)'
                  },
                  '&:disabled': {
                    bgcolor: 'action.disabled',
                    cursor: 'not-allowed'
                  },
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1
                }}
              >
                {submissionState.loading ? (
                  <>
                    <CircularProgress size={16} color="inherit" />
                    Adding Product...
                  </>
                ) : (
                  'Add Product'
                )}
              </Box>
            </Box>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
};

export default Addproduct;