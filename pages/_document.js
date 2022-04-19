import Document, {Html,Head, Main, NextScript} from 'next/document'

export default class MyDocument extends Document {
    render() {
        return (
            <Html>
             <Head>
                {/* <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" 
                    integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" 
                    crossOrigin="anonymous" /> */}
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/sweetalert2@11.3.10/dist/sweetalert2.min.css"></link>
                {/* Google Font: Source Sans Pro */}
                <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700&display=fallback" />
                {/* Font Awesome */}
                <link rel="stylesheet" href="/asset/plugins/fontawesome-free/css/all.min.css" />
                {/* overlayScrollbars */}
                <link rel="stylesheet" href="/asset/plugins/overlayScrollbars/css/OverlayScrollbars.min.css" />
                {/* select2 */}
                <link rel="stylesheet" href="/asset/plugins/select2-bootstrap4-theme/select2-bootstrap4.min.css" />
                {/* Theme style */}
                <link rel="stylesheet" href="/asset/dist/css/adminlte.min.css" />
                {/* datatable */}
                <link rel="stylesheet" href="/asset/plugins/datatables-bs4/css/dataTables.bootstrap4.min.css" />
                
              
            </Head>
            <body className="">
                <Main/>
                <NextScript/>
               
                <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11.3.10/dist/sweetalert2.all.min.js"/>
                <script src="/asset/plugins/boostrap/js/boostrap.min.js"/>
                <script src="/asset/plugins/datatables-bs4/js/dataTables.bootstrap4.min.js"/>
                <script src="/asset/plugins/jquery/jquery.min.js"/>
                
            </body>
            </Html>
        )
    }
}