import { useEffect, useState } from "react";
// اتعلمنا ان الـ Use Effect ده بديل لـ الـ Component Life Cicyle أللي كانت بتحصل في الـ Class 
// لكن هنا انت بتستخدم الـ Use Effect عشان تسبتدلهم وتخلي  كل حاجه تمام
// والـ الـ Dependency List هي لو سبتها فاضيه فهي بتشغل الـ Array لما تبقى Mount بس أول مرة 
// ولو شلتها هتعمل DidUpdate كل تحديث 
// ولو كتبت فيها قيمة معينة او State معينة هتحصل فيها DidUpdate لو عملت تحديث على الـ State دي بس 

// ولو مش عاوز حاجه تسمع بحطها في Use Effect تانية زي الـ API مثلًا

const HooksPage = () => {
    const [counter, setcounter] = useState(0);
    useEffect(() => {
        console.log("from useEffect Hook <3");
    } ,[])
    return (
        <div>
            <h2>Counter: {counter}</h2>
            <button onClick={() => setcounter(prev => prev + 1)}>Icrease Count</button>
        </div>
    );
}

export default HooksPage;