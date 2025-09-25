import { Component } from 'react';

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface IProps{

}

interface IState{
    products:[];
}

class Products extends Component<IProps, IState> {
    constructor(props:IProps){
        super(props);
        this.state = {
            products: []
        }
        console.log("%cMounting-constructor() -#1", "background-color:yellow; color:black; padding:10px;" );
    }
    
    componentDidMount(): void {
        
        console.log("%componentDidMount() -#3", "background-color:navy; color:white; padding:10px;" );
        fetch('https://dummyjson.com/products')
        .then(res => res.json())
        .then(data =>  this.setState({products: data.products}));
        
    }
    
    componentDidUpdate(): void {
        console.log("%componentDidUpdate() -#4", "background-color:white; color:black; padding:10px;" );
    }   
    componentWillUnmount(): void {
        console.log("%componentWillUnmount() -#5", "background-color:green; color:white; padding:10px;" );
    }   
    render() {
        console.log("%cRendering-render() | re-render -#2", "background-color:teal; padding:10px;" );
        return (
            <div>
                <h5 className='text-2xl'>Products Page</h5>
                    {
                        this.state.products.map((product:{id:number ,title:string} , idx) => {
                            return(
                                <h6 key={idx}>{product.title}</h6>
                            )
                        })
                    }
            </div>
        );
    }
}

export default Products;
