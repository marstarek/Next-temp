
import { ReactNode } from 'react'
export const metadata = {
    title: ' Example',
    description: 'How to do i18n in Next.js 13 within app directory',
}
export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html data-theme="light" >
            <body>{children}</body>
        </html>
    )
}