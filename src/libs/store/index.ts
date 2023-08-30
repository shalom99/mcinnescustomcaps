import { Labels, CapItems } from '@/libs/config/constant'
import { create } from 'zustand'


interface CapItemType {
    capItems: typeof CapItems;
    setCapItems: (capItems: typeof CapItems) => void;
    setShowPicker: (capItemId: number) => void;
    setCapItemColor: (capItemId: number, hexcode: string, filter: string) => void;
}

interface LabelsType {
    labels: typeof Labels;
    setLabels: (label: typeof Labels) => void;
    setShowPicker: (labelId: number) => void;
    setShowLabel: (labelId: number, option: boolean) => void;
    setLabelText: (labelId: number, text: string) => void;
    setLabelTextColor: (labelId: number, hexcode: string, filter: string) => void;
    setLabelBackgroundColor: (labelId: number, hexcode: string, filter: string) => void;
}

interface sideType {
    side: number;
    setSelectedSide: (newSide: number) => void;
    setNextSide: () => void;
    setPrevSide: () => void;
}

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


