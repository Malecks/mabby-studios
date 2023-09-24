function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer>
            <h4>
                abbychornous.com
            </h4>
            <div>
                &copy; {currentYear} Abby Chornous
            </div>
        </footer>
    )
}

export default Footer