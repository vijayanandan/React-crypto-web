import cryptoReducer from '@/store/crypto/crypoDetailsSlice';
import { fetchCryptoData } from '@/api/store/cryptoApi/api';


describe('cryptoDetailsSlice', () => {
  const initialState = {
    data: [],
    loading: false,
    error: null,
  };

  it('should handle initial state', () => {
    expect(cryptoReducer(undefined, { type: 'unknown' })).toEqual(initialState);
  });

  it('should handle fetchCryptoData.pending', () => {
    const action = { type: fetchCryptoData.pending.type };
    const state = cryptoReducer(initialState, action);
    expect(state).toEqual({ ...initialState, loading: true });
  });

  it('should handle fetchCryptoData.fulfilled', () => {
    const action = { type: fetchCryptoData.fulfilled.type, payload: [{ id: 1, name: 'Bitcoin' }] };
    const state = cryptoReducer(initialState, action);
    expect(state).toEqual({ ...initialState, data: action.payload, loading: false });
  });

  it('should handle fetchCryptoData.rejected', () => {
    const action = { type: fetchCryptoData.rejected.type, error: { message: 'Failed to fetch' } };
    const state = cryptoReducer(initialState, action);
    expect(state).toEqual({ ...initialState, loading: false, error: 'Failed to fetch' });
  });
});
