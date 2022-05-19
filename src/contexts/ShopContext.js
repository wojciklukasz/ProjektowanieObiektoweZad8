import React, {useEffect, useState} from "react";
import {fetchServices} from "../api/services";
import useOrder from "../hooks/useOrder";

const defaultValue = {
    services: [],
    order: [],
    addService: () => { return null },
    removeService: () => { return null },
    total: Number
};

export const ShopContext = React.createContext(defaultValue);

export const ShopContextProvider = ({children}) => {
    const [services, setServices] = useState([]);
    const { order, setOrder, addService, removeService, total, setTotal } = useOrder();

    const providerValue = {
        services,
        order,
        addService,
        removeService,
        total
    };

    useEffect(() => {
        fetchServices()
            .then((serv) => {
                setServices(serv);
                setOrder([]);
                setTotal(0);
            })
    }, []);

    return (
        <ShopContext.Provider value={providerValue}>{children}</ShopContext.Provider>
    );
}

export default ShopContext;
