function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer>
            <div>
                abbychornous.com
            </div>
            <div>
                &copy; {currentYear} Abby Chornous
            </div>
        </footer>
    )
}

export default Footer