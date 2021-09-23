import React from "react";

const Whitepaper = () => {
    return (
        <section className="section-wp">
            <h2 className="h3 text-white text-center">Whitepaper</h2>
            <div className="whitepaper ml-auto mr-auto">
                <a className="text-white text-center d-block wp-dl" href="SpacePup-Whitepaper-100.pdf" download>
                    <i className="far fa-file-pdf d-block h2"></i>
                    Read Whitepaper  <i className="fas fa-download"></i>
                    </a>
            </div>
        </section>
    );
}

export default Whitepaper;