import Script from "next/script";

export default function GoogleTag() {
  return <>
    <Script src="https://www.googletagmanager.com/gtag/js?id=G-63BV13DS8Q" />
    <Script id='google-analytics'>
      {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        
        gtag('config', 'G-63BV13DS8Q');
      `}
    </Script>
  </>
}