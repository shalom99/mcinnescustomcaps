import { create } from 'zustand'
import { Brandings } from '@/libs/config/constant'

interface previewImgType {
    previewImg: string | null;
    showPreview: boolean;
    setPreviewImg: (previewImg: string | null) => void;
    setShowPreview: (showPreview: boolean) => void;
}



export const usePreviewImgStore = create<previewImgType>()((set) => ({
    previewImg: '',
    showPreview: false,
    setPreviewImg: (previewImg) => set({previewImg}),
    setShowPreview: (showPreview) => set({showPreview})

}))


interface brandingType {
    brandings: typeof Brandings;
    setShowBranding: (brandingId: number) => void;
    setBranding: () => void;
}



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

// setLabelText: (labelId, text) => set((state) => ({
//     labels: state.labels.map((label) => 
//     label.id === labelId ? { ...label, text} : label
//     )
// })),

// setShowPicker: (capItemId) => set((state) => ({
//     capItems: state.capItems.map((capItem) => 
//     capItem.id === capItemId ? { ...capItem, showColorPicker: !capItem.showColorPicker } : capItem
//     )
// })),