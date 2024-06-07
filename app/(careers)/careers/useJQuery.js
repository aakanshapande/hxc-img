"use client";

import { useEffect } from 'react';
import $ from 'jquery';

const useJQuery = (callback) => {
    useEffect(() => {
        callback($);
    }, []);
};

export default useJQuery;
