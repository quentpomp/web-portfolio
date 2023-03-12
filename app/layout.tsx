import './globals.css'

export const metadata = {
  title: 'quentin pompliano',
  description: 'a look into me',
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
