import './Footer.css'

const Footer = () => {
    const year: number = new Date().getFullYear();
  
    return (
        <footer>Copyright &copy; {year}</footer>
    )
}

export default Footer