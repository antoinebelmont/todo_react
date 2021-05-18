import React from 'react'
import MyComponent from './MyComponent';
import ServiceContext from "./utils/serviceContext";
const services = {};
class MyService {
    getData() {
        return Promise.resolve('Some data')
    }
} services.myService = new MyService();

export default function Detail() {
    return (
        <div>
            <ServiceContext.Provider value={services}>
                <MyComponent/>
            </ServiceContext.Provider>
        </div>
    )
}
