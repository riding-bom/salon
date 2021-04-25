type footerProps = {
  className?: string;
};

const Footer = ({ className }: footerProps) => {
  return (
    <footer className={className}>
      <small>Service By Riding Bom</small>
    </footer>
  );
};

export default Footer;
