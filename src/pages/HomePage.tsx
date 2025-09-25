/* eslint-disable @typescript-eslint/no-empty-object-type */
import { Component } from 'react';

interface IProps{

}



class HomePage extends Component<IProps> {
    render() {
        return (
            <div>
                <h5 className='text-2xl'>Home Page</h5>
            </div>
        );
    }
}

export default HomePage;
