import React, { useState, useEffect, createContext } from "react";

import { get_newspaper, get_newspaper_by_id } from "./NewspaperService";

export const NewspaperContext = createContext();

export const NewspaperContextProvider = (props) => {
    const { children } = props;

    const [newspapers, setNewspapers] = useState([]);
    const [newspaper, setNewspaper] = useState({});

    // =================== Newspaper ===================
    const onGetNewspapers = async () => {
        try {
            const result = await get_newspaper();
            if (result) {
                setNewspapers(result);
            }
        } catch (error) {
            console.log("on_get_newspapers error: ", error);
        }
    };

    const onGetNewspaperByID = async (id) => {
        try {
            const res = await get_newspaper_by_id(id);
            if (res) {
                setNewspaper(res);
            }
        } catch (error) {
            console.log("on_get_newspaper_ByID error: ", error);
        }
    };

    return (
        <NewspaperContext.Provider
            value={{
                onGetNewspapers, onGetNewspaperByID, newspapers, newspaper,
            }}>
            {children}
        </NewspaperContext.Provider>
    );
};
