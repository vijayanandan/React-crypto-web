'use client';

import React, { useEffect } from 'react';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import  apiClient from '@/api/main';
import { apiEndPoints  } from '@/utils/endpoint';


export const fetchCryptoData = createAsyncThunk('crypoDetailsSlice/cryptoDetails' , async() => {
try {
    const response = await apiClient.get(apiEndPoints.getCrypoDetails);

    return response.data
}
catch( error) {
    console.log(error);
    throw error;
}

})