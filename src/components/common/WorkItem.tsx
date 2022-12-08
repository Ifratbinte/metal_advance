interface Props {
  svgIcon: string;
  alt: string;
  title: string;
}
const WorkItem: React.FC<Props> = ({ svgIcon, alt, title }) => {
  return (
    <div className="work-single-item">
      <div className="work-single-item-border border-color d-flex flex-direction-column justify-content-center align-items-center rounded-circle">
        <div className="work-single-items-content">
          <img src={svgIcon} alt={alt} className="work-icon" />
          <h5 className="work-title text-center font-Poppins fw-normal fs-18">{title}</h5>
        </div>
      </div>
    </div>
  );
};

export default WorkItem;