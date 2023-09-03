import { create } from 'zustand'


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

