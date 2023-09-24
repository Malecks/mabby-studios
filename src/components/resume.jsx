function Resume() {
    return (
        <div className="resume">
            <Experience />
            <hr />
            <Clients />     
            <hr />
            <Skills />
        </div>
    )
}

function Experience() {
    return (
        <section className="experience">
        <h4>Experience</h4>
        <Position company="Mabby studios." title="Marketing & PR consulting" date="2020–Present"/>
        <Position company="Aritzia" title="Communications" date="2021"/>
        <Position company="UBC" title="Master's of Business Administration" date="2020–2022"/>
        <div className="complex-position">
            <Position company="ZOï Agency" date="2016–2021"/>
            <Position title="Manager" date="2019"/>
            <Position title="Sr. Account executive" date="2018"/>
            <Position title="Coordinator" date="2016"/>
            <Position title="Intern" date="2016"/>
        </div>
        <Position company="Want Apothecary" title="Retail stylist" date="2015–2017"/>
        <Position company="Fleur du Mal" title="PR, Ecommerce, Showroom" date="2016"/>
        </section>
    )
}

function Position({company, title, date}) {
    return (
        <div className="position">
            <div className="position-header">
                <div className={company ? "company" : "spacer"}>{company ?? null}</div>
                <div className={title ? "title" : "hidden"}>{title ?? null}</div>
            </div>
            <div className="interpunct" />
            <div className="position-date">{date}</div>
        </div>
    )
}

function Clients() {
    return (
        <section className="clients-and-skills">
            <h4>Clients</h4>
            <p>Tiffany & Co. • Aritzia  • COS • Roots • Frank And Oak • WANT Les Essentiels • Fleur du Mal • Avenue Road • Canadian Arts and Fashion Awards • GOODEE</p>
        </section>
    )
}

function Skills() {
    return (
        <section className="clients-and-skills">
            <h4>Skills and services</h4>
            <p>Brand strategy, brand voice, marketing campaigns, media relations, events, copywriting, project management</p>
        </section>
    )
}

export default Resume