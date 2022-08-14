import Document,{Html,Head,Main,NextScript} from 'next/document';
import Script from 'next/script';
class MyDocument extends Document{

    static async getInitialProps(ctx)
    {
        const initiaProps = await Document.getInitialProps(ctx);
        return {...initiaProps};
    }
    render(){
        return(
            <Html>
                <Head>
                <link rel="stylesheet" href="https://unicons.iconscout.com/release/v4.0.0/css/line.css"/>
                <link rel="icon" type="image/x-icon" href="/Favicon.png" />
                </Head>
                    <body>
                        <Main />
                        <NextScript />
                    </body>
            </Html>
        );
    }
}
export default MyDocument;