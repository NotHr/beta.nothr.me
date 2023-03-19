import './globals.css'

export const metadata = {
  title: 'Nothr | Harshith reddy',
  description: "Harshith's personal website",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
