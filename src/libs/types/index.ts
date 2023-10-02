import { Labels, CapItems, Brandings } from '@/libs/config/constant'

export interface CapItemType {
    capItems: typeof CapItems;
    setCapItems: (capItems: typeof CapItems) => void;
    setShowPicker: (capItemId: number) => void;
    setCapItemColor: (capItemId: number, hexcode: string, filter: string) => void;
    setResetCap: () => void
}

export interface LabelsType {
    labels: typeof Labels;
    setLabels: (label: typeof Labels) => void;
    setShowPicker: (labelId: number) => void;
    setShowLabel: (labelId: number, option: boolean) => void;
    setLabelText: (labelId: number, text: string) => void;
    setLabelTextColor: (labelId: number, hexcode: string, filter: string) => void;
    setLabelBackgroundColor: (labelId: number, hexcode: string, filter: string) => void;
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
    sampleImg: string
}

export interface CartType {
    cartItems: CartItem[]
    addToCart: (item: Omit<CartItem, 'id'>) => void;
    removeFromCart: (id: number) => void;
    // setCartItem: (id: number, quantity: number) => void;
    setMockQuantity: (id: number, mockQuantity: number) => void;
    setUpdateCart: () => void;
}

export interface previewImgType {
    previewImg: string | null;
    showPreview: boolean;
    setPreviewImg: (previewImg: string | null) => void;
    setShowPreview: (showPreview: boolean) => void;
}

export interface brandingType {
    brandings: typeof Brandings;
    setShowBranding: (brandingId: number) => void;
    setBranding: () => void;
    setResetBrandings: () => void;
}
