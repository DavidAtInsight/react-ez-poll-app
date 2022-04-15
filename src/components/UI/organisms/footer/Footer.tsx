import './Footer.css'

const Footer = () => {
    let year: number = new Date().getFullYear();
  
    return (
        <footer>Copyright &copy; {year}</footer>
    )
}

export default Footer