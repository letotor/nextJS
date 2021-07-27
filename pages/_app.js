import '../styles/globals.css'
import { UserProvider } from "@auth0/nextjs-auth0"

function MyApp({ Component, pageProps }) {
  const { user } = pageProps;
  return (
    <div className="mon conteneur">
      <UserProvider user={user}>
        <Component {...pageProps} />
      </UserProvider>
    </div>
  );
}

export default MyApp
