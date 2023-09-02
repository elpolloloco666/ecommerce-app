
import './globals.css';
import 'react-toastify/dist/ReactToastify.css';
import ReduxProvider from '../redux/ReduxProvider';
import AuthProvider from '@/components/AuthProvider';
import Navbar from '../components/Navbar';
import { ToastContainer } from 'react-toastify';

import { ZCOOL_QingKe_HuangYou } from 'next/font/google';
const zcool = ZCOOL_QingKe_HuangYou({ subsets: ['latin'], weight:'400' });

export const metadata = {
  title: 'Shopy',
  description: 'Find all the products you are looking for in shopy',
}

export default async function RootLayout({ children }) {



  return (
    <html lang="en">
      <body className={zcool.className}>
      <ReduxProvider>
        <AuthProvider>
          <Navbar/>
          <ToastContainer />
          {children}
        </AuthProvider>
      </ReduxProvider>
      </body>
    </html>
  )
}
