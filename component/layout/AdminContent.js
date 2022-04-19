
const AdminContent = ({children, contentTitle, username}) => {
    return (
        <>
            <main className="col-md-12 ms-sm-auto col-lg-12 px-0">
                <div className="container-fluid mt-2">
                    {children}
                </div>
            </main>       
        </>

    )
};


export default AdminContent;
