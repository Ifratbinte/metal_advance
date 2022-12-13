import { Link } from "react-router-dom";

interface Props {
  image: string;
  alt: any;
  title: string;
  description: string;
  button?: string;
}

const Card: React.FC<Props> = ({ image, alt, title, description, button }) => {
  return (
    <div className="card rounded-0 h-100 custom-card" data-aos="zoom-in-down" data-aos-duration="1500">
      <img src={image} alt={alt} className="card-img-top" />
      <div className="card-body text-center">
        <h5 className="card-title font-Poppins fw-medium pb-3 fs-20">{title}</h5>
        <p className="card-text font-Poppins fs-16">{description}</p>
        {button && (
          <Link to="#" className="btn button-base-secondary card-btn">
            {button}
          </Link>
        )}
      </div>
    </div>
  );
};

export default Card;
