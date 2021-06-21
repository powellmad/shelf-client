// import React, { useContext, useEffect, useState } from "react";
// // import { useForm } from "react-hook-form";
// import { CategoryContext } from "../categories/CategoryProvider";

// export const ShopForm = () => {
//     const { getCategories } = useContext(CategoryContext)
//     const [ categories, setCategories ] = useState({})
//     // const { register, handleSubmit, watch, formState: { errors } } = useForm();

//     useEffect(() => {
//         getCategories()
//         .then(setCategories)
//     }, [])

//     console.log(categories)

//     const onSubmit = (data) => {
//         alert(JSON.stringify(data));
//       };  

//     return (
//         /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
//         <form onSubmit={handleSubmit(onSubmit)}>

//             <label>Shop Name</label>
//             <input {...register("shopName", { required: true, maxLength: 50 },)} />
//             {/* <select {...register("category")}>
//                 {categories.map(() => <option value="{categories.label}">{categories.label}</option>)}
//             </select> */}

//             {errors.exampleRequired && <span>This field is required</span>}
//             <input type="submit" />
//         </form>
//     )
// }