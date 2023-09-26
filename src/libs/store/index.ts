
import { create } from 'zustand'
import { CapItemType, CartType, LabelsType, brandingType, previewImgType, sideType } from '../types'
import { Brandings, CapItems, Labels } from '../config/constant'



export const useCapItemStore = create<CapItemType>()((set) => ({
    capItems: CapItems,
    setCapItems: (capItems) => set({capItems}),
    setShowPicker: (capItemId) => set((state) => ({
        capItems: state.capItems.map((capItem) => 
        capItem.id === capItemId ? { ...capItem, showColorPicker: !capItem.showColorPicker } : capItem
        )
    })),
    setCapItemColor: (capItemId, hexcode, filter) => set((state) => ({
        capItems: state.capItems.map((capItem) => 
        capItem.id === capItemId ? { ...capItem, hexcode: hexcode, selectedColorFilter: filter } : capItem
        )
    })),
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
    setLabelTextColor: (labelId, hexcode, filter) => set((state) => ({
        labels: state.labels.map((label) => 
        label.id === labelId ? { ...label, filterHexColor: hexcode, selectedColorFilter: filter} : label
        )
    })),
    setLabelBackgroundColor: (labelId, hexcode, filter) => set((state) => ({
        labels: state.labels.map((label) => 
        label.id === labelId ? { ...label, filterHexColor: hexcode, selectedColorFilter: filter} : label
        )
    })),
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



export const useCartStore = create<CartType>()((set) => ({
    cartItems: [{
        id: "one", 
        name: "Cap Designed Sample",
        price: 20, 
        quantity: 25,
        subtotal: 500
    }
    ],
    addToCart: (item) => set((state) => ({
        cartItems: [...state.cartItems, {...item, subtotal: item.price * item.quantity}]
    })),

    removeFromCart: (id) => set((state) => ({
        cartItems: state.cartItems.filter(item => item.id !== id)
    })),

    updateCartItem: (id, quantity) => set((state) => {
        const updatedItems = state.cartItems.map(item => {
            if(item.id === id) {
                return {
                    ...item,
                    quantity,
                    subtotal: item.price * quantity
                };
            }
            return item;
        });
        return { cartItems: updatedItems}
    }),

}))



export const usePreviewImgStore = create<previewImgType>()((set) => ({
    previewImg: '',
    showPreview: false,
    setPreviewImg: (previewImg) => set({previewImg}),
    setShowPreview: (showPreview) => set({showPreview})

}))



export const useBranding = create<brandingType>()((set) => ({
    brandings: Brandings,
    setShowBranding: (brandingId) => set((state) => ({
        brandings: state.brandings.map((branding) => 
        branding.id === brandingId ? { ...branding, show: !branding.show } : branding
        )
    })),
    setBranding: () => set((state) => ({

    }))
}))








