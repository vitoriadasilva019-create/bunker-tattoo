import Script from 'next/script'

// 1. Substitua o valor abaixo pelo ID do seu Pixel do Facebook.
//    Você encontra em: Gerenciador de Eventos > Fontes de dados > seu Pixel.
const FACEBOOK_PIXEL_ID = '3210722695789331'

export function FacebookPixel() {
  // Enquanto o ID não for preenchido, o pixel não é carregado.
  if (!FACEBOOK_PIXEL_ID || FACEBOOK_PIXEL_ID === 'SEU_PIXEL_ID_AQUI') {
    return null
  }

  return (
    <>
      <Script id="facebook-pixel" strategy="afterInteractive">
        {`
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '${FACEBOOK_PIXEL_ID}');
          fbq('track', 'PageView');
        `}
      </Script>
      <noscript>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          height="1"
          width="1"
          style={{ display: 'none' }}
          alt=""
          src={`https://www.facebook.com/tr?id=${FACEBOOK_PIXEL_ID}&ev=PageView&noscript=1`}
        />
      </noscript>
    </>
  )
}
