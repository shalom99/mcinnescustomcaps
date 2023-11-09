
import { create } from 'zustand'
import { CapItemType, CartType, LabelsType, brandingType, loaderType, sideType } from '../types'
import { Brandings, CapItems, Labels } from '../config/constant'


export const useCapItemStore = create<CapItemType>()((set) => ({
    capItems: CapItems,
    setCapItems: (capItems) => set({ capItems }),
    setShowPicker: (capItemId) => set((state) =>
    ({
        capItems: state.capItems.map((capItem) => {
            if (capItem.id === capItemId) {
                return {
                    ...capItem,
                    showColorPicker: !capItem.showColorPicker,
                };
            } else {
                return {
                    ...capItem,
                    showColorPicker: false
                }
            }
        }
        )
    })
    ),
    setCapItemColor: (capItemId, hexcode, colorId, filter) => set((state) => ({
        capItems: state.capItems.map((capItem) =>
            capItem.id === capItemId ? { ...capItem, hexcode, colorId, selectedColorFilter: filter, showColorPicker: false } : capItem
        )
    })),
    setResetCap: () => set({ capItems: CapItems })
}))


export const useLabelStore = create<LabelsType>()((set) => ({
    labels: Labels,
    setLabels: (labels) => set({ labels }),
    setShowPicker: (labelId) => set((state) => ({
        labels: state.labels.map((label) => {
            if (label.id === labelId) {
                return {
                    ...label,
                    showColorPicker: !label.showColorPicker,
                };
            } else {
                return {
                    ...label,
                    showColorPicker: false,
                };
            }
        }
        )
    })),
    setShowLabel: (labelId, option) => set((state) => ({
        labels: state.labels.map((label) =>
            label.id === labelId ? { ...label, show: option } : label
        )
    })),
    setLabelText: (labelId, text) => set((state) => ({
        labels: state.labels.map((label) =>
            label.id === labelId ? { ...label, text } : label
        )
    })),
    setLabelTextColor: (labelId, hexcode) => set((state) => ({
        labels: state.labels.map((label) =>
            label.id === labelId ? { ...label, filterHexColor: hexcode } : label
        )
    })),
    setLabelBackgroundColor: (labelId, hexcode, colorId, filter) => set((state) => ({
        labels: state.labels.map((label) =>
            label.id === labelId ? { ...label, filterHexColor: hexcode, colorId, selectedColorFilter: filter } : label
        )
    })),
    setResetLabels: () => set({ labels: Labels })
}))


export const useSideStore = create<sideType>()((set) => ({
    side: 0,
    setSelectedSide: (newSide) => set({ side: newSide }),
    setNextSide: () => set((state) => ({
        side: state.side < 3 ? state.side + 1 : 0
    })),
    setPrevSide: () => set((state) => ({
        side: state.side > 0 ? state.side - 1 : 3
    })),
}))


export const useCartStore = create<CartType>((set) => {
    let itemIdCounter = 1; // Initialize the ID counter

    return {
        cartItems: [],
        addToCart: (item) => {
            set((state) => {
                let counter = 0;

                for (const label of item.configuration.labels) {
                    if (label.show) {
                        counter += 1;
                    }
                }
                for (const branding of item.configuration.brandings) {
                    if (branding.show) {
                        counter += 1;
                    }
                }

                const newItem = {
                    ...item,
                    id: itemIdCounter,
                    mockBasePrice: 27,
                    mockQuantity: 25,
                    basePrice: 27,
                    quantity: 25,
                    addonPrice: counter * 2,
                    price: (counter * 2) + 27,
                    subtotal: ((counter * 2) + 27) * 25
                };
                itemIdCounter++;
                return {
                    cartItems: [...state.cartItems, newItem],
                };

            })

        },

        removeFromCart: (id) => set((state) => ({
            cartItems: state.cartItems.filter(item => item.id !== id)
        })),
        setMockQuantity: (id, mockQuantity) => set((state) => {
            let mockPrice = 27;
            if(mockQuantity === 25){
                mockPrice = 27;
            }else if(mockQuantity === 50){
                mockPrice = 18.95;
            }else if(mockQuantity === 100){
                mockPrice = 15.95;
            }else if(mockQuantity === 200){
                mockPrice = 14;
            }

            const updatedItems = state.cartItems.map(item => {
                if (item.id === id) {
                    return {
                        ...item,
                        mockQuantity,
                        mockBasePrice: mockPrice
                    };
                }
                return item;
            });
            return { cartItems: updatedItems }
        }),
        setUpdateCart: () => set((state) => {
            const updatedItems = state.cartItems.map(item => ({
                ...item,
                quantity: item.mockQuantity,
                basePrice: item.mockBasePrice,
                subtotal: (item.mockBasePrice + item.addonPrice) * item.mockQuantity
            }));
            return { cartItems: updatedItems }
        }),
        setUpdateViews: (id, side, img) => set((state) => {
            const updatedItems = state.cartItems.map(item => {
                if (item.id === id) {
                    return {
                        ...item,
                        views: {
                            ...item.views,
                            [side]: img,
                        }
                    };
                }
                return item;
            });
            return { cartItems: updatedItems }

        })
    };
});



export const useBrandingStore = create<brandingType>()((set) => ({
    brandings: Brandings,
    setShowBrandingPicker: (brandingId) => set((state) => ({
        brandings: state.brandings.map((branding) => {
            if (branding.id === brandingId) {
              return {
                ...branding,
                showBrandingPicker: !branding.showBrandingPicker,
              };
            } else {
              return {
                ...branding,
                showBrandingPicker: false,
              };
            }
          }
        )
    })),
    setBrandingImg: (brandingId, img) => set((state) => ({
        brandings: state.brandings.map((branding) =>
            branding.id === brandingId ? { ...branding, imageURL: img, show: true } : branding
        )
    })),
    removeBrandingImg: (brandingId) => set((state) => ({
        brandings: state.brandings.map((branding) =>
            branding.id === brandingId ? { ...branding, imageURL: "", show: false } : branding
        )
    })),
    setResetBrandings: () => set({ brandings: Brandings }),
    setCloseAllBrandings: () => set((state) => ({
        brandings: state.brandings.map((branding) => ({
            ...branding,
            showBrandingPicker: false
        })),
    })),
}))


export const useLoaderStore = create<loaderType>()((set) => ({
    isLoading: false,
    setIsLoading: (load) => set({ isLoading: load }),
}))






