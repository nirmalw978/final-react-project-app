function DefaultCard (){

    const cardStyle:React.CSSProperties = {
        width: '18rem',
    }



            return (
            <>
                <div className="card" style={cardStyle}>
                    <img className="card-img-top" src="//unsplash.it/200/200" alt="Card image cap" />
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">
                            Some quick example text to build on the card title and make up the bulk of the card's content.
                        </p>
                        <a href="#" className="btn btn-primary">
                            Go somewhere
                        </a>
                    </div>
                </div>
            </>
            );
}


export default DefaultCard;