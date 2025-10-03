import { useEffect, useState } from "react";
// اتعلمنا ان الـ Use Effect ده بديل لـ الـ Component Life Cicyle أللي كانت بتحصل في الـ Class 
// لكن هنا انت بتستخدم الـ Use Effect عشان تسبتدلهم وتخلي  كل حاجه تمام
// والـ الـ Dependency List هي لو سبتها فاضيه فهي بتشغل الـ Array لما تبقى Mount بس أول مرة 
// ولو شلتها هتعمل DidUpdate كل تحديث 
// ولو كتبت فيها قيمة معينة او State معينة هتحصل فيها DidUpdate لو عملت تحديث على الـ State دي بس 

// ولو مش عاوز حاجه تسمع بحطها في Use Effect تانية زي الـ API مثلًا

const HooksPage = () => {
    const [products, setproducts] = useState([]);
    
    useEffect(() => {
        const controller = new AbortController
        const signal = controller.signal
        console.log("from useEffect Hook <3");
        const fetchProducts = async() =>{
            try{
                // بفرق بين الـ ريكويستيت وبعدها بـ الـ سيجنال
       await fetch('https://dummyjson.com/products' , {signal})
        .then(res => res.json())
        .then(data => setproducts(data.products));
            } catch(erorr){
                console.log(erorr);
                console.log("Just Error");
            }
        }

        fetchProducts();

        return() => {
            controller.abort()
        }
    } ,[])
    return (
        <div>
            <h2>UseEffect Hook</h2>
{products.length
  ? products.map((product: { id: number; title: string }) => (
      <p key={product.id}>{product.title}</p>
    ))
  : null}
        </div>
    );
}

export default HooksPage;