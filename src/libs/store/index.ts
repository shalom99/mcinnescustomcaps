
import { create } from 'zustand'
import { CapItemType, CartType, LabelsType, brandingType, loaderType, sideType } from '../types'
import { Brandings, CapItems, Labels } from '../config/constant'


export const useCapItemStore = create<CapItemType>()((set) => ({
    capItems: CapItems,
    setCapItems: (capItems) => set({capItems}),
    setShowPicker: (capItemId) => set((state) => ({
        capItems: state.capItems.map((capItem) => 
        capItem.id === capItemId ? { ...capItem, showColorPicker: !capItem.showColorPicker } : capItem
        )
    })),
    setCapItemColor: (capItemId, hexcode, colorId, filter) => set((state) => ({
        capItems: state.capItems.map((capItem) => 
        capItem.id === capItemId ? { ...capItem, hexcode, colorId, selectedColorFilter: filter } : capItem
        )
    })),
    setResetCap: () => set({capItems: CapItems})
}))


export const useLabelStore = create<LabelsType>()((set) => ({
    labels: Labels,
    setLabels: (labels) => set({labels}),
    setShowPicker: (labelId) => set((state) => ({
        labels: state.labels.map((label) => 
        label.id === labelId ? { ...label, showColorPicker: !label.showColorPicker } : label
        )
    })),
    setShowLabel: (labelId, option) => set((state) => ({
        labels: state.labels.map((label) => 
        label.id === labelId ? { ...label, show: option} : label
        )
    })),
    setLabelText: (labelId, text) => set((state) => ({
        labels: state.labels.map((label) => 
        label.id === labelId ? { ...label, text} : label
        )
    })),
    setLabelTextColor: (labelId, hexcode) => set((state) => ({
        labels: state.labels.map((label) => 
        label.id === labelId ? { ...label, filterHexColor: hexcode} : label
        )
    })),
    setLabelBackgroundColor: (labelId, hexcode, colorId, filter) => set((state) => ({
        labels: state.labels.map((label) => 
        label.id === labelId ? { ...label, filterHexColor: hexcode, colorId, selectedColorFilter: filter} : label
        )
    })),
    setResetLabels: () => set({labels: Labels})
}))


export const useSideStore = create<sideType>()((set) => ({
    side: 0,
    setSelectedSide: (newSide) => set({side: newSide}),
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
            const newItem = {
              ...item,
              id: itemIdCounter, // Assign the current ID and then increment the counter
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
            const updatedItems = state.cartItems.map(item => {
                if(item.id === id) {
                    return {
                        ...item,
                        mockQuantity,
                    };
                }
                return item;
            });
            return { cartItems: updatedItems}
        }),
        setUpdateCart: () => set((state) => {
            const updatedItems = state.cartItems.map(item => ({
                ...item,
                quantity: item.mockQuantity,
                subtotal: item.price * item.mockQuantity
            }));
            return { cartItems: updatedItems}
        }),
        setUpdateViews: (id, side, img) => set((state) => {
            const updatedItems = state.cartItems.map(item => {
                if(item.id === id) {
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
            return { cartItems: updatedItems}
       
        })
    };
  });



// export const usePreviewImgStore = create<previewImgType>()((set) => ({
//     previewImg: '',
//     showPreview: false,
//     setPreviewImg: (previewImg) => set({previewImg}),
//     setShowPreview: (showPreview) => set({showPreview})

// }))



export const useBrandingStore = create<brandingType>()((set) => ({
    brandings: Brandings,
    setShowBranding: (brandingId) => set((state) => ({
        brandings: state.brandings.map((branding) => 
        branding.id === brandingId ? { ...branding, show: !branding.show } : branding
        )
    })),
    setBrandingImg: (brandingId, img) => set((state) =>  ({
        brandings: state.brandings.map((branding) => 
        branding.id === brandingId ? { ...branding, imageURL: img} : branding
        )
    })),
    removeBrandingImg: (brandingId) => set((state) =>  ({
        brandings: state.brandings.map((branding) => 
        branding.id === brandingId ? { ...branding, imageURL: ""} : branding
        )
    })),
    setResetBrandings: () => set({brandings: Brandings})
}))


export const useLoaderStore = create<loaderType>()((set) => ({
    isLoading: false,
    setIsLoading: (load) => set({ isLoading: load}),
}))






