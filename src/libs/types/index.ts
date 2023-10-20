import { Labels, CapItems, Brandings } from '@/libs/config/constant'

export interface CapItemType {
    capItems: typeof CapItems;
    setCapItems: (capItems: typeof CapItems) => void;
    setShowPicker: (capItemId: number) => void;
    setCapItemColor: (capItemId: number, hexcode: string, colorId: string) => void;
    setResetCap: () => void
}

export interface LabelsType {
    labels: typeof Labels;
    setLabels: (label: typeof Labels) => void;
    setShowPicker: (labelId: number) => void;
    setShowLabel: (labelId: number, option: boolean) => void;
    setLabelText: (labelId: number, text: string) => void;
    setLabelTextColor: (labelId: number, hexcode: string) => void;
    setLabelBackgroundColor: (labelId: number, hexcode: string, colorId: string) => void;
    setResetLabels: () => void
}

export interface sideType {
    side: number;
    setSelectedSide: (newSide: number) => void;
    setNextSide: () => void;
    setPrevSide: () => void;
}

export interface CartItem {
    id: number, 
    name: string,
    price: number, 
    quantity: number,
    mockQuantity: number,
    subtotal: number,
    type: number,
    configuration: {
        capParts: typeof CapItems,
        labels: typeof Labels,
        brandings: typeof Brandings
    },
    views: {
        front: string,
        back: string,
        left: string,
        right: string,
        bottom: string
    }
}

export interface CartType {
    cartItems: CartItem[]
    addToCart: (item: Omit<CartItem, 'id'>) => void;
    removeFromCart: (id: number) => void;
    // setCartItem: (id: number, quantity: number) => void;
    setMockQuantity: (id: number, mockQuantity: number) => void;
    setUpdateCart: () => void;
    setUpdateViews: (id: number, side: string, img: string) => void;
}



export interface brandingType {
    brandings: typeof Brandings;
    setShowBranding: (brandingId: number) => void;
    setBrandingImg: (brandingId: number, img: string) => void;
    removeBrandingImg: (brandingId: number) => void;
    setResetBrandings: () => void;
}

export interface loaderType {
    isLoading: boolean;
    setIsLoading: (load: boolean) => void;
}