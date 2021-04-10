export default function Test() {
  return <h1>test</h1>;
}

// import { useEffect, useState } from "react";
// import { GetStaticPaths, GetStaticProps } from "next";
// import { useRouter } from "next/router";

// import Layout from "@/components/Layout";
// import SEO from "@/components/SEO";
// import Button from "@/components/Button";
// import LoadingPage from "@/components/LoadingPage";

// import { useRecoilState, useRecoilValue } from "recoil";
// import { cartState } from "@/atoms";

// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// import {
//   Container,
//   PhotoContainer,
//   MiniPhotoContainer,
//   InfoContainer,
//   SizeBox,
//   SaleContainer,
// } from "@/styles/pages/Products";
// import Colors from "@/styles/Colors";
// import Carroussel from "@/components/Carroussel";
// import Accordion from "@/components/Accordion";
// import { db } from "@/config/firebase";

// interface ProductProps {
//   id: number;
//   title: string;
//   cover_photo: string;
//   photos: string[];
//   brand: string;
//   price: string;
//   sale_price: string;
//   sizes: string[];
//   category_id: string;
//   slug: string;
//   quantity: number;
//   description: string;
// }

// const Product = ({
//   id,
//   title,
//   category_id,
//   sizes,
//   brand,
//   cover_photo,
//   photos,
//   price,
//   sale_price,
//   slug,
//   quantity,
//   description,
// }: ProductProps) => {
//   const router = useRouter();

//   const [selected, setSelected] = useState(1);
//   const [photo, setPhoto] = useState(cover_photo);
//   const [errorMessage, setErrorMessage] = useState("");
//   const [selectedSize, setSelectedSize] = useState("");
//   const [hasError, setHasError] = useState(false);

//   const [cart, setCart] = useRecoilState(cartState);

//   if (router.isFallback) {
//     return <LoadingPage />;
//   }

//   const notify = (value) =>
//     toast.success(value, {
//       position: "top-right",
//       autoClose: 5000,
//       hideProgressBar: false,
//       closeOnClick: true,
//       pauseOnHover: true,
//       draggable: true,
//       progress: undefined,
//     });

//   const checkQuantity = (value) => {
//     if (value > quantity) {
//       return false;
//     }
//     return true;
//   };

//   const updateValue = () => {
//     const copy = [...cart];
//     let index;
//     let copyItem;

//     copy.forEach((item, i) => {
//       if (item.id === id) {
//         index = i;
//         copyItem = item;
//       }
//     });

//     if (!checkQuantity(copyItem.quantity + 1)) {
//       setHasError(true);
//       setErrorMessage("VOCÊ JÁ ADICIONOU TODO NOSSO ESTOQUE EM SEU CARRINHO");
//       return;
//     }

//     copyItem = { ...copyItem, quantity: copyItem.quantity + 1 };

//     copy.splice(index, 1);

//     copy.splice(index, 0, copyItem);

//     setCart(copy);

//     localStorage.setItem("cart", JSON.stringify(copy));

//     notify("Produto atualizado no carrinho!");
//   };

//   const handleBuy = () => {
//     if (!selectedSize || selectedSize === "") {
//       setHasError(true);
//       setErrorMessage("POR FAVOR, SELECIONE UM TAMANHO.");
//       return;
//     }
//     let existsInCart = false;
//     let currentQuantity = 1;

//     cart.map((item) => {
//       if (item.id === id) {
//         updateValue();

//         existsInCart = true;
//       }
//     });

//     if (!existsInCart) {
//       const copy = [
//         ...cart,
//         {
//           id,
//           title,
//           price: sale_price || price,
//           cover_photo,
//           quantity: currentQuantity,
//           size: selectedSize,
//           maxQuantity: quantity,
//         },
//       ];
//       setCart(copy);
//       localStorage.setItem("cart", JSON.stringify(copy));
//       notify("Produto adicionado ao carrinho!");
//     }
//   };

//   const setAttributes = (value) => {
//     setSelected(value);
//     if (value > 0) {
//       setPhoto(value === 1 ? cover_photo : photos[value - 2]);
//     }
//   };

//   const setSize = (value) => {
//     setSelectedSize(value.toUpperCase());
//     setHasError(false);
//   };

//   return (
//     <Layout>
//       <SEO title={title} />
//       <ToastContainer />
//       <Container>
//         <div>
//           <PhotoContainer>
//             <span>
//               <img src={photo || cover_photo} alt="foto de capa" />
//             </span>

//             <div>
//               <MiniPhotoContainer
//                 onClick={() => {
//                   setAttributes(1);
//                 }}
//                 selected={selected}
//               >
//                 <img src={cover_photo} alt="foto de capa" />
//               </MiniPhotoContainer>
//               {photos.length > 0 &&
//                 photos.map((photo, index) => (
//                   <MiniPhotoContainer
//                     key={index}
//                     onClick={() => {
//                       setAttributes(index + 2);
//                     }}
//                     selected={selected}
//                   >
//                     <img src={photo} alt={`${title} foto ${index}`} />
//                   </MiniPhotoContainer>
//                 ))}
//             </div>
//           </PhotoContainer>
//           <div>
//             <InfoContainer>
//               <p>{brand}</p>
//               <strong>{title.toUpperCase()}</strong>
//               <SaleContainer hasSale={sale_price !== ""}>
//                 <strong>R$ {price}</strong>
//                 <span>R$ {sale_price}</span>
//               </SaleContainer>

//               <span>Tamanho: {selectedSize && <b>{selectedSize}</b>}</span>
//               <div>
//                 {sizes.map((size, index) => (
//                   <SizeBox
//                     key={index}
//                     onClick={() => setSize(size.toUpperCase())}
//                     isSelected={selectedSize === size.toUpperCase()}
//                   >
//                     {size.toUpperCase()}
//                   </SizeBox>
//                 ))}
//               </div>
//               <label>PEÇAS RESTANTES: {quantity}</label>
//             </InfoContainer>
//             {hasError && <span>{errorMessage}</span>}
//             <Button title="COMPRAR" color={Colors.blue_01} action={handleBuy} />
//           </div>
//         </div>
//         <Accordion title="DETALHES" content={description} />
//         <Carroussel category={category_id} title="PRODUTOS SIMILARES" />
//       </Container>
//     </Layout>
//   );
// };

// export default Product;

// export const getStaticPaths: GetStaticPaths = async () => {
//   return {
//     paths: [],
//     fallback: true,
//   };
// };

// export const getStaticProps: GetStaticProps<ProductProps> = async (context) => {
//   const { slug } = context.params;

//   let data = [];
//   let error = {};

//   await db
//     .collection("Products")
//     .where("slug", "==", slug)
//     .get()
//     .then((querySnapshot) => {
//       querySnapshot.forEach((doc) => {
//         data.push(doc.data());
//       });
//     })
//     .catch((e) => (error = e));

//   const products: ProductProps = data[0];

//   return {
//     props: {
//       id: products.id,
//       title: products.title,
//       cover_photo: products.cover_photo,
//       photos: products.photos,
//       brand: products.brand,
//       price: products.price,
//       sale_price: products.sale_price,
//       sizes: products.sizes,
//       category_id: products.category_id,
//       slug: products.slug,
//       quantity: products.quantity,
//       description: products.description,
//     },
//     revalidate: 60,
//   };
// };
