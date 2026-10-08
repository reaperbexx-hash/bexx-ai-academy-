import './globals.css';
export const metadata={title:'Bexx AI Academy',description:'AI design courses, e-books, PDFs and learning resources.'};
export default function Layout({children}){return <html><body><header><a href="/" className="brand">Bexx AI Academy</a><nav><a href="/courses">Courses</a><a href="/shop">Shop</a><a href="/dashboard">Dashboard</a><a href="/login">Login</a></nav></header><main>{children}</main><footer>© {new Date().getFullYear()} Bexx AI Academy</footer></body></html>}
