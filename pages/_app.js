
import '../styles/globals.css'
import Head from "next/head";
import Script from 'next/Script';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta
          name="deScription"
          content="Transformasikan dirimu jadi lebih baik"
        />
        
        <title>Metalit | Transfromasikan Dirimu Jadi Lebih Baik</title>

        <style></style>

        <link 
          rel="shortcut icon" 
          type="image/png" 
          href="https://metalit.oss-ap-southeast-5.aliyuncs.com/static/images/favicon_metalit.png"/>
        
        <link 
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css" 
          rel="stylesheet" />
        
        <style></style>
      

      
      </Head>
      <Component {...pageProps} />
      <Script 
          defer src="https://use.fontawesome.com/releases/v5.0.13/js/all.js" 
          integrity="sha384-xymdQtn1n3lH2wcu0qhcdaOpQwyoarkgLVxC/wZ5q7h9gHtxICrpcaSUfygqZGOe"
        />
        <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/js/bootstrap.bundle.min.js"/>
        <Script 
          src="https://code.jquery.com/jquery-3.2.1.slim.min.js" 
          integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" 
        />
        <Script 
          src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" 
          integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" 
        />
        <Script 
          src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" 
          integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" 
        />
    </>
  );
}

export default MyApp;
