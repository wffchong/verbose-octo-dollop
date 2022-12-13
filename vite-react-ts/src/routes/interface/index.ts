export interface RouterObject {
    path: string
    children?: RouterObject[]
    element?: React.ReactNode | null
}
